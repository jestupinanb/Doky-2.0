import fire from '../config/Fire';

export class FirebaseStorageRespository{
    constructor(){
        this.firebaseInstance = fire;
    }

    storageData(ref,img){
        return fire.storage().ref(ref).put(img);
    }
}