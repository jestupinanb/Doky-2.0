import fire from '../config/Fire';

export class FirebaseReadRepository {

    constructor(){
        this.firebaseInstance = fire;
    }

    readDocument(nameDocument){
        return this.firebaseInstance.firestore().doc(nameDocument);
    }

    readCollection(nameCollection){
        return this.firebaseInstance.firestore().collection(nameCollection);
    }


    readGroupCollection(nameCollection){
        return this.firebaseInstance.firestore().collectionGroup(nameCollection);
    }

}








