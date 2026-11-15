# Voice of the people

A crowd-sourced version of the office whiteboard alignment chart. People open the
link, drag each PhD student onto each chart, and once they've placed someone they
can see where everyone else put them: the crowd average and a heatmap per student.

It's a static website (GitHub Pages or anywhere else) with Firebase for storage.
Firebase's free plan is plenty for an office.

Open `index.html` before setting anything up and it runs in **demo mode**: Student 1,
Student 2 and one placeholder chart, with made-up crowd votes and nothing saved.
(Serve the folder, e.g. `python3 -m http.server`, rather than double-clicking the file.)

## How it works

- **No sign-in for voters.** Each browser quietly gets its own anonymous identity the
  first time it opens the site. Votes are tied to that browser: coming back in the same
  browser shows your magnets and lets you move them; moving one replaces your vote.
- **One vote per browser per chart.** It works on trust: a second browser, a private
  window, or clearing browsing data counts as a new voter (the old vote stays counted
  but can no longer be edited). Safari also wipes site data after about a week without
  a visit. Anyone with the link can vote, so share it only with the office.
- **Anonymous.** Votes carry no name, email or timestamp.
- **Proposals.** Anyone can propose a chart. Admins approve or reject it.
- **Admins** sign in (Google or an emailed link) via "Admin sign-in" in the header.
  The owner is set in config and the rules; admins can add other admins by email,
  manage students, review proposals, archive charts and see turnout per chart.
  Admins should sign in in the browser they vote in, so their votes carry over, and
  avoid signing out (that starts a fresh anonymous identity in that browser).

## Firebase setup

1. **Create the project** at <https://console.firebase.google.com>. Gemini and
   Google Analytics aren't needed.
2. **Register a web app**: on the project overview page click the Web icon (`</>`),
   give it a nickname, leave Hosting unticked, choose "Use a script tag", and copy
   `apiKey`, `authDomain`, `projectId` and `appId` into `config.js`.
3. **Security > Authentication** > Get started > **Sign-in method** tab:
   - enable **Anonymous** (this is what voters use);
   - enable **Google** (for admins);
   - enable **Email/Password**, then **Email link (passwordless sign-in)** (for admins
     without a Google account).
4. Authentication > **Settings** tab > **Authorized domains** > Add domain: your Pages
   host, e.g. `yourname.github.io`. Add `localhost` too if you'll test locally.
5. **Databases & Storage > Firestore** > Create database: Standard edition, keep the ID
   `(default)`, pick a location (can't be changed later), Production mode.
6. Firestore **Rules** tab: paste `firestore.rules`, set your email in the `EDIT` line,
   Publish.
7. Set `ownerEmail` in `config.js`. Test with `python3 -m http.server` and
   <http://localhost:8000>, click **Admin sign-in**, then Admin > *Add example content*
   or add the real students. Push to GitHub and enable Pages.

## Limits of anonymity

In the app, nobody (admins included) can link a vote to a browser or person. Whoever
owns the Firebase project can see raw data in the console, but anonymous identities
carry no names, so there's nothing to link votes to.

## Files

- `index.html`: the whole app (no build step).
- `fonts/`: Computer Modern (CMU Serif, SIL Open Font License), self-hosted. Upload this folder too.
- `config.js`: your settings. Empty Firebase config = demo mode.
- `firestore.rules`: database security rules.
