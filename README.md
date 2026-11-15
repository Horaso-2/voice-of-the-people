# Voice of the people

A crowd-sourced version of the office whiteboard alignment chart. People open the
link, drag each PhD student onto each chart, and once they've placed someone they
can see where everyone else put them: the crowd average and a heatmap per student.

It's a static website (GitHub Pages or anywhere else) with Firebase for storage.

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


## Limits of anonymity

In the app, nobody (admins included) can link a vote to a browser or person. Whoever
owns the Firebase project can see raw data in the console, but anonymous identities
carry no names, so there's nothing to link votes to.

