(() => {
  const companies = window.FLY_COMPANIES || {};
  const select = document.getElementById("intelCompany");
  const header = document.getElementById("intelHeader");
  const scoreGrid = document.getElementById("intelScoreGrid");
  const takeaways = document.getElementById("intelTakeaways");
  const hiringMetrics = document.getElementById("intelHiringMetrics");
  const tabs = document.getElementById("intelTabs");
  const table = document.getElementById("intelTable");

  const esc = v => String(v ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]));

  const ghostScore = label => {
    const x = String(label || "").toLowerCase();
    if (!x || x === "unknown") return null;
    if (x.includes("low") && x.includes("moderate")) return 35;
    if (x === "low") return 20;
    if (x.includes("moderate")) return 50;
    if (x.includes("elevated")) return 75;
    if (x.includes("high")) return 90;
    return null;
  };

  const aiScore = label => {
    const x = String(label || "").toLowerCase();
    if (!x || x.includes("unknown")) return null;
    if (x.includes("possible")) return 55;
    if (x.includes("likely")) return 75;
    if (x.includes("confirmed")) return 95;
    return null;
  };

  const scoreTone = n => n == null ? "unknown" : n >= 70 ? "risk" : n >= 45 ? "watch" : "good";

  function metricCard(label, value, sub, tone="neutral") {
    return `<article class="intel-score-card ${tone}">
      <span>${esc(label)}</span>
      <strong>${esc(value)}</strong>
      <small>${esc(sub || "")}</small>
    </article>`;
  }

  function render(key) {
    const c = companies[key];
    if (!c) return;
    const d = c.decisionLayer || {};
    const grades = c.grades || {};
    const gScore = ghostScore(d.ghostJobWatch);
    const aScore = aiScore(d.aiHiring);

    header.innerHTML = `
      <div>
        <p class="eyebrow">${esc(c.industry || "")}</p>
        <h2>${esc(c.name)}</h2>
        <p>${esc(c.meta || "")}</p>
      </div>
      <div class="intel-updated">${esc(c.updated || "")}</div>
    `;

    scoreGrid.innerHTML = [
      metricCard("Company Grade", c.overallGrade || "N/A", "Overall Fly grade"),
      metricCard("Business Stability", grades["Business Stability"] || "N/A", "Company health"),
      metricCard("Hiring Grade", grades["Hiring & Workforce"] || "N/A", "Hiring + workforce"),
      metricCard("Job Credibility", grades["Job Credibility"] || "N/A", "Role credibility"),
      metricCard("Ghost-Job Risk", gScore == null ? "N/A" : gScore + "/100", d.ghostJobWatch || "Insufficient evidence", scoreTone(gScore)),
      metricCard("ATS", d.ats || "N/A", d.ats ? "Detected / researched" : "Not yet verified"),
      metricCard("AI Filter Likelihood", aScore == null ? "N/A" : aScore + "/100", d.aiHiring || "Insufficient evidence", scoreTone(aScore)),
      metricCard("Hiring Reality", d.hiringReality || "N/A", d.timeWaste ? "Time-waste risk: " + d.timeWaste : "Tracked evidence")
    ].join("");

    const findings = c.findings || [];
    const good = findings.filter(x => x.type === "good").slice(0,2);
    const watch = findings.filter(x => x.type !== "good").slice(0,2);
    const pieces = [
      ...good.map(x => `<div class="intel-take good"><span>+</span><strong>${esc(x.title)}</strong></div>`),
      ...watch.map(x => `<div class="intel-take watch"><span>!</span><strong>${esc(x.title)}</strong></div>`)
    ];
    if (d.applyDecision) pieces.unshift(`<div class="intel-take decision"><span>→</span><strong>${esc(d.applyDecision)}</strong></div>`);
    takeaways.innerHTML = pieces.length ? pieces.join("") : '<div class="intel-empty">No short takeaways loaded.</div>';

    hiringMetrics.innerHTML = (c.hiringSnapshot || []).map(([label,value]) => `
      <article><span>${esc(label)}</span><strong>${esc(value)}</strong></article>
    `).join("") || '<div class="intel-empty">No hiring metrics loaded.</div>';

    const orderedTabs = [
      ["stability","Company"],
      ["hiring","Hiring"],
      ["credibility","Job Credibility"],
      ["employees","Workplace"],
      ["customers","Market / Product"]
    ].filter(([id]) => c.tabs && c.tabs[id]);

    tabs.innerHTML = orderedTabs.map(([id,label],i) => `<button type="button" data-tab="${id}" class="${i===0?"active":""}">${label}</button>`).join("");

    function drawTab(id) {
      tabs.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.tab === id));
      const section = c.tabs[id];
      if (!section) { table.innerHTML = ""; return; }
      const rows = section.rows || [];
      table.innerHTML = `
        <table class="intel-table">
          <thead><tr><th>Signal</th><th>Data</th><th>Status</th><th>Why it matters</th></tr></thead>
          <tbody>
            ${rows.map(row => `<tr>
              <td>${esc(row[0])}</td>
              <td><strong>${esc(row[1])}</strong></td>
              <td><span class="intel-status">${esc(row[2])}</span></td>
              <td>${esc(row[3])}</td>
            </tr>`).join("")}
          </tbody>
        </table>
      `;
    }

    tabs.querySelectorAll("button").forEach(b => b.addEventListener("click", () => drawTab(b.dataset.tab)));
    if (orderedTabs.length) drawTab(orderedTabs[0][0]);
  }

  Object.entries(companies).forEach(([key,c]) => {
    const o = document.createElement("option");
    o.value = key;
    o.textContent = c.name;
    select.appendChild(o);
  });
  select.addEventListener("change", () => render(select.value));
  const initial = companies.amazon ? "amazon" : Object.keys(companies)[0];
  select.value = initial;
  render(initial);

  document.querySelectorAll(".nav-dropdown-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      btn.closest(".nav-dropdown").classList.toggle("open", !open);
    });
  });
})();