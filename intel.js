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

  const parseCount = value => {
    const s = String(value || "").replace(/,/g,"").trim();
    const m = s.match(/~?([0-9]+(?:\.[0-9]+)?)\s*([KMB])?/i);
    if (!m) return null;
    let n = parseFloat(m[1]);
    const unit = (m[2] || "").toUpperCase();
    if (unit === "K") n *= 1000;
    if (unit === "M") n *= 1000000;
    if (unit === "B") n *= 1000000000;
    return Number.isFinite(n) ? n : null;
  };

  const hiringRate = company => {
    const rows = company.hiringSnapshot || [];
    let openings = null, employees = null;
    rows.forEach(([label,value]) => {
      if (/visible openings|current openings/i.test(label)) openings = parseCount(value);
      if (/current employees|employees/i.test(label) && !/estimate/i.test(label)) employees = parseCount(value);
      if (/current team/i.test(label)) employees = parseCount(value);
    });
    if (!openings || !employees) return null;
    return openings / employees * 100;
  };

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

    const hRate = hiringRate(c);
    const ghostLabel = d.ghostJobWatch
      ? d.ghostJobWatch.replace("Low–Moderate","Low").replace("Low-Moderate","Low")
      : "Not enough data";
    const aiLabel = !d.aiHiring || String(d.aiHiring).toLowerCase().includes("unknown")
      ? "None reported"
      : d.aiHiring;

    scoreGrid.innerHTML = [
      metricCard("Company Grade", c.overallGrade || "N/A", "Overall Fly grade"),
      metricCard("Business Stability", grades["Business Stability"] || "N/A", "Company health"),
      metricCard("Hiring Grade", grades["Hiring & Workforce"] || "N/A", "Hiring + workforce"),
      metricCard("Job Credibility", grades["Job Credibility"] || "N/A", "Role credibility"),
      metricCard("Hiring Rate", hRate == null ? "Not available" : hRate.toFixed(hRate >= 10 ? 0 : 1) + "%", hRate == null ? "Needs openings + workforce count" : "Visible openings ÷ workforce", hRate == null ? "unknown" : "neutral"),
      metricCard("Likely Ghost Jobs", ghostLabel, gScore == null ? "Not enough tracked evidence" : gScore + "/100 risk signal", scoreTone(gScore)),
      metricCard("ATS", d.ats ? d.ats.replace(" / internal system","").replace(" / unknown","") : "Not reported", d.ats ? "Application system" : "No ATS confirmed"),
      metricCard("AI Resume Filtering", aiLabel, aScore == null ? "No employer-specific use reported" : aScore + "/100 likelihood signal", scoreTone(aScore))
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
          <thead><tr><th>Signal</th><th>Data</th><th>Status</th><th>Takeaway</th><th>Source</th></tr></thead>
          <tbody>
            ${rows.map(row => {
              const src = row[4] && c.sources ? c.sources[row[4]] : null;
              return `<tr>
                <td>${esc(row[0])}</td>
                <td><strong>${esc(row[1])}</strong></td>
                <td><span class="intel-status">${esc(row[2])}</span></td>
                <td>${esc(row[3])}</td>
                <td>${src && src.url ? `<a class="intel-source-link" href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.name || "Source")}</a>` : "—"}</td>
              </tr>`;
            }).join("")}
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