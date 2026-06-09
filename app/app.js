const QUESTION_LIMIT = 60;
const ALL_MODULES = "__all__";
const DEFAULT_MODULE = "Quiz Bank";
const STORAGE_KEYS = {
  history: "xsiamQuizHistory",
  lastAttempt: "xsiamQuizLastAttemptId",
  missed: "xsiamQuizMissedIds",
};

const state = {
  bank: [],
  categories: [],
  modules: [],
  quiz: [],
  index: 0,
  answers: {},
};

const els = {
  bankCount: document.querySelector("#bank-count"),
  historyCount: document.querySelector("#history-count"),
  missedCount: document.querySelector("#missed-count"),
  setupView: document.querySelector("#setup-view"),
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  moduleSelect: document.querySelector("#module-select"),
  modeSelect: document.querySelector("#mode-select"),
  questionCount: document.querySelector("#question-count"),
  shuffleOptions: document.querySelector("#shuffle-options"),
  startBtn: document.querySelector("#start-btn"),
  clearHistoryBtn: document.querySelector("#clear-history-btn"),
  loadStatus: document.querySelector("#load-status"),
  categorySummary: document.querySelector("#category-summary"),
  historyList: document.querySelector("#history-list"),
  quizCategory: document.querySelector("#quiz-category"),
  questionPosition: document.querySelector("#question-position"),
  answeredCounter: document.querySelector("#answered-counter"),
  progressFill: document.querySelector("#progress-fill"),
  questionText: document.querySelector("#question-text"),
  answerHint: document.querySelector("#answer-hint"),
  answerList: document.querySelector("#answer-list"),
  prevBtn: document.querySelector("#prev-btn"),
  nextBtn: document.querySelector("#next-btn"),
  submitBtn: document.querySelector("#submit-btn"),
  scoreTitle: document.querySelector("#score-title"),
  scoreDetails: document.querySelector("#score-details"),
  resultCategories: document.querySelector("#result-categories"),
  reviewList: document.querySelector("#review-list"),
  newQuizBtn: document.querySelector("#new-quiz-btn"),
};

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || "[]");
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history.slice(0, 20)));
}

function getLastAttemptId() {
  return localStorage.getItem(STORAGE_KEYS.lastAttempt);
}

function saveLastAttemptId(attemptId) {
  localStorage.setItem(STORAGE_KEYS.lastAttempt, attemptId);
}

function getMissedIds() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.missed) || "[]");
}

function saveMissedIds(ids) {
  localStorage.setItem(STORAGE_KEYS.missed, JSON.stringify([...new Set(ids)]));
}

function selectedModule() {
  return els.moduleSelect?.value || ALL_MODULES;
}

function questionsForSelectedModule(questions = state.bank) {
  const moduleName = selectedModule();
  if (moduleName === ALL_MODULES) return questions;
  return questions.filter((question) => question.module === moduleName);
}

function populateModuleSelect() {
  if (!els.moduleSelect) return;
  const current = els.moduleSelect.value || ALL_MODULES;
  els.moduleSelect.innerHTML = `<option value="${ALL_MODULES}">All question sources</option>`;

  state.modules.forEach((moduleName) => {
    const option = document.createElement("option");
    option.value = moduleName;
    option.textContent = moduleName;
    els.moduleSelect.appendChild(option);
  });

  els.moduleSelect.value = state.modules.includes(current) ? current : ALL_MODULES;
}

function updateQuestionCountBounds() {
  const available = questionsForSelectedModule().length;
  const max = Math.min(QUESTION_LIMIT, Math.max(1, available));
  els.questionCount.max = max;
  els.questionCount.value = Math.min(max, Math.max(1, Number.parseInt(els.questionCount.value, 10) || max));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const expected = new Set(b);
  return a.every((item) => expected.has(item));
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function categoryStatsFromQuestions(questions, answers = null) {
  const stats = {};
  questions.forEach((question) => {
    if (!stats[question.category]) {
      stats[question.category] = { total: 0, answered: 0, correct: 0 };
    }
    stats[question.category].total += 1;
    if (answers) {
      const selected = answers[question.id] || [];
      if (selected.length) stats[question.category].answered += 1;
      if (sameSet(selected, question.correct_answers)) {
        stats[question.category].correct += 1;
      }
    }
  });
  return stats;
}

function moduleStatsFromQuestions(questions) {
  const stats = {};
  questions.forEach((question) => {
    if (!stats[question.module]) {
      stats[question.module] = { total: 0, answered: 0, correct: 0 };
    }
    stats[question.module].total += 1;
  });
  return stats;
}

function renderCategoryCards(container, stats, showScores = false) {
  container.innerHTML = "";
  Object.entries(stats)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([category, stat]) => {
      const percent = showScores && stat.total ? (stat.correct / stat.total) * 100 : 0;
      const card = document.createElement("article");
      card.className = "category-card";
      card.innerHTML = `
        <small>${category}</small>
        <strong>${showScores ? formatPercent(percent) : stat.total}</strong>
        <span class="muted">${showScores ? `${stat.correct} of ${stat.total} correct` : "available questions"}</span>
        <div class="meter"><span style="width: ${showScores ? percent : 100}%"></span></div>
      `;
      container.appendChild(card);
    });
}

function renderChrome() {
  const history = getHistory();
  const visibleBank = questionsForSelectedModule();
  const visibleIds = new Set(visibleBank.map((question) => question.id));
  const missed = getMissedIds().filter((id) => visibleIds.has(id));
  els.bankCount.textContent = visibleBank.length;
  els.historyCount.textContent = history.length;
  els.missedCount.textContent = missed.length;
  renderCategoryCards(els.categorySummary, categoryStatsFromQuestions(visibleBank), false);
  renderHistory(history);
}

function renderHistory(history) {
  els.historyList.innerHTML = "";
  if (!history.length) {
    els.historyList.innerHTML = `<p class="status">No attempts yet.</p>`;
    return;
  }

  history.slice(0, 8).forEach((attempt) => {
    const item = document.createElement("article");
    item.className = "history-item";
    const canReview = Boolean(attempt.id && attempt.results);
    const modules = attempt.modules?.length ? attempt.modules.join(", ") : "Saved attempt";
    item.innerHTML = `
      <div>
        <strong>${attempt.scorePercent}%</strong>
        <span class="muted">${attempt.correct} of ${attempt.total} correct</span>
        <small>${escapeHtml(modules)}</small>
      </div>
      <div class="history-actions">
        <small>${new Date(attempt.completedAt).toLocaleString()}</small>
        <button class="secondary small-btn" data-review-attempt="${escapeHtml(attempt.id || "")}" ${canReview ? "" : "disabled"}>Review</button>
      </div>
    `;
    els.historyList.appendChild(item);
  });
}

function show(view) {
  [els.setupView, els.quizView, els.resultView].forEach((el) => el.classList.add("hidden"));
  view.classList.remove("hidden");
}

function startQuiz() {
  const mode = els.modeSelect.value;
  const requested = Math.min(
    QUESTION_LIMIT,
    Math.max(1, Number.parseInt(els.questionCount.value, 10) || QUESTION_LIMIT),
  );

  let pool = questionsForSelectedModule();
  if (mode === "missed") {
    const missedIds = new Set(getMissedIds());
    pool = pool.filter((question) => missedIds.has(question.id));
  }

  if (!pool.length) {
    els.loadStatus.textContent = mode === "missed" ? "No missed questions saved yet." : "No questions available.";
    return;
  }

  state.quiz = shuffle(pool)
    .slice(0, requested)
    .map((question) => ({
      ...question,
      displayOptions: els.shuffleOptions.checked ? shuffle(question.options) : [...question.options],
    }));
  state.index = 0;
  state.answers = {};
  localStorage.removeItem(STORAGE_KEYS.lastAttempt);
  renderQuestion();
  show(els.quizView);
}

function renderQuestion() {
  const question = state.quiz[state.index];
  const selected = state.answers[question.id] || [];
  const isMultiple = question.correct_answers.length > 1;
  const answered = state.quiz.filter((item) => (state.answers[item.id] || []).length).length;

  els.quizCategory.textContent = question.category;
  els.questionPosition.textContent = `Question ${state.index + 1} of ${state.quiz.length}`;
  els.answeredCounter.textContent = `${answered} / ${state.quiz.length} answered`;
  els.progressFill.style.width = `${((state.index + 1) / state.quiz.length) * 100}%`;
  els.questionText.textContent = question.question;
  els.answerHint.textContent = isMultiple
    ? `Select ${question.correct_answers.length} answers.`
    : "Select one answer.";
  els.answerList.innerHTML = "";

  question.displayOptions.forEach((option, optionIndex) => {
    const id = `answer-${state.index}-${optionIndex}`;
    const label = document.createElement("label");
    label.className = "answer-option";
    label.setAttribute("for", id);
    label.innerHTML = `
      <input id="${id}" name="answer-${state.index}" type="${isMultiple ? "checkbox" : "radio"}" value="${escapeHtml(option)}" ${
        selected.includes(option) ? "checked" : ""
      } />
      <span>${escapeHtml(option)}</span>
    `;
    label.querySelector("input").addEventListener("change", () => updateAnswer(question, option, isMultiple));
    els.answerList.appendChild(label);
  });

  els.prevBtn.disabled = state.index === 0;
  els.nextBtn.disabled = state.index === state.quiz.length - 1;
}

function updateAnswer(question, option, isMultiple) {
  const current = state.answers[question.id] || [];
  if (isMultiple) {
    state.answers[question.id] = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
  } else {
    state.answers[question.id] = [option];
  }
  renderQuestion();
}

function scoreQuiz() {
  const results = state.quiz.map((question) => {
    const selected = state.answers[question.id] || [];
    return {
      question,
      selected,
      correct: sameSet(selected, question.correct_answers),
    };
  });
  const correct = results.filter((result) => result.correct).length;
  const total = results.length;
  const scorePercent = total ? Math.round((correct / total) * 100) : 0;
  return { results, correct, total, scorePercent };
}

function createAttempt(scored) {
  const completedAt = new Date().toISOString();
  return {
    id: `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    completedAt,
    total: scored.total,
    correct: scored.correct,
    wrong: scored.total - scored.correct,
    unanswered: scored.results.filter((result) => !result.selected.length).length,
    scorePercent: scored.scorePercent,
    modules: [...new Set(state.quiz.map((question) => question.module || DEFAULT_MODULE))].sort(),
    categories: categoryStatsFromQuestions(state.quiz, state.answers),
    results: scored.results.map(({ question, selected, correct }) => ({
      question: {
        id: question.id,
        module: question.module || DEFAULT_MODULE,
        category: question.category,
        question: question.question,
        options: question.options,
        correct_answers: question.correct_answers,
        source_file: question.source_file,
        source_quiz: question.source_quiz,
      },
      selected,
      correct,
    })),
  };
}

function attemptToScored(attempt) {
  return {
    results: (attempt.results || []).map((result) => ({
      question: result.question,
      selected: result.selected || [],
      correct: Boolean(result.correct),
    })),
    correct: attempt.correct,
    total: attempt.total,
    scorePercent: attempt.scorePercent,
    completedAt: attempt.completedAt,
    categories: attempt.categories,
  };
}

function submitQuiz() {
  const scored = scoreQuiz();
  const existingMissed = getMissedIds();
  const currentMissed = scored.results.filter((result) => !result.correct).map((result) => result.question.id);
  const correctedNow = scored.results.filter((result) => result.correct).map((result) => result.question.id);
  saveMissedIds([...existingMissed, ...currentMissed].filter((id) => !correctedNow.includes(id)));

  const attempt = createAttempt(scored);
  saveHistory([attempt, ...getHistory()]);
  saveLastAttemptId(attempt.id);
  renderResults(attemptToScored(attempt));
  renderChrome();
  show(els.resultView);
}

function confirmSubmitQuiz() {
  const answered = state.quiz.filter((question) => (state.answers[question.id] || []).length).length;
  const unanswered = state.quiz.length - answered;
  const questionWord = unanswered === 1 ? "question" : "questions";
  const unansweredWarning = unanswered
    ? `\n\nYou have ${unanswered} unanswered ${questionWord}.`
    : "";

  if (!window.confirm(`Submit this test now?${unansweredWarning}\n\nYour attempt will be scored and saved.`)) {
    return;
  }

  submitQuiz();
}

function renderResults(scored) {
  const completedDate = scored.completedAt ? new Date(scored.completedAt).toLocaleString() : "";
  els.scoreTitle.textContent = `${scored.scorePercent}%`;
  els.scoreDetails.innerHTML = `
    <div><small>Total</small><strong>${scored.total}</strong></div>
    <div><small>Correct</small><strong>${scored.correct}</strong></div>
    <div><small>Wrong</small><strong>${scored.total - scored.correct}</strong></div>
    <div><small>Unanswered</small><strong>${scored.results.filter((result) => !result.selected.length).length}</strong></div>
    ${completedDate ? `<div><small>Completed</small><strong class="date-stat">${escapeHtml(completedDate)}</strong></div>` : ""}
  `;
  renderCategoryCards(els.resultCategories, scored.categories || categoryStatsFromResults(scored.results), true);
  renderReview(scored.results);
}

function categoryStatsFromResults(results) {
  const stats = {};
  results.forEach(({ question, correct, selected }) => {
    if (!stats[question.category]) {
      stats[question.category] = { total: 0, answered: 0, correct: 0 };
    }
    stats[question.category].total += 1;
    if (selected.length) stats[question.category].answered += 1;
    if (correct) stats[question.category].correct += 1;
  });
  return stats;
}

function renderReview(results) {
  els.reviewList.innerHTML = "";
  results.forEach(({ question, selected, correct }, index) => {
    const item = document.createElement("article");
    item.className = `review-item ${correct ? "correct" : "incorrect"}`;
    const selectedText = selected.length ? selected.join("; ") : "No answer selected";
    const moduleName = question.module || DEFAULT_MODULE;
    item.innerHTML = `
      <p class="eyebrow">${escapeHtml(moduleName)} - ${escapeHtml(question.category)} - Question ${index + 1}</p>
      <h3>${escapeHtml(question.question)}</h3>
      <div class="pill-row">
        <span class="pill ${correct ? "good" : "bad"}">Your answer: ${escapeHtml(selectedText)}</span>
        <span class="pill good">Correct: ${escapeHtml(question.correct_answers.join("; "))}</span>
      </div>
    `;
    els.reviewList.appendChild(item);
  });
}

function reviewAttempt(attemptId) {
  const attempt = getHistory().find((item) => item.id === attemptId);
  if (!attempt || !attempt.results) {
    els.loadStatus.textContent = "That saved attempt could not be found.";
    show(els.setupView);
    return;
  }
  saveLastAttemptId(attempt.id);
  renderResults(attemptToScored(attempt));
  show(els.resultView);
}

function restoreLastAttempt() {
  const lastAttemptId = getLastAttemptId();
  if (!lastAttemptId) return;

  const attempt = getHistory().find((item) => item.id === lastAttemptId);
  if (!attempt || !attempt.results) return;

  renderResults(attemptToScored(attempt));
  show(els.resultView);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadBank() {
  try {
    const response = await fetch("../data/questions.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    state.bank = (payload.questions || []).map((question) => ({
      ...question,
      module: question.module || DEFAULT_MODULE,
      source_type: question.source_type || "quiz_export",
    }));
    state.categories = payload.categories || [];
    state.modules = payload.modules || Object.keys(moduleStatsFromQuestions(state.bank)).sort();
    populateModuleSelect();
    updateQuestionCountBounds();
    els.loadStatus.textContent = `Loaded ${state.bank.length} questions across ${state.modules.length} source module(s).`;
    els.startBtn.disabled = !state.bank.length;
    renderChrome();
    restoreLastAttempt();
  } catch (error) {
    els.loadStatus.textContent = `Could not load ../data/questions.json. Start a local web server from XSIAM-Questions.`;
    els.startBtn.disabled = true;
  }
}

els.startBtn.addEventListener("click", startQuiz);
els.moduleSelect.addEventListener("change", () => {
  localStorage.removeItem(STORAGE_KEYS.lastAttempt);
  updateQuestionCountBounds();
  renderChrome();
});
els.prevBtn.addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
});
els.nextBtn.addEventListener("click", () => {
  state.index = Math.min(state.quiz.length - 1, state.index + 1);
  renderQuestion();
});
els.submitBtn.addEventListener("click", confirmSubmitQuiz);
els.newQuizBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEYS.lastAttempt);
  show(els.setupView);
});
els.clearHistoryBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEYS.history);
  localStorage.removeItem(STORAGE_KEYS.lastAttempt);
  localStorage.removeItem(STORAGE_KEYS.missed);
  renderChrome();
});
els.historyList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-attempt]");
  if (!button || !button.dataset.reviewAttempt) return;
  reviewAttempt(button.dataset.reviewAttempt);
});

loadBank();
