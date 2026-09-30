(() => {
  const companies = window.FLY_COMPANIES || {};
  const searchForm = document.getElementById("companySearchForm");
  const searchInput = document.getElementById("companySearch");
  const options = document.getElementById("companyOptions");
  const message = document.getElementById("searchMessage");
  const dashboard = document.getElementById("companyDashboard");
  const deepDive = document.getElementById("deepDiveContent");
  const dialog = document.getElementById("evidenceDialog");

  let activeCompanyKey = "amazon";
  let activeTab = "stability";

  Object.entries(companies).forEach(([key, company]) => {
    const opt = document.createElement("option");
    opt.value = company.name;
    opt.dataset.key = key;
    options.appendChild(opt);
  });

  function findCompanyKey(value) {
    const normalized = String(value || "").trim().toLowerCase();
    if (!normalized) return null;
    return Object.entries(companies).find(([key, company]) => {
      return key === normalized || company.name.toLowerCase() === normalized ||
        (company.aliases || []).some(alias => alias.toLowerCase() === normalized);
    })?.[0] || null;
  }

  function renderCompany(key) {
    const company = companies[key];
    if (!company) return;
    activeCompanyKey = key;
    activeTab = "stability";
    message.textContent = "";
    dashboard.hidden = false;
    searchInput.value = company.name;

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
        (sourceId ? '<button type="button" class="source-btn" data-source="' + escapeAttribute(sourceId) + '">Evidence</button>' : "") +
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
      message.textContent = "This prototype currently includes Amazon and Cruva. Try one of those demo companies.";
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
