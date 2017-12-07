import { firebase, setPendingCred, GoogleAuthProvider, FacebookAuthrovider} from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

const linkAccounts = (error) => {
// Account exists with different credential. To recover both accounts
    // have to be linked but the user must prove ownership of the original
    // account.
    if (error.code == 'auth/account-exists-with-different-credential') {
      const existingEmail = error.email;
      const pendingCred = error.credential;
      // Lookup existing account’s provider ID.
      return firebase.auth().fetchProvidersForEmail(error.email)
        .then(function(providers) {
           if (providers.indexOf(firebase.auth.EmailAuthProvider.PROVIDER_ID) != -1) {
             // Password account already exists with the same email.
             // Ask user to provide password associated with that account.
             var password = window.prompt('Please provide the password for ' + existingEmail);
             return firebase.auth().signInWithEmailAndPassword(existingEmail, password);    
           } else if (providers.indexOf(firebase.auth.GoogleAuthProvider.PROVIDER_ID) != -1) {
             // Sign in user to Google with same account.
             setPendingCred(pendingCred);
             GoogleAuthProvider.setCustomParameters({'login_hint': existingEmail});
             return firebase.auth().signInWithRedirect(GoogleAuthProvider);
           } 
        })
    }
    throw error;
}

export const startLogin = (provider) => {
  return () => {
    switch(provider){
      case 'google':
        return firebase.auth().signInWithPopup(GoogleAuthProvider).then((result) => {
          //Success
        }).catch((e) => linkAccounts(e));

      case 'facebook':
        return firebase.auth().signInWithPopup(FacebookAuthrovider).then((result) => {
          //Success
        }).catch((e) => linkAccounts(e));

      default: 
        return firebase.auth().signInWithPopup(FacebookAuthrovider).then((result) => {
          //Success  
        }).catch((e) => linkAccounts(e));
    }
  };
};


export const logout = (uid) => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
