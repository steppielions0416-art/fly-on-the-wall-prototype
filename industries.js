(() => {
  const companies = window.FLY_COMPANIES || {};

  const INDUSTRIES = [
    "Oil & Gas",
    "Renewable Energy",
    "Utilities",
    "Construction",
    "Manufacturing",
    "Retail",
    "E-commerce",
    "Transportation",
    "Logistics",
    "Software / SaaS",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Banking",
    "Fintech",
    "Insurance",
    "Real Estate",
    "Staffing & Recruiting",
    "Healthcare",
    "Education"
  ];

  const COMPANY_MAP = {
    "Retail": ["amazon"],
    "E-commerce": ["amazon", "cruva"],
    "Logistics": ["amazon"],
    "Software / SaaS": ["cruva", "revenuecat", "sensortower"],
    "Cloud Computing": ["amazon"],
    "Artificial Intelligence": ["cruva"],
    "Banking": ["bny"],
    "Staffing & Recruiting": ["insightglobal"],
    "Manufacturing": ["vertiv"]
  };

  const INDUSTRY_NOTES = {
    "Retail": {
      hiring: "Active, but uneven",
      why: "Amazon remains a large-scale employer, while selected corporate organizations have continued restructuring.",
      demand: "Operations / IT, software and fulfillment are the clearest hiring areas in the tracked sample.",
      money: "Large-scale operating investment continues, but team-level stability varies."
    },
    "E-commerce": {
      hiring: "Positive, but uneven",
      why: "Cruva is in expansion mode while Amazon is hiring at scale alongside selected corporate reductions.",
      demand: "Amazon: Ops / IT, software and fulfillment. Cruva: marketing is the largest currently identified function.",
      money: "The sample spans a scaled public operator and a small bootstrapped growth company."
    },
    "Logistics": {
      hiring: "Active, but uneven",
      why: "Amazon's visible openings include major operations and fulfillment hiring, while restructuring remains a team-level risk.",
      demand: "Operations / IT and fulfillment.",
      money: "Demand remains large in the tracked company, but this is only one-company coverage."
    },
    "Software / SaaS": {
      hiring: "Mixed / positive",
      why: "Cruva is expanding aggressively; RevenueCat has no major layoff event in the current research; Sensor Tower's recent acquisition activity creates integration risk.",
      demand: "Cruva: marketing. RevenueCat and Sensor Tower: current function-level counts are not yet loaded.",
      money: "RevenueCat is Series C with about $119M in reported funding; Cruva is bootstrapped; Sensor Tower has institutional ownership and recent M&A."
    },
    "Cloud Computing": {
      hiring: "Active, but uneven",
      why: "The current Fly sample is Amazon only, so the signal reflects Amazon rather than the full cloud market.",
      demand: "Software and technical roles are visible within Amazon's broader hiring mix.",
      money: "Current sample coverage is too narrow for an industry-wide investment conclusion."
    },
    "Artificial Intelligence": {
      hiring: "Expansion-stage",
      why: "Cruva has six current openings against an approximately 11-person recent team size.",
      demand: "Marketing is the largest identified hiring function in the current sample.",
      money: "Current sample is one bootstrapped early-stage company, so industry-wide conclusions would be inappropriate."
    },
    "Banking": {
      hiring: "Mixed",
      why: "BNY has real openings and a visible Houston operations cluster, but company headcount has declined from 2023 levels and some VP job families show repeated reposting.",
      demand: "Client operations / processing is the clearest identified cluster in the current sample.",
      money: "BNY is financially established, but the current Fly sample contains only one banking company."
    },
    "Staffing & Recruiting": {
      hiring: "High activity",
      why: "Insight Global reports 60K+ annual placements and 7K+ direct placements, indicating substantial ongoing recruiting activity.",
      demand: "The current dataset does not yet break active demand down by role family.",
      money: "The sample supports strong placement activity, not a full industry investment trend."
    },
    "Manufacturing": {
      hiring: "Strong",
      why: "Vertiv added 2,500+ salaried hires in 2025 alongside strong revenue growth and a large backlog.",
      demand: "Engineering, services and operations.",
      money: "Large backlog and strong revenue growth support the current positive hiring signal."
    }
  };

  const chips = document.getElementById("industryChips");
  const profile = document.getElementById("industryProfile");

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[ch]));
  }

  function trackedKeys(industry) {
    return (COMPANY_MAP[industry] || []).filter(key => companies[key]);
  }

  function getKnownOpenings(company) {
    const rows = company.hiringSnapshot || [];
    for (const [label, value] of rows) {
      if (/openings/i.test(label)) {
        const raw = String(value);
        const m = raw.match(/([0-9]+(?:\.[0-9]+)?)\s*K/i);
        if (m) return { value: Math.round(parseFloat(m[1]) * 1000), display: raw };
        const n = raw.match(/\b([0-9][0-9,]*)\b/);
        if (n) return { value: parseInt(n[1].replace(/,/g, ""), 10), display: raw };
      }
    }
    return null;
  }

  function gradeValue(grade) {
    const map = {"A+":4.3,"A":4.0,"A-":3.7,"B+":3.3,"B":3.0,"B-":2.7,"C+":2.3,"C":2.0,"C-":1.7,"D":1.0};
    return map[grade] || null;
  }

  function averageGrade(keys) {
    const vals = keys.map(k => gradeValue(companies[k].overallGrade)).filter(v => v != null);
    if (!vals.length) return "N/A";
    const avg = vals.reduce((a,b)=>a+b,0)/vals.length;
    if (avg >= 3.85) return "A";
    if (avg >= 3.5) return "A-";
    if (avg >= 3.15) return "B+";
    if (avg >= 2.85) return "B";
    if (avg >= 2.5) return "B-";
    if (avg >= 2.15) return "C+";
    return "C";
  }

  function companyLocations(keys) {
    return [...new Set(keys.map(k => {
      const meta = companies[k].meta || "";
      return meta.split(" · ")[0] || "";
    }).filter(Boolean))];
  }

  function knownOpeningSummary(keys) {
    const vals = keys.map(k => getKnownOpenings(companies[k])).filter(Boolean);
    if (!vals.length) return {main:"N/A", note:"No current opening count is loaded for this tracked sample."};
    const total = vals.reduce((sum,x)=>sum+x.value,0);
    const partial = vals.length < keys.length;
    const main = total >= 1000 ? (total/1000).toFixed(total % 1000 === 0 ? 0 : 1) + "K+" : total + (partial ? "+" : "");
    return {main, note: partial ? "Partial total from companies with a verified count loaded." : "Observed openings across the tracked sample."};
  }

  function layoffSummary(keys) {
    const signals = [];
    keys.forEach(k => {
      const c = companies[k];
      (c.hiringSnapshot || []).forEach(([label,value]) => {
        if (/layoff|restructur|headcount trend/i.test(label)) signals.push(c.name + ": " + value);
      });
      (c.findings || []).forEach(item => {
        if (/layoff|restructur|integration/i.test((item.title||"")+" "+(item.text||""))) {
          signals.push(c.name + ": " + (item.title || item.text));
        }
      });
    });
    return signals.length ? [...new Set(signals)].slice(0,5) : ["No specific layoff/restructuring signal is loaded for this tracked sample."];
  }

  function samplePositives(keys) {
    const out = [];
    keys.forEach(k => (companies[k].findings || []).filter(x => x.type === "good").slice(0,2).forEach(x => out.push(companies[k].name + ": " + x.title)));
    return [...new Set(out)].slice(0,5);
  }

  function sampleCautions(keys) {
    const out = [];
    keys.forEach(k => (companies[k].findings || []).filter(x => x.type !== "good").slice(0,2).forEach(x => out.push(companies[k].name + ": " + x.title)));
    return [...new Set(out)].slice(0,5);
  }

  function atsAiSummary(keys) {
    const ats = [];
    const ai = [];
    keys.forEach(k => {
      const d = companies[k].decisionLayer;
      if (!d) return;
      if (d.ats) ats.push(companies[k].name + ": " + d.ats);
      if (d.aiHiring) ai.push(companies[k].name + ": " + d.aiHiring);
    });
    return {ats:[...new Set(ats)], ai:[...new Set(ai)]};
  }

  function list(items, fallback) {
    const arr = items && items.length ? items : [fallback];
    return "<ul class=\"industry-list\">" + arr.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  }

  function render(industry) {
    document.querySelectorAll(".industry-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.industry === industry));

    const keys = trackedKeys(industry);
    if (!keys.length) {
      profile.innerHTML = `
        <div class="industry-profile-head">
          <div>
            <p class="eyebrow">Fly tracked-company sample</p>
            <h2>${esc(industry)}</h2>
            <p>Fly does not yet have a tracked company in this prototype dataset for this industry.</p>
          </div>
          <span class="prototype-status pending">No tracked sample yet</span>
        </div>
        <div class="industry-empty-state">
          <strong>Industry layout is ready; evidence is not.</strong>
          <p>We are leaving the fields blank rather than inventing industry statistics. Once tracked companies are added, this page will populate from the same company and hiring research.</p>
        </div>
      `;
      return;
    }

    const note = INDUSTRY_NOTES[industry] || {};
    const openings = knownOpeningSummary(keys);
    const locations = companyLocations(keys);
    const positives = samplePositives(keys);
    const cautions = sampleCautions(keys);
    const layoff = layoffSummary(keys);
    const atsAi = atsAiSummary(keys);

    const companyCards = keys.map(k => {
      const c = companies[k];
      const decision = c.decisionLayer || {};
      return `
        <article class="industry-company-card">
          <div>
            <span class="industry-company-type">${esc(c.industry || "")}</span>
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.meta || "")}</p>
          </div>
          <div class="industry-company-grade"><span>Fly grade</span><strong>${esc(c.overallGrade || "N/A")}</strong></div>
          <div class="industry-company-signals">
            <span><b>Hiring</b> ${esc(decision.hiringReality || "See company research")}</span>
            <span><b>Ghost-job watch</b> ${esc(decision.ghostJobWatch || "N/A")}</span>
          </div>
        </article>
      `;
    }).join("");

    profile.innerHTML = `
      <div class="industry-profile-head">
        <div>
          <p class="eyebrow">Fly tracked-company sample</p>
          <h2>${esc(industry)}</h2>
          <p>Based on ${keys.length} tracked compan${keys.length===1?"y":"ies"} currently loaded into the prototype. This is not yet a market-wide industry estimate.</p>
        </div>
        <span class="prototype-status researched">${keys.length} tracked compan${keys.length===1?"y":"ies"}</span>
      </div>

      <div class="industry-stat-grid">
        <article><span>Tracked companies</span><strong>${keys.length}</strong><p>${keys.map(k=>esc(companies[k].name)).join(" · ")}</p></article>
        <article><span>Hiring signal</span><strong>${esc(note.hiring || "Mixed")}</strong><p>Summary of the currently tracked-company evidence.</p></article>
        <article><span>Known current openings</span><strong>${esc(openings.main)}</strong><p>${esc(openings.note)}</p></article>
        <article><span>Average Fly grade</span><strong>${esc(averageGrade(keys))}</strong><p>Average of company-level Fly grades in this sample.</p></article>
      </div>

      <section class="industry-company-sample">
        <div class="section-heading-row"><div><p class="eyebrow">Companies in this sample</p><h3>What the industry signal is built from</h3></div></div>
        <div class="industry-company-grid">${companyCards}</div>
      </section>

      <div class="industry-detail-grid">
        <article><h3>Industry Snapshot</h3><p><strong>Current Fly read:</strong> ${esc(note.hiring || "Mixed")}</p><p>${esc(note.why || "The current company sample is too small for a broader industry conclusion.")}</p></article>
        <article><h3>Why hiring is up or down</h3><p>${esc(note.why || "Not enough evidence in the current tracked sample.")}</p></article>
        <article><h3>Roles / functions in highest demand</h3><p>${esc(note.demand || "Role-level demand is not yet available in the current sample.")}</p></article>
        <article><h3>Geographic hiring hotspots</h3><p>${locations.length ? esc(locations.join(" · ")) : "N/A from current tracked sample."}</p><p class="industry-caveat">HQ / observed company locations only; not yet a full posting-location analysis.</p></article>
        <article><h3>Typical salary range</h3><p>N/A from the current company dataset.</p><p class="industry-caveat">This needs a role-adjusted compensation dataset before Fly should publish an industry range.</p></article>
        <article><h3>Top skills / requirements</h3><p>N/A from the current company dataset.</p><p class="industry-caveat">This requires job-posting text at industry scale.</p></article>
        <article><h3>Layoffs / restructuring</h3>${list(layoff,"No signal loaded.")}</article>
        <article><h3>Current sample positives</h3>${list(positives,"No positive company findings loaded.")}</article>
        <article><h3>Current sample cautions</h3>${list(cautions,"No caution findings loaded.")}</article>
        <article><h3>ATS signals</h3>${list(atsAi.ats,"N/A in current sample.")}</article>
        <article><h3>AI screening signals</h3>${list(atsAi.ai,"N/A in current sample.")}</article>
        <article><h3>Money flow / investment trend</h3><p>${esc(note.money || "N/A from the current tracked sample.")}</p></article>
        <article><h3>Remote / hybrid availability</h3><p>N/A as an industry percentage.</p><p class="industry-caveat">Fly has company-level work-arrangement signals in places, but not enough posting coverage for a defensible industry mix.</p></article>
        <article><h3>Transferable skills match</h3><p>N/A until a user profile or résumé is supplied.</p></article>
        <article><h3>Credentials / barriers to entry</h3><p>N/A from the current tracked-company dataset.</p></article>
        <article><h3>Estimated time / cost to transition</h3><p>N/A until Fly combines a user's résumé/profile with role and industry requirements.</p></article>
      </div>
    `;
  }

  INDUSTRIES.forEach((industry, idx) => {
    const btn = document.createElement("button");
    btn.className = "industry-chip";
    btn.type = "button";
    btn.dataset.industry = industry;
    btn.innerHTML = "<span>" + String(idx + 1).padStart(2, "0") + "</span>" + esc(industry);
    if (trackedKeys(industry).length) {
      const count = document.createElement("em");
      count.textContent = trackedKeys(industry).length + " tracked";
      btn.appendChild(count);
    }
    btn.addEventListener("click", () => render(industry));
    chips.appendChild(btn);
  });

  render("Software / SaaS");
})();