import fire from '../config/Fire';


export class FirebaseCreateRepository {

    constructor(){
        this.firebaseInstance = fire;
    }
    
    writeDocument(collectionUrl,document,merge=false){
        return this.firebaseInstance.firestore().doc(collectionUrl).set(document, { merge: merge });
    }

    writeDocumentChat(collectionUrl,document,merge=false){
        return this.firebaseInstance.firestore().collection(collectionUrl).add(document);
    }

    writeCollectionIdDefined(collectionName, idDoc, document){

        return this.firebaseInstance.firestore().collection(collectionName).doc(idDoc).set(document);

    }

}