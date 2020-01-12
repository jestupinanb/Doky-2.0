

import {FirebaseReadRepository} from '../access_data/firebase_read_repository';
import {FirebaseCreateRepository} from '../access_data/firebase_create_repository';



export class LocalidadesController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
    }

    readLocalidadesyBarrios() {

        let localidades = [];
        return this.firebaseReadRepository.readCollection("localidades").get().then(
            function (querySnapshot) {
                querySnapshot.forEach(
                    function (doc) {
                        let res = {
                            "localidad": doc.id,
                            "barrios": doc.data().barrios
                        }

                        localidades.push(res);
                    });
                return localidades;
            });


    }


    createLocalidades(nombreLocalidad, barrios){
        return this.firebaseCreateRepository.writeCollectionIdDefined("localidades",nombreLocalidad,barrios);
    }


}








