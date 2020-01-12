import fire from '../config/Fire';

// Here is where we want to connect our controllers with the authentication service
// We will use the Firebase service, so we will use its methods that are defined 
// in the Firebase's SDK.
//
// For more information about using that tool, please visit https://firebase.google.com/docs
//
// As always, we will create a class that you can use in your controllers.
// Take care don't use it in any place out of the controllers, because we need to
// follow a specific structure on our project.

export class FirebaseAuthRepository {

    // The first thing that we need is instance the object 'firebaseInstance', that we export
    // from 'Fire.js'; that will be done through the constructor.
    constructor(){
        this.firebaseInstance = fire;
    }

    // This will be the method for authenticate an email and password.
    // That suppose the logic in the controller is done.
    // It is a "return void", because we save the session in the cookies of the browser.
    authWithEmailAndPassword (email, password) {
        // I will use the method "signInWithEmailAndPassword" from the firebase SDK.
        // That's a promise, which means that it will return a value or an error.
        // For more information about promises, take a look at https://exploringjs.com/es6/ch_promises.html?__hstc=233161921.bf88e972fdd7a7debc8575bac5a80cf7.1479168000066.1479168000067.1479168000068.1&__hssc=233161921.1.1479168000069&__hsfp=528229161
        //
        // I will return the promise, because we could use it in the other layers.
        return this.firebaseInstance.auth().signInWithEmailAndPassword(email, password);
    }

    // This will be the method for creating new users.
    // It only create them in the auth service, doesn't save information like role, name, etc.
    // If you want to save that information, I suggest you to use the UID (User ID) that's unique
    // and relate it into the database with another controller. The UID will be saved into the
    // browser cookies once the user logs in.
    createAccountWithEmailAndPassword (email, password) {
        // Here I will use the firebase SDK method too.
        // As always, async methods are promises, so I will return them.
        return this.firebaseInstance.auth().createUserWithEmailAndPassword(email, password);
    }

    // This will be the method for log out the current session.
    // It will be responsible for deleting any current cookies related to Authentication Firebase.
    // I will use the Firebase SDK too.
    logOut () {
        // As always, async methods are promises, so I will return them.
        return this.firebaseInstance.auth().signOut();
    }

    getUserId() {
        return fire.auth().currentUser.uid;
    }

}