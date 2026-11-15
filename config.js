// Fill this in to go live. While firebase.apiKey is empty the site runs in
// demo mode: nothing is saved and the crowd votes are made up.
window.VP_CONFIG = {
  // Must match ownerEmail() in firestore.rules (lowercase). This person is always an admin.
  ownerEmail: "gallewiks@gmail.com",

  // From Firebase console > gear icon > Project settings > General > Your apps.
  firebase: {
    apiKey: "AIzaSyD1kiQRWSRSiJ2aB3vDAPoYa_2wDwN7ZLo",
    authDomain: "voice-of-the-people-f5b5b.firebaseapp.com",
    projectId: "voice-of-the-people-f5b5b",
    appId: "1:748295254379:web:c81643b92aee1d14251c2e"
  }
};
