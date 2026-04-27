// app.js

// Basic routing logic
(function() {
  const path = window.location.pathname;

  if (path.includes("week.html")) {
    initWeekPage();
  } else {
    initDashboard();
  }
})();

function initDashboard() {
  const container = document.getElementById("week-list");
  if (!container) return;

  // Temporary hardcode for Step 1
  for (let i = 1; i <= 8; i++) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>Week ${i}</h3>
      <button onclick="goToWeek('week${i}')">Vào tuần này</button>
    `;

    container.appendChild(card);
  }
}

function goToWeek(weekId) {
  window.location.href = `week.html?week=${weekId}`;
}

function initWeekPage() {
  const params = new URLSearchParams(window.location.search);
  const week = params.get("week") || "week1";

  const title = document.getElementById("week-title");
  const content = document.getElementById("week-content");

  if (title) title.innerText = week.toUpperCase();

  if (content) {
    content.innerHTML = `
      <div class="card">
        <p><strong>Main cue:</strong> Hông đi trước</p>
        <button onclick="startSession()">Bắt đầu buổi tập</button>
      </div>
      <div id="session-container"></div>
    `;
  }
}

// ===== SESSION MODE (BASIC) =====

let sessionState = {
  currentStep: 0,
  steps: []
};

function startSession() {
  sessionState.steps = [
    { type: "info", text: "Warm-up 10 phút" },
    { type: "drill", text: "Cross-arm rotation - Set 1: 5 reps" },
    { type: "hit", text: "Đánh 5 bóng" },
    { type: "drill", text: "Cross-arm rotation - Set 2: 5 reps" },
    { type: "hit", text: "Đánh 5 bóng" }
  ];

  sessionState.currentStep = 0;
  renderSession();
}

function renderSession() {
  const container = document.getElementById("session-container");
  if (!container) return;

  const step = sessionState.steps[sessionState.currentStep];

  if (!step) {
    container.innerHTML = `
      <div class="card">
        <h3>Hoàn thành buổi tập 🎯</h3>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="card">
      <h3>Step ${sessionState.currentStep + 1}</h3>
      <p>${step.text}</p>
      <button onclick="nextStep()">Done</button>
    </div>
  `;
}

function nextStep() {
  sessionState.currentStep++;
  renderSession();
}
