(() => {
  const companies = window.FLY_COMPANIES || {};
  const searchForm = document.getElementById("companySearchForm");
  const searchInput = document.getElementById("companySearch");
  const options = document.getElementById("companyOptions");
  const message = document.getElementById("searchMessage");
  const dashboard = document.getElementById("companyDashboard");
  const deepDive = document.getElementById("deepDiveContent");
  const dialog = document.getElementById("evidenceDialog");
  const analysisStatus = document.getElementById("analysisStatus");
  const analysisHeadline = document.getElementById("analysisHeadline");
  const analysisDetail = document.getElementById("analysisDetail");
  const compareSelect = document.getElementById("compareCompany");
  const compareButton = document.getElementById("compareButton");

  let activeCompanyKey = "amazon";
  let activeTab = "stability";

  Object.entries(companies).forEach(([key, company]) => {
    const opt = document.createElement("option");
    opt.value = company.name;
    opt.dataset.key = key;
    options.appendChild(opt);

    const compareOpt = document.createElement("option");
    compareOpt.value = key;
    compareOpt.textContent = company.name;
    compareSelect.appendChild(compareOpt);
  });

  function findCompanyKey(value) {
    const normalized = String(value || "").trim().toLowerCase();
    if (!normalized) return null;
    return Object.entries(companies).find(([key, company]) => {
      return key === normalized || company.name.toLowerCase() === normalized ||
        (company.aliases || []).some(alias => alias.toLowerCase() === normalized);
    })?.[0] || null;
  }

  async function renderCompany(key) {
    const company = companies[key];
    if (!company) return;
    activeCompanyKey = key;
    activeTab = "stability";
    message.textContent = "";
    dashboard.hidden = false;
    searchInput.value = company.name;

    analysisStatus.hidden = false;
    analysisHeadline.textContent = "Analyzing " + company.name + "…";
    analysisDetail.textContent = "Checking stability, hiring, employee, customer and credibility signals.";
    await wait(260);
    analysisDetail.textContent = "Cross-reading grades, risks and source strength.";
    await wait(260);
    analysisDetail.textContent = "Building the job-seeker brief.";
    await wait(260);
    analysisStatus.hidden = true;

    document.getElementById("companyIndustry").textContent = company.industry;
    document.getElementById("companyName").textContent = company.name;
    document.getElementById("companyMeta").textContent = company.meta;
    document.getElementById("overallGrade").textContent = company.overallGrade;
    document.getElementById("gradeUpdated").textContent = company.updated;

    const gradeGrid = document.getElementById("gradeGrid");
    gradeGrid.innerHTML = "";
    Object.entries(company.grades).forEach(([label, grade]) => {
      const card = document.createElement("div");
      card.className = "grade-card";
      card.innerHTML = "<span>" + escapeHtml(label) + "</span><strong>" + escapeHtml(grade) + "</strong>";
      gradeGrid.appendChild(card);
    });

    renderBizzieBrief(company);
    renderAskFly(company);
    syncCompareOptions(key);

    const findings = document.getElementById("flyFindings");
    findings.innerHTML = "";
    company.findings.forEach(item => {
      const div = document.createElement("div");
      div.className = "finding " + item.type;
      const icon = item.type === "good" ? "✓" : item.type === "risk" ? "!" : "!";
      div.innerHTML = '<span class="finding-icon">' + icon + '</span><div><strong>' +
        escapeHtml(item.title) + '</strong><p>' + escapeHtml(item.text) + '</p></div>';
      findings.appendChild(div);
    });
    document.getElementById("signalCount").textContent = company.findings.length + " key signals";

    const hiring = document.getElementById("hiringSnapshot");
    hiring.innerHTML = "";
    company.hiringSnapshot.forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "metric-row";
      row.innerHTML = "<span>" + escapeHtml(label) + "</span><strong>" + escapeHtml(value) + "</strong>";
      hiring.appendChild(row);
    });

    const readout = document.getElementById("jobSeekerReadout");
    readout.innerHTML = [
      ["Good signs", company.readout.good],
      ["Watch", company.readout.watch],
      ["Ask in interview", company.readout.ask]
    ].map(([label, text]) =>
      '<div class="readout-block"><strong>' + escapeHtml(label) + '</strong><p>' + escapeHtml(text) + '</p></div>'
    ).join("");

    document.querySelectorAll(".deep-dive-nav button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === activeTab);
    });

    renderTab(activeTab);
    dashboard.scrollIntoView({behavior:"smooth", block:"start"});
  }

  function renderTab(tabKey) {
    activeTab = tabKey;
    const company = companies[activeCompanyKey];

    document.querySelectorAll(".deep-dive-nav button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabKey);
    });

    if (tabKey === "sources") {
      const sourceCards = Object.entries(company.sources).map(([id, src]) => {
        return '<article class="source-item"><strong>' + escapeHtml(src.name) + '</strong>' +
          '<p>' + escapeHtml(src.note || "") + '</p>' +
          '<a href="' + escapeAttribute(src.url) + '" target="_blank" rel="noopener">Open source ↗</a></article>';
      }).join("");
      deepDive.innerHTML = '<div class="deep-dive-header"><div><p class="eyebrow">Evidence layer</p><h3>Sources</h3>' +
        '<p>These are the sources behind this prototype company profile. First-party claims are labeled as such in the research process.</p></div></div>' +
        '<div class="source-list">' + sourceCards + '</div>';
      return;
    }

    const tab = company.tabs[tabKey];
    if (!tab) return;
    const rows = tab.rows.map(row => {
      const sourceId = row[4];
      return "<tr><td><strong>" + escapeHtml(row[0]) + "</strong></td><td>" + escapeHtml(row[1]) +
        "</td><td>" + escapeHtml(row[2]) + "</td><td>" + escapeHtml(row[3]) + "</td><td>" +
        (sourceId ? '<button type="button" class="source-btn" data-source="' + escapeAttribute(sourceId) + '">Evidence</button><div class="evidence-strength">' + escapeHtml(sourceStrength(company.sources[sourceId])) + '</div>' : "") +
        "</td></tr>";
    }).join("");

    deepDive.innerHTML = '<div class="deep-dive-header"><div><p class="eyebrow">Deep dive</p><h3>' +
      escapeHtml(tab.title) + '</h3><p>' + escapeHtml(tab.intro) + '</p></div></div>' +
      '<table class="detail-table"><thead><tr><th>Area</th><th>Finding</th><th>Signal</th><th>Why it matters</th><th>Source</th></tr></thead><tbody>' +
      rows + '</tbody></table>';

    deepDive.querySelectorAll(".source-btn").forEach(btn => {
      btn.addEventListener("click", () => openEvidence(btn.dataset.source));
    });
  }

  function openEvidence(sourceId) {
    const company = companies[activeCompanyKey];
    const src = company.sources[sourceId];
    if (!src) return;
    document.getElementById("evidenceTitle").textContent = src.name;
    document.getElementById("evidenceSummary").textContent = src.note || "";
    document.getElementById("evidenceSources").innerHTML =
      '<div class="dialog-source"><a href="' + escapeAttribute(src.url) + '" target="_blank" rel="noopener">Open original source ↗</a></div>';
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function submitSearch() {
    const key = findCompanyKey(searchInput.value);
    if (!key) {
      message.textContent = "That company is not loaded into this prototype yet. Choose one of the available demo companies.";
      return;
    }
    renderCompany(key);
  }

  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    submitSearch();
  });

  document.querySelectorAll(".demo-company").forEach(btn => {
    btn.addEventListener("click", () => renderCompany(btn.dataset.company));
  });

  document.querySelectorAll(".deep-dive-nav button").forEach(btn => {
    btn.addEventListener("click", () => renderTab(btn.dataset.tab));
  });

  function renderBizzieBrief(company) {
    const good = company.findings.find(x => x.type === "good") || company.findings[0];
    const watch = company.findings.find(x => x.type === "watch" || x.type === "risk") || company.findings[1] || company.findings[0];
    const recent = company.findings[company.findings.length - 1] || good;
    const cards = [
      ["Fly's read", company.overallGrade + " overall", company.readout.good],
      ["Biggest opportunity", good?.title || "Positive signal", good?.text || company.readout.good],
      ["Biggest risk", watch?.title || "Watch signal", watch?.text || company.readout.watch],
      ["Ask before accepting", "Pressure-test the team", company.readout.ask]
    ];
    document.getElementById("bizzieBrief").innerHTML = cards.map(([label,title,text]) =>
      '<article class="brief-card"><span>' + escapeHtml(label) + '</span><strong>' +
      escapeHtml(title) + '</strong><p>' + escapeHtml(text) + '</p></article>'
    ).join("");
  }

  function renderAskFly(company) {
    const prompts = [
      ["Is this company stable?", "stability"],
      ["Are the jobs real?", "jobs"],
      ["Why should I be cautious?", "risk"],
      ["What should I ask in the interview?", "interview"]
    ];
    const wrap = document.getElementById("askFlyPrompts");
    wrap.innerHTML = prompts.map(([label,key]) =>
      '<button class="prompt-chip" type="button" data-ask="' + key + '">' + escapeHtml(label) + '</button>'
    ).join("");
    wrap.querySelectorAll("[data-ask]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const box = document.getElementById("askFlyAnswer");
        box.classList.add("loading");
        box.innerHTML = '<span class="answer-kicker">Fly is reading the research…</span><p>Connecting the strongest signals.</p>';
        await wait(420);
        const answer = answerQuestion(company, btn.dataset.ask);
        box.classList.remove("loading");
        box.innerHTML = '<span class="answer-kicker">' + escapeHtml(btn.textContent) + '</span><p>' + escapeHtml(answer) + '</p>';
      });
    });
    document.getElementById("askFlyAnswer").innerHTML =
      '<span class="answer-kicker">Choose a question</span><p>Fly will answer using the company research already loaded into this prototype.</p>';
  }

  function answerQuestion(company, type) {
    const risk = company.findings.find(x => x.type === "risk" || x.type === "watch");
    if (type === "stability") {
      return "Fly's read: " + company.grades["Business Stability"] + " for business stability. " +
        company.readout.good + " The important caveat: " + company.readout.watch;
    }
    if (type === "jobs") {
      return "Job credibility is graded " + company.grades["Job Credibility"] +
        ". The prototype separates whether a posting exists from whether the team looks durable. " +
        (company.tabs.credibility?.intro || company.readout.watch);
    }
    if (type === "risk") {
      return (risk ? risk.title + ": " + risk.text + " " : "") + company.readout.watch;
    }
    return company.readout.ask;
  }

  function syncCompareOptions(currentKey) {
    Array.from(compareSelect.options).forEach(opt => opt.disabled = opt.value === currentKey);
    const firstAvailable = Array.from(compareSelect.options).find(opt => !opt.disabled);
    if (firstAvailable) compareSelect.value = firstAvailable.value;
    document.getElementById("compareResult").innerHTML = "<p>Choose another demo company to compare grades and risk signals.</p>";
  }

  function renderCompare() {
    const left = companies[activeCompanyKey];
    const right = companies[compareSelect.value];
    if (!left || !right) return;
    const labels = ["Overall","Business Stability","Hiring & Workforce","Employee Sentiment","Customer / Product","Job Credibility"];
    const rows = labels.map(label => {
      const lv = label === "Overall" ? left.overallGrade : (left.grades[label] || "—");
      const rv = label === "Overall" ? right.overallGrade : (right.grades[label] || "—");
      return '<div class="compare-score-row"><span>' + escapeHtml(label) + '</span><span><strong>' +
        escapeHtml(lv) + '</strong> vs <strong>' + escapeHtml(rv) + '</strong></span></div>';
    }).join("");
    document.getElementById("compareResult").innerHTML =
      '<p><strong>' + escapeHtml(left.name) + '</strong> vs <strong>' + escapeHtml(right.name) +
      '</strong></p>' + rows;
  }

  function sourceStrength(src) {
    if (!src || !src.url) return "Source";
    const u = src.url.toLowerCase();
    if (u.includes("sec.gov") || u.includes("ftc.gov") || u.includes("osha.gov")) return "Primary public record";
    if (u.includes("reuters.com") || u.includes("theacsi.com")) return "Independent";
    if (u.includes("reddit.com")) return "Community signal";
    return "First-party";
  }

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  compareButton.addEventListener("click", renderCompare);

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    })[char]);
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  renderCompany("amazon");
})();
