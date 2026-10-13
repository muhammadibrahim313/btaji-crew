// Session details from the Research Lab repository README, verified 2026-10-13.
export const researchLabRepo = "https://github.com/muhammadibrahim313/btaji-crew-research-lab";
export const researchPlaylist = "https://youtube.com/playlist?list=PLJPlXj5tLhiE&si=0679eGl6FdBYb1lH";
export const researchSessions = [
  {
    "num": "01",
    "title": "What Research Is and How to Read a Paper",
    "focus": "Research mindset, paper reading, limitations vs gaps",
    "date": "21 Jun 2026",
    "video": "https://youtu.be/IMJx7ECaIEk",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/01-first-research-paper/session-1-slides.pdf",
    "format": "PDF",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/01-first-research-paper/",
    "bonus": false
  },
  {
    "num": "02",
    "title": "Finding Your Gap, Literature Review, and Research Question",
    "focus": "Idea, hypothesis, literature review, gap, research question",
    "date": "27 Jun 2026",
    "video": "https://www.youtube.com/watch?v=fiJni4jwVuo&list=PLJPlXj5tLhiE&index=6",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/02-finding-research-gap/session-2-slides.pdf",
    "format": "PDF",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/02-finding-research-gap/",
    "bonus": false
  },
  {
    "num": "03",
    "title": "Is Your Gap Real? Finding and Validating a Research Gap",
    "focus": "Where ideas come from, narrowing, Google Scholar, AI sweep, verifying papers, gap validation",
    "date": "3 Jul 2026",
    "video": "https://youtu.be/lGJdD1jZDdo",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/03-is-your-gap-real/session-3-slides.pptx",
    "format": "PPTX",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/03-is-your-gap-real/",
    "bonus": false
  },
  {
    "num": "04",
    "title": "Planning Your Paper: Structure and Experiment Plan",
    "focus": "Paper structure, literature review, abstract, introduction, methodology vs experiments, data leakage, metrics, ablation, ORCID, LaTeX",
    "date": "11 Jul 2026",
    "video": "https://youtu.be/ln9pncI2niw",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/04-planning-your-paper/session-4-slides.pptx",
    "format": "PPTX",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/04-planning-your-paper/",
    "bonus": false
  },
  {
    "num": "4.1",
    "title": "Introduction to LaTeX",
    "focus": "Overleaf, document structure, formatting, tables and booktabs, figures, math with amsmath, references, troubleshooting",
    "date": "12 Jul 2026",
    "video": "https://youtu.be/2XXJIIBPfok",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/4.1-intro-to-latex/session-4.1-slides.pptx",
    "format": "PPTX",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/4.1-intro-to-latex/",
    "bonus": true
  },
  {
    "num": "05",
    "title": "Running Your First Experiment: From Plan to Results",
    "focus": "Baselines, reading a failure, step by step improvement, ablation studies, learning from winners, saving outputs, smoke tests",
    "date": "18 Jul 2026",
    "video": "https://youtu.be/-VfKmHZJ5I0",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/05-running-your-first-experiment/session-5-slides.pptx",
    "format": "PPTX",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/05-running-your-first-experiment/",
    "bonus": false
  },
  {
    "num": "06",
    "title": "Publishing Your Research: From Preprint to Journal",
    "focus": "Key terms, preprints, conferences and workshops, journals and indexing, metrics and quartiles, open access and APCs, HEC W/X/Y, choosing a route, predatory venues, authorship, next steps",
    "date": "26 Jul 2026",
    "video": "https://youtu.be/vVOQ_LU0WZc",
    "slides": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/06-publishing-your-research/session-6-slides.pptx",
    "format": "PPTX",
    "notes": "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/06-publishing-your-research/",
    "bonus": false
  }
];
export const mainSessionCount = researchSessions.filter((session) => !session.bonus).length;
