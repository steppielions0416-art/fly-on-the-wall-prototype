window.FLY_COMPANIES = {
  amazon: {
    name: "Amazon",
    aliases: ["amazon", "amazon.com", "amzn"],
    industry: "Ecommerce · Cloud · Advertising · Logistics",
    meta: "Seattle, WA · Founded 1994 · ~1.595M employees · Public company",
    updated: "Updated Sep 29, 2026",
    overallGrade: "B+",
    grades: {
      "Business Stability": "A-",
      "Hiring & Workforce": "B",
      "Employee Sentiment": "C+",
      "Customer / Product": "A-",
      "Job Credibility": "B+"
    },
    decisionLayer: {
      applyDecision:"Apply With Caution",
      applyWhy:"Amazon is genuinely hiring at scale, but recent corporate reductions mean the specific team matters more than the company headline.",
      applyTone:"watch",
      hiringReality:"Active, but uneven",
      hiringWhy:"Thousands of openings remain visible while selected corporate organizations continue restructuring.",
      hiringTone:"watch",
      ghostJobWatch:"Low–Moderate",
      ghostWhy:"Official postings are verifiable, but role durability can still vary by organization and backfill status.",
      ghostTone:"watch",
      ats:"Amazon Jobs / internal system",
      atsWhy:"The public application flow is through Amazon Jobs; Fly has not verified a third-party ATS for this profile.",
      aiHiring:"Unknown",
      aiWhy:"Fly found no company-specific public evidence in this research set confirming AI candidate ranking or rejection.",
      aiTone:"unknown",
      timeWaste:"Moderate",
      timeWasteWhy:"Application burden varies by role; the bigger risk is investing in a team undergoing reorganization.",
      timeWasteTone:"watch",
      applicationPath:[
        ["Career site","Verified","Amazon Jobs"],
        ["ATS","Internal / unknown","No third-party ATS confirmed"],
        ["Automated screening","Unknown","No verified evidence loaded"],
        ["Recruiter","Likely human review"],
        ["Hiring manager","Role dependent"],
        ["Interview","Role dependent"]
      ]
    },
    findings: [
      {type:"good", title:"The business is financially strong", text:"Q2 2026 sales reached $200.6B, up 20% year over year, while operating income rose 43%."},
      {type:"watch", title:"Strong company does not mean safe team", text:"Amazon cut about 16,000 corporate roles in January 2026 and made additional AGI cuts in July."},
      {type:"good", title:"Hiring is still substantial", text:"Amazon Jobs shows thousands of active openings across operations, software, product, sales and AWS."},
      {type:"watch", title:"Team-level diligence matters", text:"Overall headcount is up, but repeated corporate restructuring means role durability varies heavily by organization."}
    ],
    hiringSnapshot: [
      ["Headcount trend", "+3% YoY"],
      ["Current employees", "~1.595M"],
      ["Visible openings", "~21.8K across job categories"],
      ["Largest hiring areas", "Ops/IT, Software, Fulfillment"],
      ["Recent layoff signal", "16K corporate roles Jan 2026"]
    ],
    readout: {
      good: "Revenue, operating income and AWS are growing strongly. Headcount is up year over year and hiring remains broad.",
      watch: "Repeated corporate layoffs, organizational flattening, RTO friction and ongoing regulatory disputes create team-level risk.",
      ask: "Is this role net-new or a backfill? Was this org affected by recent reductions? What is the current RTO expectation and recent reorg history?"
    },
    tabs: {
      stability: {
        title:"Business Stability",
        intro:"Amazon is financially strong, but aggressive restructuring and very heavy AI infrastructure spending complicate the employment picture.",
        rows:[
          ["Revenue","Q2 2026 net sales $200.6B, up 20% YoY","Positive","Strong scale and top-line growth","amazon-q2"],
          ["Profitability","Q2 operating income $27.5B, up 43% YoY","Positive","Strong operating leverage","amazon-q2"],
          ["AWS","Q2 sales $42.2B, up 37% YoY","Positive","High-growth, high-profit engine","amazon-q2"],
          ["Cash flow","TTM free cash flow -$7.6B due largely to higher capex","Watch","Exceptional AI/infrastructure investment is consuming cash","amazon-q2"],
          ["Layoffs","16,000 corporate roles cut Jan 2026; more AGI cuts followed","Watch","Restructuring continues despite strong financial performance","amazon-layoffs"],
          ["Headcount","1.595M employees at Jun 2026, up 3% YoY","Mixed","Company is growing overall while trimming selected corporate teams","amazon-sec"]
        ]
      },
      hiring: {
        title:"Hiring & Workforce",
        intro:"Amazon is simultaneously hiring at massive scale and reducing selected corporate organizations.",
        rows:[
          ["Current workforce","1.595M employees at Jun 2026","Positive","Overall workforce still expanding","amazon-sec"],
          ["Current openings","~21.8K when current job-category counts are summed","Positive","Broad demand remains","amazon-jobs"],
          ["Largest category","Operations, IT & Support Engineering","Positive","Infrastructure and operations remain major investment areas","amazon-jobs"],
          ["Software roles","~2.7K visible in Software Development category","Positive","Technical hiring remains substantial","amazon-jobs"],
          ["Corporate layoffs","~16K roles cut in Jan 2026 after prior reductions","Risk","Role safety is organization-specific","amazon-layoffs"],
          ["Posting credibility","Official Amazon Jobs listings include dated postings and job IDs","Positive","Strong first-party evidence that openings are real","amazon-jobs"]
        ]
      },
      employees: {
        title:"Employee & Workplace",
        intro:"Public employee signals are mixed: compensation and safety investment coexist with layoffs, RTO friction and a high-intensity operating culture.",
        rows:[
          ["Employment stability","Repeated corporate reductions in 2025–26","Risk","Ask whether the specific org was affected","amazon-layoffs"],
          ["RTO / work style","Strict office attendance remains a recurring employee concern","Watch","Clarify location and enforcement before accepting","amazon-reddit"],
          ["Culture","Leadership emphasizes speed, ownership and fewer layers","Mixed","Best fit for people comfortable with accountability and frequent change","amazon-layoffs"],
          ["Operations pay","US core operations minimum starting pay raised to $20/hr","Positive","Continued frontline labor investment","amazon-pay"],
          ["Safety","Amazon reports recordable incident rate improved 14% YoY in 2025","Positive","First-party safety trend is improving","amazon-safety"],
          ["Regulatory safety history","OSHA reached a corporate-wide ergonomics settlement in 2024","Watch","Warehouse safety history remains relevant","amazon-osha"]
        ]
      },
      customers: {
        title:"Customer & Product",
        intro:"Amazon remains a market leader with strong customer satisfaction and rapidly growing AWS, while regulatory scrutiny remains material.",
        rows:[
          ["Customer satisfaction","ACSI score 82/100 in 2026","Positive","Tied for the top online-retail score","amazon-acsi"],
          ["AWS growth","Q2 AWS sales grew 37% YoY","Positive","Cloud and AI demand are major growth drivers","amazon-q2"],
          ["Advertising","Q2 advertising revenue rose 26%","Positive","High-margin business is expanding","amazon-reuters-q2"],
          ["AI investment","2026 capex plan raised to about $220B","Mixed","Shows conviction but creates execution and return risk","amazon-reuters-q2"],
          ["Regulatory","FTC and states sued over alleged ad surcharge practices; Amazon disputes the claims","Watch","Seller trust and compliance remain active issues","amazon-ftc"]
        ]
      },
      credibility: {
        title:"Opportunity & Job Credibility",
        intro:"Amazon's official postings are highly verifiable. The bigger question is role durability inside a company that is hiring and restructuring at the same time.",
        rows:[
          ["Source quality","Official Amazon Jobs listings are first-party","Positive","High confidence the postings exist","amazon-jobs"],
          ["Role durability","Recent layoffs affect selected organizations","Watch","A real posting can still sit inside a changing org","amazon-layoffs"],
          ["Hiring breadth","Openings span technology, operations, sales and product","Positive","Demand is not limited to one function","amazon-jobs"],
          ["Interview diligence","Net-new vs backfill and reorg history are essential questions","Watch","Team context matters more than company-level headlines","amazon-layoffs"]
        ]
      }
    },
    sources: {
      "amazon-q2": {name:"Amazon Q2 2026 Results", url:"https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/default.aspx", note:"Revenue, operating income, AWS growth and cash-flow data."},
      "amazon-sec": {name:"Amazon Q2 2026 SEC Exhibit", url:"https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm", note:"Headcount and quarterly company data."},
      "amazon-layoffs": {name:"Amazon — January 2026 Corporate Reductions", url:"https://www.aboutamazon.com/news/company-news/amazon-layoffs-corporate-jan-2026", note:"Amazon's first-party announcement of roughly 16,000 corporate role reductions."},
      "amazon-jobs": {name:"Amazon Jobs", url:"https://amazon.jobs/en/job-category/", note:"Current first-party job-category counts and live postings."},
      "amazon-pay": {name:"Amazon Operations Pay Announcement", url:"https://press.aboutamazon.com/2026/9/amazon-raises-minimum-starting-pay-for-full-time-core-operations-employees-to-20-hour-with-average-pay-reaching-nearly-24-hour-and-launches-grocery-discount-and-access-to-new-lifetime-banking-benefits-to-make-everyday-life-more-affordable", note:"US operations compensation and benefits changes."},
      "amazon-acsi": {name:"ACSI Retail Study 2026", url:"https://theacsi.com/news-and-resources/press-releases/2026/01/27/press-release-retail-and-consumer-shipping-study-2026/", note:"Independent customer satisfaction benchmark."},
      "amazon-reuters-q2": {name:"Reuters — Amazon Q2 / AI Spending", url:"https://www.reuters.com/business/retail-consumer/amazon-beats-estimates-quarterly-cloud-revenue-growth-2026-07-30/", note:"AWS growth, advertising growth and capital-spending context."},
      "amazon-ftc": {name:"FTC — Amazon Ad Surcharge Case", url:"https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-states-sue-amazon-over-secret-ad-surcharge-scheme", note:"Government source for the 2026 ad-surcharge allegations."},
      "amazon-reddit": {name:"Reddit — Amazon Employee Discussion", url:"https://www.reddit.com/r/amazonemployees/comments/1woljlo/thoughts/", note:"Public employee discussion used only as a sentiment signal, not a verified fact source."},
      "amazon-safety": {name:"Amazon Workplace Safety Update", url:"https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-2025-injury-reduction", note:"First-party safety trend reporting."},
      "amazon-osha": {name:"OSHA Ergonomics Settlement", url:"https://www.osha.gov/news/newsreleases/osha-national-news-release/20241219", note:"Government record covering the corporate-wide ergonomics settlement."}
    }
  },

  cruva: {
    name: "Cruva",
    aliases: ["cruva"],
    industry: "AI SaaS · Social Commerce · TikTok Shop",
    meta: "Los Angeles, CA · Founded mid-2024 · ~11 people recently · Bootstrapped",
    updated: "Updated Sep 28, 2026",
    overallGrade: "B+",
    grades: {
      "Business Stability": "A-",
      "Hiring & Workforce": "A",
      "Employee Sentiment": "B-",
      "Customer / Product": "B+",
      "Job Credibility": "A-"
    },
    decisionLayer: {
      applyDecision:"Apply Now — Verify Fit",
      applyWhy:"Hiring intensity is high relative to company size and the openings are supported by a live first-party careers page.",
      applyTone:"good",
      hiringReality:"Expansion-stage",
      hiringWhy:"Six openings against an approximately 11-person team points to aggressive growth rather than passive posting.",
      hiringTone:"good",
      ghostJobWatch:"Low–Moderate",
      ghostWhy:"Openings are live in Ashby, though some roles have remained visible for 30+ days.",
      ghostTone:"watch",
      ats:"Ashby",
      atsWhy:"Cruva's live application workflow uses Ashby.",
      aiHiring:"Possible",
      aiWhy:"Ashby offers automation and AI-assisted recruiting capabilities, but Fly has no evidence that Cruva enables AI ranking or rejection.",
      aiTone:"watch",
      timeWaste:"Low–Moderate",
      timeWasteWhy:"The main uncertainty is startup speed and process variation, not evidence of a long or burdensome application flow.",
      timeWasteTone:"watch",
      applicationPath:[
        ["Career site","Verified","Cruva careers"],
        ["ATS","Ashby","Confirmed"],
        ["Automated screening","Possible","No employer-specific confirmation"],
        ["Recruiter","Likely human"],
        ["Hiring manager","Likely direct"],
        ["Interview","Unknown"]
      ]
    },
    findings: [
      {type:"good", title:"Profitable and bootstrapped", text:"Cruva's public hiring materials describe the business as profitable with no outside capital dependency."},
      {type:"good", title:"Hiring is expansion-stage", text:"Six openings on an approximately 11-person team is an unusually high hiring intensity."},
      {type:"watch", title:"Very young company", text:"The company launched in 2024, so operating history and independent employee evidence are still thin."},
      {type:"watch", title:"Platform concentration", text:"Cruva is tightly tied to the TikTok Shop ecosystem, making platform changes a meaningful business risk."}
    ],
    hiringSnapshot: [
      ["Current team", "~11 people recently"],
      ["Current openings", "6"],
      ["Largest hiring function", "Marketing · 3 of 6"],
      ["Recent senior hire", "VP of Sales · Sep 2026"],
      ["Hiring signal", "Expansion-stage"]
    ],
    readout: {
      good: "Bootstrapped and profitable, rapid customer growth, active hiring and visible founder involvement.",
      watch: "Very young company, limited independent review depth and meaningful dependence on TikTok Shop.",
      ask: "How much hiring is net-new vs replacement? What is voluntary turnover? How is CS capacity changing? How concentrated is revenue?"
    },
    tabs: {
      stability: {
        title:"Business Stability",
        intro:"Cruva shows strong early traction, but its youth and concentration in the TikTok Shop ecosystem remain meaningful risks.",
        rows:[
          ["Funding","Fully bootstrapped; founder says $0 raised","Positive","No VC dependency","cruva-founder"],
          ["Profitability","Job postings describe Cruva as profitable","Positive","Supports operating durability","cruva-careers"],
          ["Revenue","Multi-seven-figure / multi-million ARR claimed","Positive","Meaningful traction for a young company","cruva-careers"],
          ["Customer growth","850 brands to 2,400 in six months","Positive","Rapid adoption","cruva-founder"],
          ["Layoffs","No credible public layoff event found","Positive","No obvious retrenchment signal","cruva-careers"],
          ["Primary risk","Heavy TikTok Shop ecosystem dependency","Watch","Platform concentration","cruva-product"]
        ]
      },
      hiring: {
        title:"Hiring & Workforce",
        intro:"Cruva's hiring intensity is exceptionally high relative to its current team size.",
        rows:[
          ["Current team","~11 people recently","Mixed","Each hire materially changes capacity","cruva-founder"],
          ["Current openings","6","Positive","Aggressive hiring relative to size","cruva-careers"],
          ["Largest function","Marketing · 3 of 6 roles","Positive","Commercial growth is the biggest current investment area","cruva-careers"],
          ["Other functions","Engineering, Customer Success and Sales","Positive","Balanced expansion","cruva-careers"],
          ["Senior hire","VP of Sales joined Sep 2026","Positive","Signals commercial build-out","cruva-vpsales"]
        ]
      },
      employees: {
        title:"Employee & Workplace",
        intro:"Public employee evidence is limited, so the grade should be treated as provisional rather than definitive.",
        rows:[
          ["Independent reviews","Very limited public review corpus","Watch","Do not over-read the grade","cruva-founder"],
          ["Employee voice","Early employee described strong learning and growth","Positive","Suggests opportunity and mentorship","cruva-employee"],
          ["Founder transparency","CEO has discussed scaling, culture and communication challenges","Mixed","Expect startup growing pains","cruva-founder"],
          ["Work style","Speed, ownership and fast shipping are recurring themes","Mixed","Best fit for candidates comfortable with ambiguity","cruva-careers"],
          ["Office model","Shifted toward more in-person LA collaboration","Mixed","Ask what applies to the specific team","cruva-careers"]
        ]
      },
      customers: {
        title:"Customer & Product",
        intro:"Cruva has strong first-party customer outcomes and recognizable brands, but independent review volume is still limited.",
        rows:[
          ["Core product","AI operating system for TikTok Shop affiliate growth","Positive","Broad workflow coverage","cruva-product"],
          ["Customer scale","2,500+ brands claimed","Positive","Strong adoption signal","cruva-product"],
          ["Named customers","SACHEU, Bloom Nutrition, True Classic and others","Positive","Recognizable customer proof","cruva-product"],
          ["Case study","Cruva reports 306% affiliate GMV growth for SNOW","Positive","Strong outcome, but first-party","cruva-snow"],
          ["Independent sentiment","External review volume remains thin","Watch","Limits certainty","cruva-product"],
          ["Pricing","$199 / $399 / $599 / Enterprise","Mixed","Potential friction for smaller brands","cruva-product"]
        ]
      },
      credibility: {
        title:"Opportunity & Job Credibility",
        intro:"Cruva's openings have strong first-party support through its careers page and live ATS.",
        rows:[
          ["Official postings","Cruva careers page lists active openings","Positive","Strong first-party evidence","cruva-careers"],
          ["ATS","Live Ashby workflow supports listings","Positive","Improves posting credibility","cruva-careers"],
          ["Role age","Some roles have remained visible 30+ days","Watch","Worth asking about hiring timeline","cruva-careers"],
          ["Growth context","Hiring coincides with customer and team expansion","Positive","Supports expansion rather than pure replacement","cruva-founder"]
        ]
      }
    },
    sources: {
      "cruva-careers": {name:"Cruva Careers", url:"https://cruva.com/careers", note:"Current openings and hiring context."},
      "cruva-founder": {name:"Sebastian Nelson — Company Growth Updates", url:"https://www.linkedin.com/posts/sebastianpnelson_6-months-ago-i-posted-this-it-said-850-brands-activity-7496204640586379264-kOFB", note:"Founder-reported customer growth, team size and bootstrapped status."},
      "cruva-vpsales": {name:"Nick Loconsole — LinkedIn", url:"https://www.linkedin.com/in/nick-loconsole", note:"Recent VP of Sales leadership hire."},
      "cruva-employee": {name:"Mokai Balogun — LinkedIn", url:"https://www.linkedin.com/posts/mokai-balogun-836105268_a-year-ago-sebastian-nelson-hired-me-as-activity-7413011033092472832-6nE6", note:"Public employee voice used as a limited culture signal."},
      "cruva-product": {name:"Cruva", url:"https://cruva.com", note:"Product, positioning, customer and pricing information."},
      "cruva-snow": {name:"Cruva / SNOW Case Study", url:"https://cruva.com/case-studies/snow", note:"Company-published customer outcome."}
    }
  },

  bny: {
    name: "BNY",
    aliases: ["bny","bank of new york mellon","bny mellon"],
    industry: "Financial Services · Asset Servicing · Banking",
    meta: "New York, NY · Founded 1784 · ~48.1K employees · Public company",
    updated: "Updated Sep 2026",
    overallGrade: "B",
    grades: {
      "Business Stability": "A",
      "Hiring & Workforce": "C+",
      "Employee Sentiment": "C",
      "Customer / Product": "A-",
      "Job Credibility": "D+"
    },
    decisionLayer: {
      applyDecision:"Verify First",
      applyWhy:"BNY is financially strong and the roles are real, but repeated reposting in some job families weakens confidence that every requisition is actively converting candidates now.",
      applyTone:"watch",
      hiringReality:"Mixed",
      hiringWhy:"There is a visible Houston hiring cluster, but company headcount has declined for multiple years while automation expands.",
      hiringTone:"watch",
      ghostJobWatch:"Elevated",
      ghostWhy:"Near-identical VP Client Operations roles have resurfaced across multiple months and requisition IDs.",
      ghostTone:"risk",
      ats:"Oracle Recruiting",
      atsWhy:"The official BNY requisition is hosted on Oracle Cloud Candidate Experience.",
      aiHiring:"Possible",
      aiWhy:"Oracle recruiting products support automation and AI features, but Fly has no BNY-specific proof that AI is ranking or rejecting applicants.",
      aiTone:"watch",
      timeWaste:"High for repeated roles",
      timeWasteWhy:"Long-running/reposted job families can consume applicant time without clear evidence of near-term conversion.",
      timeWasteTone:"risk",
      applicationPath:[
        ["Career site","Verified","BNY Careers"],
        ["ATS","Oracle Recruiting","Confirmed from application URL"],
        ["Automated screening","Possible","Employer use not confirmed"],
        ["Recruiter","Likely human"],
        ["Hiring manager","Likely after recruiter screen"],
        ["Decision","Conversion signal mixed"]
      ]
    },
    findings: [
      {type:"good", title:"Financial performance is very strong", text:"2025 produced record revenue and net income, and Q2 2026 revenue rose 13% year over year."},
      {type:"watch", title:"Headcount is moving the other way", text:"Full-time employees fell from 53.4K in 2023 to 48.1K in 2025 while efficiency and AI programs expanded."},
      {type:"watch", title:"Some roles appear repeatedly", text:"The Houston VP Client Operations family has shown repeated reposting across multiple requisitions and months."},
      {type:"watch", title:"Strong business does not equal strong applicant conversion", text:"The company is healthy, but repeated listings and ongoing automation make role-by-role diligence important."}
    ],
    hiringSnapshot: [
      ["Employees","~48.1K at Dec 2025"],
      ["Headcount trend","Down from 53.4K in 2023"],
      ["Houston signal","Large Client Ops / Processing cluster"],
      ["Target-role pattern","Repeated VP-level reposting"],
      ["Hiring reality","Real openings, mixed conversion signal"]
    ],
    readout: {
      good:"BNY is financially strong, profitable and still hiring across multiple operations and service functions.",
      watch:"Headcount has declined for multiple years while automation and platform consolidation continue. Some job families show repeated repost behavior.",
      ask:"Is the role net-new, backfill or pipeline? How long has the requisition truly been open? When was the last person hired into this exact team?"
    },
    tabs: {
      stability:{title:"Business Stability",intro:"BNY's business is strong even as the organization becomes leaner.",rows:[
        ["2025 revenue","$20.1B record revenue","Positive","Strong franchise economics","bny-annual"],
        ["2025 net income","$5.3B record net income","Positive","High profitability","bny-annual"],
        ["Q2 2026 revenue","$5.698B, +13% YoY","Positive","Momentum continued into 2026","bny-q2"],
        ["Headcount","48.1K at Dec 2025, down from 53.4K in 2023","Watch","Efficiency is translating into a smaller workforce","bny-annual"]
      ]},
      hiring:{title:"Hiring & Workforce",intro:"Hiring exists, but visible demand sits alongside a shrinking workforce and repeated postings in some job families.",rows:[
        ["Houston cluster","Multiple Client Ops / Processing / Loans roles","Positive","Function-level demand is real","bny-jobs"],
        ["Role reposting","Similar VP Client Operations roles resurfaced across months","Watch","May indicate long-running or pipeline recruiting","bny-role"],
        ["Workforce trend","Multi-year FTE decline","Watch","Open roles do not necessarily mean net expansion","bny-annual"],
        ["AI / platform shift","Automation and platform consolidation are strategic priorities","Watch","Operations roles may be redesigned as hiring continues","bny-annual"]
      ]},
      employees:{title:"Employee & Workplace",intro:"The most defensible public signals are organizational change, RTO and workforce reduction rather than third-party review scores.",rows:[
        ["Work policy","4 days/week in office since Sep 2025","Watch","Less flexibility for hybrid candidates","bny-rto"],
        ["Workforce reduction","FTE down materially across 2023-2025","Watch","Job security varies by function","bny-annual"],
        ["AI training","Broad employee AI enablement","Mixed","Upskilling opportunity alongside automation","bny-annual"]
      ]},
      customers:{title:"Customer & Product",intro:"BNY remains a very large, durable institutional financial-services platform.",rows:[
        ["AUC/A","$62.6T at Jun 2026","Positive","Exceptional institutional scale","bny-q2"],
        ["AUM","$2.2T at Jun 2026","Positive","Large asset-management franchise","bny-q2"],
        ["2026 outlook","Revenue outlook raised to +10-11%","Positive","Management sees continued momentum","bny-q2"]
      ]},
      credibility:{title:"Opportunity & Job Credibility",intro:"The posting can be authentic while the near-term probability of conversion remains uncertain.",rows:[
        ["Posting authenticity","Official BNY requisitions are live","Positive","The jobs exist","bny-role"],
        ["Repost pattern","Near-identical roles have appeared repeatedly","Risk","True role age may be older than the latest posting date","bny-role"],
        ["Hiring context","Large related Houston role cluster","Mixed","Demand exists, but not every req implies growth","bny-jobs"]
      ]}
    },
    sources:{
      "bny-annual":{name:"BNY 2025 Annual Report",url:"https://www.bny.com/corporate/global/en/investor-relations/annual-report-2025.html",note:"Revenue, profit, headcount and strategy."},
      "bny-q2":{name:"BNY Q2 2026 Results",url:"https://www.reuters.com/business/finance/bny-lifts-2026-revenue-forecast-above-estimates-after-record-second-quarter-2026-07-15/",note:"Q2 2026 growth and outlook."},
      "bny-rto":{name:"Reuters — BNY RTO",url:"https://www.reuters.com/business/world-at-work/bny-asks-employees-return-office-four-days-week-by-september-2025-04-30/",note:"Four-day office requirement."},
      "bny-role":{name:"BNY Careers — VP Client Operations",url:"https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/BNY-Careers/job/78517/",note:"Official requisition used for posting credibility."},
      "bny-jobs":{name:"BNY Jobs — Texas",url:"https://www.linkedin.com/jobs/bny-jobs-texas",note:"Current Houston/Texas role cluster."}
    }
  },

  insightglobal: {
    name: "Insight Global",
    aliases:["insight global","ig"],
    industry:"Staffing · Recruiting · Professional Services",
    meta:"Atlanta, GA · 25+ years · Large national staffing firm",
    updated:"Updated Sep 2026",
    overallGrade:"A-",
    grades:{
      "Business Stability":"A",
      "Hiring & Workforce":"A-",
      "Employee Sentiment":"B",
      "Customer / Product":"A-",
      "Job Credibility":"A-"
    },
    findings:[
      {type:"good",title:"Large, diversified operating scale",text:"Insight Global reports 60K+ placements annually and 2,600+ active customers."},
      {type:"good",title:"Hiring engine is active",text:"The company reports large placement volume and ongoing internal hiring plans."},
      {type:"watch",title:"Candidate experience can vary by recruiter",text:"Large staffing operations can produce uneven follow-up, contractor support and conversion experiences."},
      {type:"watch",title:"Contract-to-hire is not guaranteed",text:"Candidates should verify client budget, conversion history, benefits and who owns support after placement."}
    ],
    hiringSnapshot:[
      ["Annual placements","60K+"],
      ["Direct placements","7K+ / year"],
      ["Active customers","2,600+"],
      ["Fortune 1000 customers","800+"],
      ["Candidate reality","High opportunity, variable experience"]
    ],
    readout:{
      good:"Scale and client diversification create a large opportunity surface for candidates.",
      watch:"Candidate experience depends heavily on recruiter, assignment, client and local team.",
      ask:"Is this role direct hire, contract or contract-to-hire? What is the client's historical conversion rate? Who supports me after placement?"
    },
    tabs:{
      stability:{title:"Agency Health",intro:"Insight Global's scale and diversified client base are the main stability signals.",rows:[
        ["Placement scale","60K+ placements annually","Positive","Large recurring demand engine","ig-site"],
        ["Customer base","2,600+ active customers","Positive","Diversification reduces single-client risk","ig-site"],
        ["Enterprise reach","800+ Fortune 1000 customers","Positive","Broad enterprise footprint","ig-site"]
      ]},
      hiring:{title:"Hiring & Opportunity",intro:"This is a high-volume staffing model, so job seekers should distinguish client demand from guaranteed conversion.",rows:[
        ["Direct placements","7K+ per year","Positive","Shows permanent-placement activity","ig-site"],
        ["Shortlist speed","Company reports shortlists in ≤48 hours","Positive","Fast operating cadence","ig-site"],
        ["Conversion","Varies by client and assignment","Watch","Contract-to-hire should never be assumed","ig-site"]
      ]},
      employees:{title:"Candidate Experience",intro:"The prototype leaves first-hand candidate reporting to the new Fly review layer rather than republishing third-party reviews.",rows:[
        ["Recruiter dependence","Experience can vary by recruiter/location","Watch","Ask who owns follow-up and escalation","ig-site"],
        ["Contract support","Clarify payroll, PTO, benefits and assignment-end process","Watch","Important before accepting","ig-site"]
      ]},
      customers:{title:"Market & Operations",intro:"Insight Global serves multiple professional sectors and a large enterprise customer base.",rows:[
        ["Sector breadth","Technology, healthcare, finance, engineering and more","Positive","Multiple demand pools","ig-site"],
        ["Technology exposure","1,200+ active customers cited","Positive","Deep technology staffing footprint","ig-site"]
      ]},
      credibility:{title:"Opportunity & Job Credibility",intro:"Agency-posted opportunities can be legitimate while still varying in funding, exclusivity and client urgency.",rows:[
        ["Agency scale","High placement volume","Positive","Strong evidence of real recruiting activity","ig-site"],
        ["Client dependency","Some openings depend on client-side timing","Watch","Ask whether req is funded and exclusive","ig-site"]
      ]}
    },
    sources:{
      "ig-site":{name:"Insight Global",url:"https://insightglobal.com/",note:"Company scale, services and operating information."}
    }
  },

  revenuecat: {
    name:"RevenueCat",
    aliases:["revenuecat","revenue cat"],
    industry:"Developer Tools · Subscription Infrastructure · SaaS",
    meta:"San Francisco, CA · Founded 2017 · Private · Series C",
    updated:"Updated mid-2026",
    overallGrade:"B+",
    grades:{
      "Business Stability":"B+",
      "Hiring & Workforce":"B",
      "Employee Sentiment":"—",
      "Customer / Product":"A-",
      "Job Credibility":"B+"
    },
    findings:[
      {type:"good",title:"Well-funded private company",text:"Research shows roughly $119M raised with reputable institutional backers."},
      {type:"good",title:"Strong product reputation",text:"The company has a strong developer-market position in in-app subscription infrastructure."},
      {type:"watch",title:"Private-company data is noisy",text:"Headcount, valuation and revenue estimates vary widely across sources."},
      {type:"watch",title:"Culture grade intentionally withheld",text:"The public prototype is not republishing restricted third-party employee-review data."}
    ],
    hiringSnapshot:[
      ["Stage","Series C"],
      ["Funding","~$119M across reported rounds"],
      ["Employee estimate","~77–163 across sources"],
      ["Layoff signal","No major public event found in research"],
      ["Data quality","Private-company estimates vary"]
    ],
    readout:{
      good:"Strong product-market reputation and reputable backing make RevenueCat worth serious consideration.",
      watch:"Private-company opacity means exact headcount, valuation, revenue and hiring pace require direct verification.",
      ask:"What is current headcount growth? Is the role net-new? What are the team's goals, hiring plan and expected workload?"
    },
    tabs:{
      stability:{title:"Business Stability",intro:"Funding quality and product traction are positive, but private-company financials remain less verifiable.",rows:[
        ["Funding","~$119M reported across 7 rounds","Positive","Strong capital base","rc-site"],
        ["Stage","Series C","Positive","Established startup rather than seed-stage","rc-site"],
        ["Data quality","Valuation and headcount estimates conflict","Watch","Verify directly in interviews","rc-site"]
      ]},
      hiring:{title:"Hiring & Workforce",intro:"The company appears to be operating from a position of strength, but current hiring intensity should be checked role by role.",rows:[
        ["Layoffs","No major public layoff event found in research","Positive","No obvious contraction signal","rc-site"],
        ["Headcount","Estimates vary significantly","Watch","Private-company staffing data is imprecise","rc-site"]
      ]},
      employees:{title:"Employee & Workplace",intro:"Third-party review data is intentionally excluded from this public prototype.",rows:[
        ["Public review layer","Not yet available","Mixed","Fly community reports will eventually populate this section","rc-site"]
      ]},
      customers:{title:"Customer & Product",intro:"RevenueCat is a recognized platform for mobile subscription infrastructure.",rows:[
        ["Core product","Subscription SDK, paywalls and analytics","Positive","Critical developer infrastructure","rc-site"],
        ["Market position","Strong developer adoption and ecosystem integrations","Positive","Supports durable product relevance","rc-site"]
      ]},
      credibility:{title:"Opportunity & Job Credibility",intro:"Role credibility should be assessed from current first-party postings as the demo evolves.",rows:[
        ["Company stage","Established Series C company","Positive","More durable than an early seed startup","rc-site"]
      ]}
    },
    sources:{
      "rc-site":{name:"RevenueCat",url:"https://www.revenuecat.com/",note:"Company, product and public business information."}
    }
  },

  sensortower: {
    name:"Sensor Tower",
    aliases:["sensor tower","sensortower"],
    industry:"Market Intelligence · Mobile Analytics · Ad Intelligence",
    meta:"San Francisco, CA · Founded 2013 · Private · Majority-owned by Riverwood Capital",
    updated:"Updated mid-2026",
    overallGrade:"B-",
    grades:{
      "Business Stability":"B+",
      "Hiring & Workforce":"C+",
      "Employee Sentiment":"—",
      "Customer / Product":"B+",
      "Job Credibility":"B"
    },
    findings:[
      {type:"good",title:"Business appears durable",text:"Research found a long profitability history, stable institutional ownership and active acquisition strategy."},
      {type:"good",title:"Product credibility is strong",text:"Sensor Tower data is widely used across enterprise and media contexts."},
      {type:"watch",title:"Fast M&A creates integration risk",text:"Multiple acquisitions in a relatively short period can create organizational churn."},
      {type:"watch",title:"Employee review data is intentionally excluded",text:"Fly's public prototype will rely on safer public signals plus future first-party candidate reports."}
    ],
    hiringSnapshot:[
      ["Employees","~348–439 estimated"],
      ["Ownership","Riverwood Capital majority owner"],
      ["Recent M&A","data.ai, Playliner, AppMagic"],
      ["Layoff evidence","No precise public scale verified in current research"],
      ["Hiring reality","Check team-specific growth vs integration"]
    ],
    readout:{
      good:"The business has credible market positioning and continued investment behind it.",
      watch:"Acquisition integration and private-company opacity can create team-level uncertainty even when the business is sound.",
      ask:"Is this role tied to growth, backfill or post-acquisition integration? Which product/team owns the headcount budget?"
    },
    tabs:{
      stability:{title:"Business Stability",intro:"Ownership continuity, profitability claims and acquisitions support the business case, with integration risk as the main watch item.",rows:[
        ["Ownership","Majority-owned by Riverwood Capital","Positive","Stable institutional backing","st-site"],
        ["M&A","Multiple acquisitions since 2024","Mixed","Growth signal with integration risk","st-site"],
        ["Revenue visibility","Private; not independently disclosed","Watch","Limits precision","st-site"]
      ]},
      hiring:{title:"Hiring & Workforce",intro:"Hiring should be read in the context of acquisitions and integration.",rows:[
        ["Team size","Hundreds of employees across estimates","Mixed","Private-company estimates vary","st-site"],
        ["Integration","Recent acquisitions may reshape teams","Watch","Ask about org design and duplicate functions","st-site"]
      ]},
      employees:{title:"Employee & Workplace",intro:"Restricted third-party review data is not republished here.",rows:[
        ["Fly review layer","Coming soon","Mixed","Future candidate and employee reports will live here","st-site"]
      ]},
      customers:{title:"Customer & Product",intro:"Sensor Tower operates a recognized intelligence platform across mobile, digital advertising and market analytics.",rows:[
        ["Platform breadth","Mobile, ad and market intelligence","Positive","Broad enterprise use cases","st-site"],
        ["Acquisitions","data.ai and AppMagic expand product coverage","Positive","Strengthens competitive footprint","st-site"]
      ]},
      credibility:{title:"Opportunity & Job Credibility",intro:"Current openings should be evaluated against the integration roadmap.",rows:[
        ["Org context","Acquisition-heavy environment","Watch","Role may be growth, replacement or consolidation related","st-site"]
      ]}
    },
    sources:{
      "st-site":{name:"Sensor Tower",url:"https://sensortower.com/",note:"Company, product and public business information."}
    }
  },

  vertiv: {
    name:"Vertiv",
    aliases:["vertiv","vrt"],
    industry:"Data Center Infrastructure · Power · Thermal Management",
    meta:"Westerville, OH · ~34K employees · Public company",
    updated:"Updated mid-2026",
    overallGrade:"A-",
    grades:{
      "Business Stability":"A",
      "Hiring & Workforce":"A-",
      "Employee Sentiment":"—",
      "Customer / Product":"A",
      "Job Credibility":"A-"
    },
    findings:[
      {type:"good",title:"AI infrastructure demand is driving growth",text:"FY2025 revenue reached about $10.2B and Q1 2026 revenue grew roughly 30% year over year."},
      {type:"good",title:"Backlog remains very large",text:"Backlog ended FY2025 near $15B and remained strongly above prior-year levels in Q1 2026."},
      {type:"good",title:"Workforce expanded",text:"Vertiv reported roughly 34K employees and 2,500+ salaried hires in 2025."},
      {type:"watch",title:"Demand concentration cuts both ways",text:"About 85% of revenue is tied to data centers, increasing exposure to hyperscaler capital spending cycles."}
    ],
    hiringSnapshot:[
      ["Employees","~34K"],
      ["2025 salaried hires","2,500+"],
      ["Hiring emphasis","Engineering, Services, Operations"],
      ["Layoff signal","No major Vertiv-specific 2026 event found in research"],
      ["Demand signal","Large backlog and strong revenue growth"]
    ],
    readout:{
      good:"Vertiv combines strong demand, rising revenue, a large backlog and active hiring.",
      watch:"The biggest macro risk is concentration in the AI/data-center buildout and whether that demand converts on schedule.",
      ask:"Which business segment is funding the role? Is headcount tied to backlog growth? What happens if hyperscaler capex slows?"
    },
    tabs:{
      stability:{title:"Business Stability",intro:"Vertiv's financial and demand indicators are strong.",rows:[
        ["FY2025 revenue","~$10.23B, +27.7% YoY","Positive","Strong growth","vrt-site"],
        ["Q1 2026 revenue","~$2.65B, +30% YoY","Positive","Momentum remains strong","vrt-site"],
        ["Backlog","~$15B at FY2025","Positive","Substantial future demand visibility","vrt-site"],
        ["Concentration","~85% of revenue tied to data centers","Watch","High exposure to one major investment cycle","vrt-site"]
      ]},
      hiring:{title:"Hiring & Workforce",intro:"The workforce expanded alongside demand.",rows:[
        ["Employees","~34K globally","Positive","Large operating base","vrt-site"],
        ["2025 salaried hires","2,500+","Positive","Strong expansion signal","vrt-site"],
        ["Priority functions","Engineering, Services and Operations","Positive","Hiring aligned to capacity growth","vrt-site"]
      ]},
      employees:{title:"Employee & Workplace",intro:"This public prototype avoids restricted review-site content and focuses on workforce facts.",rows:[
        ["Workforce growth","2,500+ salaried hires in 2025","Positive","Expansion rather than contraction","vrt-site"]
      ]},
      customers:{title:"Customer & Product",intro:"Vertiv is highly exposed to the global data-center buildout.",rows:[
        ["Data-center exposure","~85% of revenue","Positive","Direct leverage to AI infrastructure spending","vrt-site"],
        ["Market position","#1 positions cited in thermal management and large UPS/power distribution","Positive","Strong competitive position","vrt-site"]
      ]},
      credibility:{title:"Opportunity & Job Credibility",intro:"Strong demand and workforce expansion support the credibility of current hiring.",rows:[
        ["Hiring alignment","Hiring concentrated in functions needed to serve backlog","Positive","Supports net growth thesis","vrt-site"],
        ["Macro dependency","Role durability still depends on data-center demand","Watch","Ask how team plans map to backlog","vrt-site"]
      ]}
    },
    sources:{
      "vrt-site":{name:"Vertiv Investor Relations",url:"https://investors.vertiv.com/",note:"Public financial, workforce and business information."}
    }
  }
};
