// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHBRBtcNBixvLcE-Wg1beT_vH9xY19cI",
  authDomain: "otp-project-8aa52.firebaseapp.com",
  projectId: "otp-project-8aa52",
  storageBucket: "otp-project-8aa52.firebasestorage.app",
  messagingSenderId: "419216858047",
  appId: "1:419216858047:web:b6dfaf91611caaca385f0a",
  measurementId: "G-9DTH7W5P4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
// const analytics = getAnalytics(app);