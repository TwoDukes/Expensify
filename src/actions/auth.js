import { firebase, GoogleAuthProvider, FacebookAuthrovider} from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (provider) => {
  return () => {
    switch(provider){
      case 'google':
        return firebase.auth().signInWithPopup(GoogleAuthProvider);

      case 'facebook':
        return firebase.auth().signInWithPopup(FacebookAuthrovider);

      default: 
        return firebase.auth().signInWithPopup(FacebookAuthrovider);
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
