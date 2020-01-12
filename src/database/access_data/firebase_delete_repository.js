import fire from '../config/Fire';


export class FirebaseDeleteRepository {

    constructor(){
        this.firebaseInstance = fire;
    }

    deleteDocument(collectionPath, idDoc){
        return this.firebaseInstance.firestore().collection(collectionPath).doc(idDoc).delete();
    }

}