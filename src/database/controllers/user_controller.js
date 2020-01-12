import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';
import { FirebaseAuthRepository } from '../access_data/firebase_auth_repository';
import { FirebaseStorageRespository } from '../access_data/firebase_storage_repository';

export class UserController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
        this.firebaseAuthRepository = new FirebaseAuthRepository();
        this.firebaseStorageRespository = new FirebaseStorageRespository();
    }

    createUser(id, data) {
        return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios', id, data);
    }

    async getTipoUsuario(email) {
        return this.firebaseReadRepository.readCollection("usuarios").doc(email).get().then(
            querySnapshot => {
                return querySnapshot.data();
            }
        )
    }

    async getInformacionUsuario(userId) {
        return this.firebaseReadRepository.readCollection("usuarios").doc(userId).get().then(
            querySnapshot => {
                const id = {id:querySnapshot.id}
                return {...querySnapshot.data(),...id};
            }
        )
    }

    getUserId() {
        return this.firebaseAuthRepository.getUserId();
    }

    addMascota(userId, mascotaInfo) {

        return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios/' + userId + "/mascotas/", mascotaInfo.nombre, mascotaInfo);

    }

    //Recibe 4 parametros
    //-imagen que se va a enviar tipo file
    //-una funcion que se ejecuta al cargar la imagen
    //-una fucnion que se ejecuta al ocurrir un error
    //-una funcion que se ejecuta al cargar la imagen
    
    addImagen(img, loadImg, error, fullyLoaded) {
        const task = this.firebaseStorageRespository.storageData(`/FotosPerfil/${this.getUserId()}`, img);

        task.on('state_changed',
            snapshot => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                loadImg(percentage)
            },
            error,
            async () => {
                try {
                    let url = await task.snapshot.ref.getDownloadURL();
                    await this.firebaseCreateRepository.writeDocument("usuarios/" + this.getUserId(), { foto: url }, true)
                    fullyLoaded()
                } catch (errorCatch) {
                    error(errorCatch)
                }
            }
        )
    }

    async getInformacionMascotas() {
        const userId = this.getUserId();
            return this.firebaseReadRepository.readCollection("usuarios/" + userId + "/mascotas").get().then(
            querySnapshot => {
                let mascotas = []
                querySnapshot.forEach(
                    doc => {
                        mascotas.push(doc.data())
                    }
                )
                return mascotas
            }
        )
    }

}