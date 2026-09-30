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
  }
};
