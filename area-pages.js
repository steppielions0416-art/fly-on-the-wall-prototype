
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
 interview:`<section class="workflow-card"><div class="workflow-choice"><div><label for="jdUrl">Option 1 — Job posting link</label><input id="jdUrl" type="url" placeholder="https://company.com/jobs/role or LinkedIn/Indeed posting"></div><span class="workflow-or">or</span><div><label for="jdInput">Option 2 — Paste the job description</label><textarea id="jdInput" placeholder="Paste the full job description here…"></textarea></div></div><p class="workflow-help">Use the link when the posting is public. If the site blocks access, requires login, or the posting disappears, paste the job description instead.</p><button class="prototype-primary" type="button" data-demo-action="interview">Prep me for this interview</button><div class="workflow-output"><strong>Company context</strong><p>N/A until a job link or description is entered.</p><strong>Likely interview process</strong><p>N/A until analysis is connected.</p><strong>Likely questions</strong><p>N/A until analysis is connected.</p><strong>What to emphasize</strong><p>N/A until analysis is connected.</p><strong>Smart questions to ask</strong><p>N/A until analysis is connected.</p><strong>Red flags / clarifications</strong><p>N/A until analysis is connected.</p></div></section>`,
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
   ${pagePreview(cfg.demo)}
   <section class="page-modules">
   ${modules.map(module=>`<section class="page-module"><div class="module-head"><div><p class="eyebrow">Module</p><h2>${module}</h2></div><span>${features.filter(f=>f.module===module).length} features</span></div><div class="feature-board">${features.filter(f=>f.module===module).map(f=>{const p=placeholderFor(f); return `<article class="feature-tile"><div><span class="prototype-status ${p[1]}">${p[0]}</span><h3>${f.name}</h3><p>${p[2]}</p></div><button type="button" class="prototype-link" data-feature="${f.name.replace(/"/g,"&quot;")}">Preview state</button></article>`}).join("")}</div></section>`).join("")}
   </section>`;
 root.querySelectorAll("[data-feature]").forEach(btn=>btn.addEventListener("click",()=>showPageToast(btn.dataset.feature)));
 root.querySelectorAll("[data-demo-action]").forEach(btn=>btn.addEventListener("click",()=>showPageToast("Prototype interaction: "+btn.dataset.demoAction)));
}
function showPageToast(text){
 let t=document.getElementById("pageToast");
 if(!t){t=document.createElement("div");t.id="pageToast";t.className="page-toast";document.body.appendChild(t)}
 t.textContent=text+" — interaction shell is visible for user testing; production data/automation may still be N/A.";
 t.classList.add("show"); clearTimeout(window.__flyToast); window.__flyToast=setTimeout(()=>t.classList.remove("show"),3200);
}
document.addEventListener("DOMContentLoaded",renderAreaPage);
