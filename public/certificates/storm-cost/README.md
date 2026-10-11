# StormCost participant PDFs

Add approved PDFs here. Participants are mapped in `src/data/stormCost.ts`.
Each `certificateFile` defaults to the Kaggle username plus `.pdf`.
Use that filename, or edit `certificateFile` for a differently named PDF.

Examples: `marionicolae.pdf` (rank 1), `ayeshasal89.pdf` and
`abdulwahab740.pdf` (the two members of SuperHumans, rank 8).

Permanent participant pages: `/competitions/storm-cost/certificates/<username>`.
Each team member has a different PDF, retaining their shared team rank and score.
Names currently match Kaggle display names; confirm final certificate names with
the organizer before producing documents.

Restart/rebuild after adding PDFs: availability is detected at build time.
Until a PDF exists, its page says “Certificate coming soon” with no broken download.
Only add approved files: this directory becomes publicly accessible on deployment.
