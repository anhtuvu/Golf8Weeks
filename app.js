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
        <p>Week content will be implemented in next step.</p>
      </div>
    `;
  }
}
