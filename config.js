// Fill this in to go live. While firebase.apiKey is empty the site runs in
// demo mode: nothing is saved and the crowd votes are made up.
window.VP_CONFIG = {
  // Must match ownerEmail() in firestore.rules (lowercase). This person is always an admin.
  ownerEmail: "",

  // From Firebase console > gear icon > Project settings > General > Your apps.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  }
};
