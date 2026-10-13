# Publishing StormCost certificates

Each participant has a permanent certificate page and, once issued, an individual PDF. A team shares its leaderboard rank and score; its members do not share a certificate file.

Participant identities and filenames are maintained in [`src/data/stormCost.ts`](../../../src/data/stormCost.ts).

## 1. Confirm the participant

Match the certificate recipient to their Kaggle username and final team rank. Confirm the name they want printed using their submitted certificate details; do not assume a display name is their full name.

The `username` identifies the participant's page. Keep it unchanged when correcting a name or replacing a PDF so existing credential links continue to work.

## 2. Add the approved PDF

Save the final PDF in this directory. By default, `certificateFile` is the participant's Kaggle username followed by `.pdf`.

| Participant | Team rank | Default filename |
| --- | --- | --- |
| Mario Nicolae | 1 | `marionicolae.pdf` |
| Ayesha Saleem | 8 | `ayeshasal89.pdf` |
| Abdul Wahab | 8 | `abdulwahab740.pdf` |

For a PDF named after a participant, override `certificateFile` on that member's entry in the data file. For example:

```ts
{
  ...participant("Ayesha Saleem", "ayeshasal89"),
  certificateFile: "ayesha-saleem.pdf",
}
```

Use an exact, case-sensitive filename with the lowercase `.pdf` extension. Keep PDFs directly in this directory; the current file lookup does not scan subdirectories.

Only add approved certificates. Files in `public/` become publicly accessible after deployment. Do not include recipient emails, draft certificates, or private production notes.

## 3. Preview and verify

Generate the inline previews after adding or replacing PDFs. With Poppler installed,
run `bash scripts/render-certificate-previews.sh` from the repository root and
commit the matching `.jpg` files alongside the PDFs. The preview is rendered from
the original PDF; opening or downloading still uses the unchanged PDF.

Restart the development server after adding files, then open the participant's page:

```text
http://127.0.0.1:8080/competitions/storm-cost/certificates/ayeshasal89
```

Check that:

- The recipient, team, rank, and score match the approved details.
- The page shows the correct certificate preview under **Your certificate**.
- **Open certificate** displays the correct PDF in a new tab.
- **Download PDF** saves the same document.
- For a multi-member team, each person's link opens their own certificate.

When the mapped PDF is absent, the page shows **Certificate coming soon** and does not provide a broken download link. Do not use sample awards as substitutes for pending certificates.

Run `npm run build` before publishing. PDF availability is detected at build time, so deploy the new build and public files together.

## 4. Share the permanent link

Share the participant page as the credential link:

```text
https://btaji-crew.ibrahimqasmi.com/competitions/storm-cost/certificates/ayeshasal89
```

The PDF itself is available at `/certificates/storm-cost/<filename>.pdf`. Sharing the participant page lets the PDF filename change later without changing the recipient's credential link.

These are public pages served by the website; they do not currently provide a separate certificate-signature or identity-verification service.
