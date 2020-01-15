import { CheckType } from '../utilities/check_type';
import { FirebaseAuthRepository } from '../access_data/firebase_auth_repository';

export class LoginController {

    // This will be the controller for the following things:
    //      1. Sign in (Login)
    //      2. Create account (Registration)
    //      3. Log out (Close the current session)
    //
    // So, each function will have its own method.
    // If you want to use them, just create an object of this class and use the methods.

    // We will instance the constructor with the objects that we will need
    constructor() {
        this.checkType = new CheckType();
        this.firebaseAuthRepository = new FirebaseAuthRepository();
    }

    // The method for 1. Sign in is as follows:
    signInWithEmailAndPassword(email, password) {

        // The first thing we need to do is verify if the variables are strings
        // so we will use isAString function.
        // If the email or the password are not strings, we will return false and
        // finish the function.

        if (!this.checkType.isAString(email) || !this.checkType.isAString(password)) {
            console.log('Email or password invalid');
            return false;
        }

        // If the previous check was satisfactory, we will continue.
        //
        // Now we need to use the AccessData layer to send the information and recieve 
        // a response from the server. For that, I will use the Firebase repository.

        return this.firebaseAuthRepository.authWithEmailAndPassword(email, password).then((user) => {
            // We don't need anything, the session will be saved into the browser's cookies.
        })


    }


    // The method for 2. Create account is as follows:
    createAccountWithEmailAndPassword(email, password) {

        // It is very similar to the previous one method, we need to verify if the input is valid
        // and then call the repository for creating the account.

        // I will use the same code for verifying the types
        if (!this.checkType.isAString(email) || !this.checkType.isAString(password)) {
            console.log('Email or password invalid');
            return false;
        }

        // Now I need to call the repository for creating the account.
        return this.firebaseAuthRepository.createAccountWithEmailAndPassword(email, password).then(
            user => {
                return user.user
            }
        )
    }


    // Ther method for 3. Log out is as follows:
    logOut() {
        // We don't need any information to close the current session, just you must call this method.
        // It will be responsible for deleting the Authentication Cookies into the browser.
        //
        // For that, I will use the repository too.
        return this.firebaseAuthRepository.logOut();
    }

}