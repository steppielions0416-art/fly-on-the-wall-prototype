
const areaPageConfig={
 "Company Intelligence":{kicker:"Know the company",title:"Company intelligence",desc:"Business stability, hiring direction, worker signals, product strength and the evidence behind each call.",demo:"company"},
 "Job Intelligence":{kicker:"Know the opening",title:"Job intelligence",desc:"Separate active opportunities from stale, recycled or high-friction postings before you spend hours applying.",demo:"job"},
 "Worker Intelligence":{kicker:"Hear from people",title:"Reviews & candidate experience",desc:"Structured first-party reports on applications, interviews, recruiters, compensation and outcomes.",demo:"reviews"},
 "Job-Search Tools":{kicker:"Spend smarter",title:"Job-search tools",desc:"Compare services, pricing, outcomes, cancellation experience and worker feedback before paying.",demo:"tools"},
 "Interview Prep":{kicker:"Prepare with context",title:"Interview prep",desc:"Use the role and company context to focus your stories, questions, red flags and practice.",demo:"interview"},
 "Compensation":{kicker:"Know the pay picture",title:"Compensation",desc:"Track salary ranges, movement and changes during the hiring process.",demo:"pay"},
 "Career Transition":{kicker:"Find the next move",title:"Career transition",desc:"Translate experience into realistic occupations, industries, titles and transition paths.",demo:"career"},
 "Worker Community":{kicker:"Workers talking to workers",title:"Worker community",desc:"Company, role and industry intelligence from people seeing change in real time.",demo:"community"}
};

function placeholderFor(feature){
 const demoReady=["Company Overview Dashboard","Company Grade / Summary","Business Stability","Hiring Snapshot","Positive Signals / Risk Flags","Company Deep Dives","Hiring Reality / Ghost-Job Signals","Application Decision Summary","ATS Identification","AI-in-Hiring Indicator","Questions to Ask Employer"];
 if(demoReady.includes(feature.name)) return ["Demo available","demo","Demo data is available in the company research prototype."];
 if(feature.area==="Worker Intelligence"||feature.area==="Worker Community") return ["Awaiting Fly data","test","N/A — no Fly submission data yet. The feature remains visible for testing."];
 if(feature.area==="Job-Search Tools") return ["Directory placeholder","test","N/A — service profile and outcome data will populate here."];
 if(feature.area==="Interview Prep") return ["Prototype flow","test","N/A until a job description is supplied and analysis is connected."];
 if(feature.area==="Career Transition") return ["Prototype flow","test","N/A until work history is supplied and matching data is connected."];
 if(feature.area==="Compensation") return ["Data pending","na","N/A — not enough verified compensation data yet."];
 return ["Data pending","na","N/A — not enough evidence yet."];
}

function pagePreview(type){
 const previews={
 company:`<section class="experience-preview">
   <div class="preview-card hero-preview"><span class="mini-label">Overall company grade</span><strong class="mega-grade">B+</strong><p>Demo score composed from stability, hiring, worker, product and credibility signals.</p></div>
   <div class="preview-card"><span class="mini-label">Business stability</span><strong>Stable / Watch</strong><p>Funding, layoffs, leadership, ownership, financial and regulatory signals live here.</p></div>
   <div class="preview-card"><span class="mini-label">Before you apply</span><strong>3 positives · 2 cautions</strong><p>Concise decision layer with unknowns called out instead of hidden.</p></div>
 </section>`,
 job:`<section class="experience-preview">
   <div class="preview-card hero-preview"><span class="mini-label">Application decision</span><strong>Verify first</strong><p>Role appears real, but repost history and hiring-process friction need confirmation.</p></div>
   <div class="preview-card"><span class="mini-label">Ghost-job watch</span><strong>Elevated</strong><p>Repost, stale-job, duplicate and posting-change signals appear together.</p></div>
   <div class="preview-card"><span class="mini-label">Effort</span><strong>High</strong><p>Assessment, interview burden, AI screening and application cost are surfaced before applying.</p></div>
 </section>`,
 reviews:`<section class="experience-preview">
   <div class="preview-card hero-preview"><span class="mini-label">Candidate reports</span><strong>N/A</strong><p>Waiting for Fly-owned submissions. This remains visible so testers can judge the experience.</p></div>
   <div class="preview-card"><span class="mini-label">Recruiter response</span><strong>N/A</strong><p>Response, ghosting and follow-through metrics will live here.</p></div>
   <div class="preview-card"><span class="mini-label">Share experience</span><button class="prototype-primary" type="button" data-demo-action="review">Start a test review</button></div>
 </section>`,
 tools:`<section class="experience-preview">
   <div class="preview-card hero-preview"><span class="mini-label">Service profile</span><strong>Resume / application service</strong><p>What it does, price, automation, privacy, refund and cancellation information.</p></div>
   <div class="preview-card"><span class="mini-label">Outcome data</span><strong>N/A</strong><p>Fly-user outcomes and satisfaction will populate here.</p></div>
   <div class="preview-card"><span class="mini-label">Would you pay?</span><strong>Compare before buying</strong><p>Testers can review whether the directory changes purchase decisions.</p></div>
 </section>`,
 interview:`<section class="workflow-card interview-workflow"><div class="workflow-choice"><div class="workflow-field"><label for="jdUrl">Option 1 — Paste a job posting link</label><input id="jdUrl" type="text" inputmode="url" autocomplete="off" spellcheck="false" placeholder="Paste a LinkedIn, Indeed, or company job URL"></div><span class="workflow-or">OR</span><div class="workflow-field"><label for="jdInput">Option 2 — Paste the full job description</label><textarea id="jdInput" spellcheck="true" placeholder="Click here, then Ctrl+V to paste the full job description…"></textarea></div></div><p class="workflow-help"><strong>Best prototype test:</strong> paste the full job description. A URL can be saved and used for context, but many job sites block a static website from reading the posting automatically.</p><div class="workflow-actions"><button id="interviewPrepButton" class="prototype-primary" type="button">Prep me for this interview</button><button id="clearInterviewPrep" class="prototype-secondary" type="button">Clear</button></div><p id="interviewPrepMessage" class="workflow-message" aria-live="polite"></p><div id="interviewPrepOutput" class="interview-output" hidden></div></section>`,
 pay:`<section class="experience-preview">
   <div class="preview-card hero-preview"><span class="mini-label">Compensation snapshot</span><strong>N/A</strong><p>Verified range or user-reported range appears here when available.</p></div>
   <div class="preview-card"><span class="mini-label">Movement</span><strong>N/A</strong><p>Tracks whether advertised or discussed compensation changes during the process.</p></div>
   <div class="preview-card"><span class="mini-label">Trend</span><strong>N/A</strong><p>Historical movement appears once enough evidence exists.</p></div>
 </section>`,
 career:`<section class="workflow-card"><label for="careerInput">Work history or résumé text</label><textarea id="careerInput" placeholder="Paste work history here…"></textarea><button class="prototype-primary" type="button" data-demo-action="career">Find realistic transition paths</button><div class="workflow-output"><strong>Role families</strong><p>N/A until work history is entered.</p><strong>Transferable skills</strong><p>N/A until analysis is connected.</p><strong>Gap analysis</strong><p>N/A until analysis is connected.</p></div></section>`,
 community:`<section class="community-preview">
   <article><span class="mini-label">Company room</span><h3>What is changing at your company?</h3><p>N/A — awaiting verified anonymous contributors.</p><button type="button" class="prototype-link" data-demo-action="community">Preview discussion</button></article>
   <article><span class="mini-label">Signal board</span><h3>Hiring freezes · workload · reorganizations</h3><p>Worker-reported change signals will aggregate here.</p></article>
   <article><span class="mini-label">Transitions</span><h3>Successful transition stories</h3><p>N/A — first-party stories will populate here.</p></article>
 </section>`
 };
 return previews[type]||"";
}

function renderAreaPage(){
 const area=document.body.dataset.area;
 const root=document.getElementById("areaPage");
 if(!area||!root) return;
 const cfg=areaPageConfig[area];
 const features=flyPrototypeFeatures.filter(f=>f.area===area);
 const modules=[...new Set(features.map(f=>f.module))];
 root.innerHTML=`
   <section class="area-hero"><p class="eyebrow">${cfg.kicker}</p><h1>${cfg.title}</h1><p>${cfg.desc}</p><div class="area-meta"><span>${features.length} user-test features</span><span>Demo + N/A states</span><span>Source-aware</span></div></section>
   ${(area==="Company Intelligence"||area==="Job Intelligence")?companyDataExperience(area):pagePreview(cfg.demo)}
   <section class="page-modules">
   ${modules.map(module=>`<section class="page-module"><div class="module-head"><div><p class="eyebrow">Module</p><h2>${module}</h2></div><span>${features.filter(f=>f.module===module).length} features</span></div><div class="feature-list">${features.filter(f=>f.module===module).map(f=>{const p=placeholderFor(f); return `<div class="feature-row"><div class="feature-row-main"><h3>${f.name}</h3><p>${p[2]}</p></div><div class="feature-row-meta"><span class="prototype-status ${p[1]}">${p[0]}</span><button type="button" class="prototype-link" data-feature="${f.name.replace(/"/g,"&quot;")}">Preview</button></div></div>`}).join("")}</div></section>`).join("")}
   </section>`;
 root.querySelectorAll("[data-feature]").forEach(btn=>btn.addEventListener("click",()=>showPageToast(btn.dataset.feature)));
 root.querySelectorAll("[data-demo-action]").forEach(btn=>btn.addEventListener("click",()=>showPageToast("Prototype interaction: "+btn.dataset.demoAction)));
 if(area==="Interview Prep") setupInterviewPrep();
 if(area==="Company Intelligence"||area==="Job Intelligence") setupResearchBrowser(area);
}

function escHtml(value){
 return String(value||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function unique(arr){return [...new Set(arr.filter(Boolean))]}
function sentenceList(items){return items.length?items.map(x=>`<li>${escHtml(x)}</li>`).join(""):"<li>N/A</li>"}

function researchedCompanies(){
 return Object.entries(window.FLY_COMPANIES||{}).filter(([,v])=>v&&v.name);
}
function toneClass(value){
 const v=String(value||"").toLowerCase();
 if(/apply now|low|positive|active|verified|strong|a\+|\ba\b|a-/.test(v)) return "demo";
 if(/high|risk|elevated|c-|\bd\b/.test(v)) return "na";
 return "test";
}
function companyDataExperience(area){
 const entries=researchedCompanies();
 if(!entries.length) return pagePreview(area==="Company Intelligence"?"company":"job");
 const defaultKey=entries.find(([k])=>k==="caz")?.[0] || entries[0][0];
 return `
 <section class="research-browser" data-research-area="${area}">
   <div class="research-toolbar">
     <div><p class="eyebrow">Existing Fly research</p><h2>Use the data we already have.</h2></div>
     <label>Company
       <select class="research-company-select">
         ${entries.map(([key,v])=>`<option value="${escHtml(key)}" ${key===defaultKey?"selected":""}>${escHtml(v.name)}</option>`).join("")}
       </select>
     </label>
   </div>
   <div class="research-company-output" data-company-key="${escHtml(defaultKey)}"></div>
 </section>`;
}
function renderCompanyResearch(container,key,area){
 const d=(window.FLY_COMPANIES||{})[key];
 if(!d||!container) return;
 if(area==="Company Intelligence"){
   const grades=d.grades||{};
   const findings=(d.findings||[]).slice(0,5);
   const hiring=(d.hiringSnapshot||[]).slice(0,6);
   container.innerHTML=`
    <div class="research-title"><div><h3>${escHtml(d.name)}</h3><p>${escHtml(d.meta||d.industry||"")}</p></div><div class="research-grade"><span>Overall</span><strong>${escHtml(d.overallGrade||"N/A")}</strong></div></div>
    <div class="research-kpis">${Object.entries(grades).map(([label,val])=>`<div><span>${escHtml(label)}</span><strong>${escHtml(val)}</strong></div>`).join("")}</div>
    <div class="research-columns">
      <section><h3>What Fly found</h3>${findings.map(x=>`<div class="research-line"><span class="prototype-status ${x.type==="good"?"demo":x.type==="risk"?"na":"test"}">${escHtml(x.type||"signal")}</span><div><strong>${escHtml(x.title)}</strong><p>${escHtml(x.text)}</p></div></div>`).join("")}</section>
      <section><h3>Hiring snapshot</h3>${hiring.map(([label,val])=>`<div class="research-metric"><span>${escHtml(label)}</span><strong>${escHtml(val)}</strong></div>`).join("")}</section>
    </div>
    ${d.readout?`<div class="research-readout"><div><span>Positive</span><p>${escHtml(d.readout.good||"N/A")}</p></div><div><span>Watch</span><p>${escHtml(d.readout.watch||"N/A")}</p></div><div><span>Ask</span><p>${escHtml(d.readout.ask||"N/A")}</p></div></div>`:""}
   `;
 }else{
   const x=d.decisionLayer||{};
   const path=x.applicationPath||[];
   container.innerHTML=`
    <div class="research-title"><div><h3>${escHtml(d.name)}</h3><p>${escHtml(d.meta||d.industry||"")}</p></div><span class="prototype-status ${toneClass(x.applyDecision)}">Real research</span></div>
    <div class="job-decision-strip">
      <div><span>Application decision</span><strong>${escHtml(x.applyDecision||"Not yet researched")}</strong><p>${escHtml(x.applyWhy||"N/A")}</p></div>
      <div><span>Hiring reality</span><strong>${escHtml(x.hiringReality||"N/A")}</strong><p>${escHtml(x.hiringWhy||"N/A")}</p></div>
      <div><span>Ghost-job watch</span><strong>${escHtml(x.ghostJobWatch||"N/A")}</strong><p>${escHtml(x.ghostWhy||"N/A")}</p></div>
    </div>
    <div class="job-facts">
      <div><span>ATS</span><strong>${escHtml(x.ats||"Unknown")}</strong><p>${escHtml(x.atsWhy||"")}</p></div>
      <div><span>AI in hiring</span><strong>${escHtml(x.aiHiring||"Unknown")}</strong><p>${escHtml(x.aiWhy||"")}</p></div>
      <div><span>Time-waste risk</span><strong>${escHtml(x.timeWaste||"Unknown")}</strong><p>${escHtml(x.timeWasteWhy||"")}</p></div>
    </div>
    ${path.length?`<div class="application-path-compact"><h3>Application path</h3>${path.map(step=>`<div><span>${escHtml(step[0])}</span><strong>${escHtml(step[1]||"")}</strong><em>${escHtml(step[2]||"")}</em></div>`).join("")}</div>`:""}
   `;
 }
}
function setupResearchBrowser(area){
 const wrap=document.querySelector(".research-browser");
 if(!wrap) return;
 const select=wrap.querySelector(".research-company-select");
 const output=wrap.querySelector(".research-company-output");
 const draw=()=>renderCompanyResearch(output,select.value,area);
 select.addEventListener("change",draw);
 draw();
}

function analyzeJobDescription(text,url){
 const raw=(text||"").trim();
 const lower=raw.toLowerCase();
 const lines=raw.split(/\n+/).map(x=>x.trim()).filter(Boolean);
 const domain=(()=>{try{return new URL((url||"").trim()).hostname.replace(/^www\./,"")}catch(e){return ""}})();

 const cleanedLines=lines.map(l=>l.replace(/^[•\-*\s]+/,"").trim());
 const explicitTitlePatterns=[
  /^(job title|position|role)\s*[:\-]\s*(.+)$/i,
  /^(vice president|vp)\s*(,|of|-)?\s*(investment )?(due )?diligence\b.*$/i,
  /^(vice president|vp)\s*(,|of|-)?\s*(investment|portfolio|manager|fund|research|operations|customer|client|strategy|marketing|sales|finance|product).*$/i,
  /^(director|head of|senior manager|manager|principal|lead)\s+.*$/i
 ];
 let role="Role not identified";
 for(const line of cleanedLines.slice(0,30)){
   if(line.length>140) continue;
   const labeled=line.match(explicitTitlePatterns[0]);
   if(labeled && labeled[2]){role=labeled[2].trim();break}
   if(explicitTitlePatterns.slice(1).some(rx=>rx.test(line))){role=line;break}
 }
 if(role==="Role not identified"){
   const scored=cleanedLines.slice(0,40).map((line,i)=>{
     const l=line.toLowerCase();
     let score=0;
     if(line.length>4 && line.length<120) score+=2;
     if(/vice president|\bvp\b/.test(l)) score+=7;
     if(/diligence|due diligence|investment diligence|manager research|manager selection/.test(l)) score+=8;
     if(/director|head of|senior manager|principal/.test(l)) score+=4;
     if(/reports? to|reporting to|works? with|partner with|collaborate with/.test(l)) score-=8;
     if(/responsibilities|qualifications|about us|about the role|what you'll do|what you will do/.test(l)) score-=5;
     score-=i*0.05;
     return {line,score};
   }).sort((a,b)=>b.score-a.score);
   if(scored[0] && scored[0].score>2) role=scored[0].line;
 }
 if(role==="Role not identified") role=cleanedLines[0] || "Role not identified";
 role=role.replace(/^(job title|position|role)\s*[:\-]\s*/i,"").replace(/\s+\|\s+.*$/,"").slice(0,120);

 let company="Company not identified";
 const companyLine=lines.find(l=>/^(company|about the company|employer)\s*[:\-]/i.test(l));
 if(companyLine) company=companyLine.replace(/^[^:\-]+[:\-]\s*/,"").slice(0,100);
 else if(domain && !/(linkedin|indeed|glassdoor|ziprecruiter|greenhouse|lever|workday)/i.test(domain)) company=domain.split(".")[0].replace(/[-_]/g," ");

 const keywordMap=[
  ["Customer Success",["customer success","renewal","retention","churn","nrr","csat"]],
  ["Customer Experience",["customer experience","cx","customer journey"]],
  ["Operations",["operations","operational","process improvement","workflow"]],
  ["Implementation",["implementation","onboarding","go-live","deployment"]],
  ["Leadership",["leadership","manage a team","people manager","direct reports","executive"]],
  ["Analytics",["analytics","data analysis","metrics","kpi","dashboard"]],
  ["AI / Automation",["artificial intelligence"," ai ","automation","automate","machine learning"]],
  ["Project / Program Management",["project management","program management","roadmap","milestone"]],
  ["GTM / Growth",["go-to-market","gtm","growth strategy","market strategy"]],
  ["Stakeholder Management",["stakeholder","cross-functional","executive communication"]],
  ["SaaS",["saas","software as a service"]],
  ["Zendesk / Support",["zendesk","support operations","ticketing","service desk"]],
  ["Investment Diligence",["investment diligence","due diligence","manager diligence","manager research","manager selection","fund diligence","investment committee","underwriting","private equity","private markets","co-investment","co investment","fund manager","gp stakes"]],
  ["Investment Analysis",["irr","moic","dpi","tvpi","sharpe","sortino","track record","fund performance","investment memo","ic memo","investment committee memo"]]
 ];
 const matches=keywordMap.filter(([,keys])=>keys.some(k=>lower.includes(k))).map(([label])=>label);

 const seniority=/chief|vice president|\bvp\b|head of|director/i.test(lower)?"Senior leadership":/manager|lead|principal/i.test(lower)?"Manager / lead":"Individual contributor or unspecified";
 const interviewProcess= seniority==="Senior leadership"
   ? ["Recruiter or talent screen","Hiring manager / executive conversation","Cross-functional leadership interviews","Case, strategy, or operating discussion may be used","Final executive / culture-fit conversation"]
   : ["Recruiter screen","Hiring manager interview","Role-specific or cross-functional interview","Possible skills exercise or case","Final team / decision conversation"];

 const questions=[
  `Walk me through your experience most relevant to ${role}.`,
  matches.includes("Investment Diligence") ? "Walk me through how you evaluate a fund manager or investment opportunity from initial screen through investment committee recommendation." : (matches.includes("Operations") ? "Tell me about a process you redesigned and how you measured the result." : "Tell me about a difficult problem you owned from start to finish."),
  matches.includes("Investment Analysis") ? "How do you use IRR, MOIC, DPI, TVPI and qualitative underwriting together rather than relying on one metric?" : (matches.includes("Leadership") ? "How do you set expectations, coach performance, and handle underperformance?" : "How do you prioritize when several stakeholders need something at once?"),
  matches.includes("Investment Diligence") ? "Tell me about a time your diligence uncovered a risk that was not obvious in the manager's materials." : (matches.includes("Analytics") ? "Which metrics do you use to decide whether your work is actually improving outcomes?" : "How do you know when a project or initiative is successful?"),
  "Why this company and why this role now?"
 ];

 const emphasize=unique([
  matches.includes("Customer Success") && "Retention, NRR, churn reduction, customer health, and executive customer strategy.",
  matches.includes("Customer Experience") && "End-to-end customer journey improvement and measurable CX outcomes.",
  matches.includes("Operations") && "Process redesign, operating cadence, automation, efficiency gains, and scalable systems.",
  matches.includes("Implementation") && "Time-to-value, onboarding, implementation governance, handoffs, and go-live execution.",
  matches.includes("Leadership") && "Team leadership, organizational design, change leadership, and executive influence.",
  matches.includes("Analytics") && "KPI ownership, decision-making with data, dashboards, and measurable business impact.",
  matches.includes("AI / Automation") && "Practical AI and automation use cases tied to efficiency or customer outcomes.",
  matches.includes("Project / Program Management") && "Complex cross-functional delivery, milestones, dependencies, and accountability.",
  matches.includes("Investment Diligence") && "Manager selection, fund diligence, investment committee judgment, reference checks, risk identification, and evidence-based recommendations.",
  matches.includes("Investment Analysis") && "Fund performance analysis using IRR, MOIC, DPI, TVPI, track-record quality, attribution, and downside/risk context.",
  matches.length===0 && "Use quantified outcomes and examples that map directly to the responsibilities in the posting."
 ]);

 const smartQuestions=[
  "Why is this role open — growth, replacement, reorganization, or backfill?",
  "What would make you say the person in this role is successful after 90 days and after one year?",
  "What are the biggest problems this person is expected to solve first?",
  "How are priorities and decision rights split across the teams this role works with?",
  matches.includes("Investment Diligence") ? "How is the diligence team split across manager selection, co-investments, direct investments, and portfolio monitoring?" : "Is the compensation range, reporting line, and scope in the posting still accurate?"
 ];

 const redFlags=[];
 if(/unpaid|commission only|commission-only/i.test(lower)) redFlags.push("Compensation language needs clarification.");
 if(/take[- ]home|case study|assessment|presentation exercise/i.test(lower)) redFlags.push("The posting suggests an assessment, take-home, case, or presentation may be part of the process.");
 if(/video assessment|one-way video|recorded video/i.test(lower)) redFlags.push("A one-way or recorded video step may be required.");
 if(/nights|weekends|24\/7|on-call/i.test(lower)) redFlags.push("Schedule or availability expectations may extend beyond standard hours.");
 if(!/\$\s?\d|salary|compensation range|pay range/i.test(lower)) redFlags.push("No clear compensation range detected in the pasted text.");
 if(raw.length<300) redFlags.push("The pasted job description is short, so the analysis has limited evidence.");

 return {role,company,domain,matches,seniority,interviewProcess,questions,emphasize,smartQuestions,redFlags};
}

function renderInterviewPrep(result,hasText,hasUrl){
 const sourceNote=hasText
   ? "Based on the job description you pasted."
   : "URL saved, but this static prototype cannot reliably read external job pages. Paste the job description for full analysis.";
 return `
   <div class="interview-result-head">
     <div><p class="eyebrow">Fly interview brief</p><h2>${escHtml(result.role)}</h2><p>${escHtml(result.company)}</p></div>
     <span class="prototype-status ${hasText?"demo":"test"}">${hasText?"Analyzed":"URL only"}</span>
   </div>
   <p class="analysis-source-note">${escHtml(sourceNote)}</p>
   <div class="interview-result-grid">
     <section><span class="mini-label">Likely level</span><strong>${escHtml(result.seniority)}</strong></section>
     <section><span class="mini-label">Signals detected</span><strong>${escHtml(result.matches.slice(0,5).join(" · ")||"N/A")}</strong></section>
   </div>
   <div class="prep-section"><h3>Likely interview process</h3><ul>${sentenceList(result.interviewProcess)}</ul></div>
   <div class="prep-section"><h3>Likely questions</h3><ul>${sentenceList(result.questions)}</ul></div>
   <div class="prep-section"><h3>What to emphasize</h3><ul>${sentenceList(result.emphasize)}</ul></div>
   <div class="prep-section"><h3>Smart questions to ask</h3><ul>${sentenceList(result.smartQuestions)}</ul></div>
   <div class="prep-section"><h3>Red flags / clarifications</h3><ul>${sentenceList(result.redFlags.length?result.redFlags:["No obvious warning language detected in the pasted text. Still verify scope, reporting line, pay, and why the role is open."])}</ul></div>
 `;
}

function setupInterviewPrep(){
 const url=document.getElementById("jdUrl");
 const jd=document.getElementById("jdInput");
 const button=document.getElementById("interviewPrepButton");
 const clear=document.getElementById("clearInterviewPrep");
 const msg=document.getElementById("interviewPrepMessage");
 const output=document.getElementById("interviewPrepOutput");
 if(!url||!jd||!button||!output) return;

 [url,jd].forEach(el=>{
   el.removeAttribute("readonly");
   el.removeAttribute("disabled");
   el.style.pointerEvents="auto";
   el.addEventListener("paste",()=>{ if(msg) msg.textContent="Pasted. Click “Prep me for this interview” when ready."; });
 });

 button.addEventListener("click",()=>{
   const text=jd.value.trim();
   const link=url.value.trim();
   if(!text && !link){msg.textContent="Paste a job link or the job description first."; output.hidden=true; return}
   const result=analyzeJobDescription(text,link);
   output.innerHTML=renderInterviewPrep(result,!!text,!!link);
   output.hidden=false;
   msg.textContent=text?"Prototype analysis generated from the pasted job description.":"Link saved. Paste the job description too for a full analysis.";
   output.scrollIntoView({behavior:"smooth",block:"start"});
 });
 clear.addEventListener("click",()=>{
   url.value="";jd.value="";output.innerHTML="";output.hidden=true;msg.textContent="";
   jd.focus();
 });
}

function showPageToast(text){
 let t=document.getElementById("pageToast");
 if(!t){t=document.createElement("div");t.id="pageToast";t.className="page-toast";document.body.appendChild(t)}
 t.textContent=text+" — interaction shell is visible for user testing; production data/automation may still be N/A.";
 t.classList.add("show"); clearTimeout(window.__flyToast); window.__flyToast=setTimeout(()=>t.classList.remove("show"),3200);
}
document.addEventListener("DOMContentLoaded",renderAreaPage);
