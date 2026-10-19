const translations = {
  hi: {
    heroTitle: "सीखो, अभ्यास करो और आगे बढ़ो!",
    heroText: "एक ही जगह पर पढ़ाई, नोट्स और टेस्ट।",
    searchPlaceholder: "विषय या चैप्टर खोजें...",
    subjectsTitle: "अपने विषय चुनें",
    studyDescription: "अपना चैप्टर चुनकर पढ़ाई शुरू करें।",
    chaptersTitle: "चैप्टर",
    lessonLabel: "पढ़ाई के नोट्स",
    quizTitle: "अभ्यास टेस्ट",
    submit: "जवाब चेक करें",
    retry: "दोबारा टेस्ट दें",
    markDone: "चैप्टर पूरा किया ✓",
    completed: "पूरा हुआ",
    notCompleted: "अभी पूरा नहीं हुआ",
    progressTitle: "तुम्हारी प्रगति",
    progressText: "पूरे किए गए चैप्टर",
    back: "← विषयों पर वापस जाएँ",
    search: "खोजें",
    noSubjects: "कोई विषय नहीं मिला।",
    noChapters: "कोई चैप्टर नहीं मिला।",
    noQuestions: "इस चैप्टर में अभी प्रश्न उपलब्ध नहीं हैं।",
    selectAnswer: "पहले हर प्रश्न का उत्तर चुनें।",
    score: "तुम्हारा स्कोर",
    correct: "सही उत्तर",
    wrong: "गलत उत्तर",
    explanation: "समझिए:",
    reset: "प्रगति रीसेट करें",
    resetConfirm: "क्या आप सभी चैप्टर की प्रगति मिटाना चाहते हैं?",
    resetDone: "प्रगति रीसेट हो गई।",
    chooseSubject: "पढ़ाई शुरू करने के लिए कोई विषय चुनें।"
  },
  en: {
    heroTitle: "Learn, Practice and Grow!",
    heroText: "Study, notes and tests in one place.",
    searchPlaceholder: "Search subjects or chapters...",
    subjectsTitle: "Choose Your Subjects",
    studyDescription: "Choose a chapter to start studying.",
    chaptersTitle: "Chapters",
    lessonLabel: "Study Notes",
    quizTitle: "Practice Test",
    submit: "Check Answers",
    retry: "Try Again",
    markDone: "Mark Chapter Complete ✓",
    completed: "Completed",
    notCompleted: "Not completed yet",
    progressTitle: "Your Progress",
    progressText: "Completed chapters",
    back: "← Back to Subjects",
    search: "Search",
    noSubjects: "No subjects found.",
    noChapters: "No chapters found.",
    noQuestions: "No questions available for this chapter yet.",
    selectAnswer: "Please answer every question first.",
    score: "Your Score",
    correct: "Correct answers",
    wrong: "Wrong answers",
    explanation: "Explanation:",
    reset: "Reset Progress",
    resetConfirm: "Do you want to erase all chapter progress?",
    resetDone: "Progress has been reset.",
    chooseSubject: "Choose a subject to start studying."
  }
};

let currentLanguage = "hi";
let currentSubject = null;
let currentChapter = null;
let quizSubmitted = false;
let selectedAnswers = {};

const STORAGE_KEY = "4nizz-study-progress";

function $(id) {
  return document.getElementById(id);
}

function getText(key) {
  return translations[currentLanguage][key] || translations.hi[key] || key;
}

function getSubjectName(subject) {
  return currentLanguage === "en"
    ? subject.englishName || subject.name
    : subject.name;
}

function getChapterName(chapter) {
  if (currentLanguage === "en") {
    return chapter.englishTitle || chapter.title;
  }
  return chapter.title;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function chapterKey(subject, chapter) {
  return `${subject.id}::${chapter.id || chapter.title}`;
}

function getAllChapters() {
  return STUDY_DATA.flatMap(subject =>
    (subject.chapters || []).map(chapter => ({
      subject,
      chapter
    }))
  );
}

function renderStaticText() {
  const textMap = {
    heroTitle: "heroTitle",
    heroText: "heroText",
    subjectsTitle: "subjectsTitle",
    chaptersTitle: "chaptersTitle",
    lessonLabel: "lessonLabel",
    quizTitle: "quizTitle",
    progressTitle: "progressTitle",
    progressText: "progressText",
    backBtn: "back"
  };

  Object.entries(textMap).forEach(([id, key]) => {
    const element = $(id);
    if (element) element.textContent = getText(key);
  });

  if ($("searchInput")) {
    $("searchInput").placeholder = getText("searchPlaceholder");
  }

  if ($("searchBtn")) {
    $("searchBtn").textContent = getText("search");
  }

  if ($("markDoneBtn")) {
    $("markDoneBtn").textContent = getText("markDone");
  }

  if ($("submitQuizBtn")) {
    $("submitQuizBtn").textContent = getText("submit");
  }

  if ($("retryBtn")) {
    $("retryBtn").textContent = getText("retry");
  }

  if ($("resetProgress")) {
    $("resetProgress").textContent = getText("reset");
  }

  if ($("studyDescription")) {
    $("studyDescription").textContent = currentSubject
      ? getText("studyDescription")
      : getText("chooseSubject");
  }

  if ($("languageBtn")) {
    $("languageBtn").textContent =
      currentLanguage === "hi" ? "English" : "हिंदी";
  }
}

function renderSubjects() {
  const grid = $("subjectGrid");
  if (!grid) return;

  const query = ($("searchInput")?.value || "").trim().toLowerCase();

  const subjects = STUDY_DATA.filter(subject => {
    const subjectName = `${subject.name} ${subject.englishName || ""}`.toLowerCase();
    const chapterMatches = (subject.chapters || []).some(chapter =>
      `${chapter.title} ${chapter.englishTitle || ""}`.toLowerCase().includes(query)
    );

    return !query || subjectName.includes(query) || chapterMatches;
  });

  $("subjectCount").textContent = `${subjects.length} / ${STUDY_DATA.length}`;

  if (!subjects.length) {
    grid.innerHTML = `<p>${escapeHTML(getText("noSubjects"))}</p>`;
    return;
  }

  grid.innerHTML = subjects.map(subject => {
    const done = getProgress().filter(key =>
      key.startsWith(`${subject.id}::`)
    ).length;

    return `
      <button class="subject-card" type="button"
        data-subject="${escapeHTML(subject.id)}">
        <span class="subject-icon">${escapeHTML(subject.icon || "📘")}</span>
        <h3>${escapeHTML(getSubjectName(subject))}</h3>
        <p>${subject.chapters.length} ${currentLanguage === "hi" ? "चैप्टर" : "chapters"}</p>
        <small>${done} ${currentLanguage === "hi" ? "पूरे" : "completed"}</small>
      </button>
    `;
  }).join("");

  grid.querySelectorAll("[data-subject]").forEach(button => {
    button.addEventListener("click", () => {
      const subject = STUDY_DATA.find(item => item.id === button.dataset.subject);
      if (subject) openSubject(subject);
    });
  });
}

function openSubject(subject) {
  currentSubject = subject;
  currentChapter = null;
  selectedAnswers = {};
  quizSubmitted = false;

  $("studySection").hidden = false;
  $("studyTitle").textContent = getSubjectName(subject);
  $("studyIcon").textContent = subject.icon || "📘";
  $("studyDescription").textContent = getText("studyDescription");

  $("lesson").hidden = true;
  $("chapterList").innerHTML = "";
  $("quizArea").innerHTML = "";
  $("quizResult").textContent = "";

  renderChapters();
  renderStaticText();

  $("studySection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderChapters() {
  const list = $("chapterList");
  if (!list || !currentSubject) return;

  const query = ($("searchInput")?.value || "").trim().toLowerCase();

  const chapters = (currentSubject.chapters || []).filter(chapter =>
    !query ||
    `${chapter.title} ${chapter.englishTitle || ""}`.toLowerCase().includes(query) ||
    `${currentSubject.name} ${currentSubject.englishName || ""}`.toLowerCase().includes(query)
  );

  if (!chapters.length) {
    list.innerHTML = `<p>${escapeHTML(getText("noChapters"))}</p>`;
    return;
  }

  const progress = getProgress();

  list.innerHTML = chapters.map((chapter, index) => {
    const done = progress.includes(chapterKey(currentSubject, chapter));

    return `
      <button class="chapter-btn" type="button"
        data-chapter-index="${currentSubject.chapters.indexOf(chapter)}">
        <span>${index + 1}. ${escapeHTML(getChapterName(chapter))}</span>
        <span>${done ? "✅" : "📖"}</span>
      </button>
    `;
  }).join("");

  list.querySelectorAll("[data-chapter-index]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.chapterIndex);
      openChapter(currentSubject.chapters[index]);
    });
  });
}

function openChapter(chapter) {
  currentChapter = chapter;
  selectedAnswers = {};
  quizSubmitted = false;

  $("lesson").hidden = false;
  $("lessonTitle").textContent = getChapterName(chapter);

  const notes = chapter.notes || [];
  $("lessonContent").innerHTML = notes.length
    ? `<ul>${notes.map(note => `<li>${escapeHTML(note)}</li>`).join("")}</ul>`
    : `<p>${escapeHTML(getText("noQuestions"))}</p>`;

  $("quizResult").textContent = "";
  $("submitQuizBtn").hidden = false;
  $("retryBtn").hidden = true;

  renderQuiz();
  updateMarkDoneButton();

  $("lesson").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuiz() {
  const area = $("quizArea");
  if (!area || !currentChapter) return;

  const questions = currentChapter.questions || [];
  $("questionCount").textContent =
    `${questions.length} ${currentLanguage === "hi" ? "प्रश्न" : "questions"}`;

  if (!questions.length) {
    area.innerHTML = `<p>${escapeHTML(getText("noQuestions"))}</p>`;
    $("submitQuizBtn").hidden = true;
    $("retryBtn").hidden = true;
    return;
  }

  area.innerHTML = questions.map((question, qIndex) => `
    <div class="quiz-question" data-question="${qIndex}">
      <h4>${qIndex + 1}. ${escapeHTML(question.question)}</h4>
      <div class="quiz-options">
        ${(question.options || []).map((option, optionIndex) => `
          <label class="quiz-option" data-option="${optionIndex}">
            <input type="radio" name="question-${qIndex}"
              value="${optionIndex}" ${selectedAnswers[qIndex] === optionIndex ? "checked" : ""}
              ${quizSubmitted ? "disabled" : ""}>
            <span>${escapeHTML(option)}</span>
          </label>
        `).join("")}
      </div>
      <div class="question-feedback" id="feedback-${qIndex}"></div>
    </div>
  `).join("");

  if (!quizSubmitted) {
    area.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener("change", () => {
        selectedAnswers[Number(input.name.split("-")[1])] = Number(input.value);
      });
    });
  } else {
    showQuizFeedback();
  }
}

function submitQuiz() {
  if (!currentChapter) return;

  const questions = currentChapter.questions || [];
  if (!questions.length) return;

  const unanswered = questions.some((question, index) =>
    selectedAnswers[index] === undefined
  );

  if (unanswered) {
    $("quizResult").textContent = getText("selectAnswer");
    return;
  }

  quizSubmitted = true;

  const correctCount = questions.reduce((total, question, index) =>
    total + (selectedAnswers[index] === Number(question.answer) ? 1 : 0), 0
  );

  const wrongCount = questions.length - correctCount;
  const percentage = Math.round((correctCount / questions.length) * 100);

  $("quizResult").textContent =
    `${getText("score")}: ${correctCount}/${questions.length} (${percentage}%) | ` +
    `${getText("correct")}: ${correctCount} | ${getText("wrong")}: ${wrongCount}`;

  $("submitQuizBtn").hidden = true;
  $("retryBtn").hidden = false;

  renderQuiz();
}

function showQuizFeedback() {
  const questions = currentChapter?.questions || [];

  questions.forEach((question, qIndex) => {
    const feedback = $(`feedback-${qIndex}`);
    if (!feedback) return;

    const correct = selectedAnswers[qIndex] === Number(question.answer);

    feedback.innerHTML = `
      <p class="${correct ? "correct" : "wrong"}">
        ${correct ? "✅" : "❌"}
        ${correct
          ? (currentLanguage === "hi" ? "सही जवाब!" : "Correct!")
          : (currentLanguage === "hi" ? "गलत जवाब। सही उत्तर: " : "Incorrect. Correct answer: ")
            + escapeHTML(question.options[question.answer] ?? "")}
      </p>
      <p><strong>${escapeHTML(getText("explanation"))}</strong>
        ${escapeHTML(question.explanation || "")}
      </p>
    `;
  });
}

function retryQuiz() {
  selectedAnswers = {};
  quizSubmitted = false;

  $("quizResult").textContent = "";
  $("submitQuizBtn").hidden = false;
  $("retryBtn").hidden = true;

  renderQuiz();
}

function markChapterDone() {
  if (!currentSubject || !currentChapter) return;

  const key = chapterKey(currentSubject, currentChapter);
  const progress = getProgress();

  if (!progress.includes(key)) {
    progress.push(key);
    saveProgress(progress);
  }

  updateMarkDoneButton();
  renderChapters();
  renderSubjects();
  updateProgress();
}

function updateMarkDoneButton() {
  if (!currentSubject || !currentChapter) return;

  const done = getProgress().includes(chapterKey(currentSubject, currentChapter));

  $("markDoneBtn").textContent = done
    ? `✅ ${getText("completed")}`
    : getText("markDone");

  $("markDoneBtn").disabled = done;
}

function updateProgress() {
  const all = getAllChapters();
  const progress = getProgress();
  const total = all.length;
  const completed = all.filter(({ subject, chapter }) =>
    progress.includes(chapterKey(subject, chapter))
  ).length;

  if ($("progressCount")) {
    $("progressCount").textContent = `${completed} / ${total}`;
  }

  if ($("progressBar")) {
    $("progressBar").style.width =
      `${total ? Math.round((completed / total) * 100) : 0}%`;

    $("progressBar").setAttribute(
      "aria-valuenow",
      String(total ? Math.round((completed / total) * 100) : 0)
    );
  }
}

function resetProgress() {
  if (!confirm(getText("resetConfirm"))) return;

  localStorage.removeItem(STORAGE_KEY);

  if (currentSubject) renderChapters();
  if (currentChapter) updateMarkDoneButton();

  renderSubjects();
  updateProgress();
  alert(getText("resetDone"));
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "hi" ? "en" : "hi";

  renderStaticText();
  renderSubjects();

  if (currentSubject) {
    $("studyTitle").textContent = getSubjectName(currentSubject);
    renderChapters();
  }

  if (currentChapter) {
    $("lessonTitle").textContent = getChapterName(currentChapter);

    const notes = currentChapter.notes || [];
    $("lessonContent").innerHTML = notes.length
      ? `<ul>${notes.map(note => `<li>${escapeHTML(note)}</li>`).join("")}</ul>`
      : "";

    renderQuiz();
    updateMarkDoneButton();
  }
}

function searchWebsite() {
  if (currentSubject) {
    renderChapters();
  } else {
    renderSubjects();
  }
}

function goBack() {
  $("studySection").hidden = true;
  currentSubject = null;
  currentChapter = null;
  selectedAnswers = {};
  quizSubmitted = false;
  renderSubjects();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startWebsite() {
  if (typeof STUDY_DATA === "undefined" || !Array.isArray(STUDY_DATA)) {
    document.body.innerHTML =
      "<h2>data.js लोड नहीं हुआ। कृपया data.js फाइल का नाम और कोड चेक करें।</h2>";
    return;
  }

  renderStaticText();
  renderSubjects();
  updateProgress();

  $("languageBtn")?.addEventListener("click", toggleLanguage);
  $("searchBtn")?.addEventListener("click", searchWebsite);
  $("searchInput")?.addEventListener("input", searchWebsite);
  $("backBtn")?.addEventListener("click", goBack);
  $("markDoneBtn")?.addEventListener("click", markChapterDone);
  $("submitQuizBtn")?.addEventListener("click", submitQuiz);
  $("retryBtn")?.addEventListener("click", retryQuiz);
  $("resetProgress")?.addEventListener("click", resetProgress);
}

startWebsite();