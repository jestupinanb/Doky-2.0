import fire from '../config/Fire';

export class FirebaseUpdateRepository {

    constructor(){
        this.firebaseInstance = fire;
    }


    updateAttributesDocument(pathCollection, idDoc, attributes){
        return this.firebaseInstance.firestore().collection(pathCollection).doc(idDoc).update(attributes);
    }

    updateAttributesDocumentCompletePath(pathDocument, attributes){
        return this.firebaseInstance.firestore().doc(pathDocument).update(attributes);
    }
    
}