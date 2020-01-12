import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';
import { FirebaseAuthRepository } from '../access_data/firebase_auth_repository';
import { FirebaseStorageRespository } from '../access_data/firebase_storage_repository';
import { UserController } from './user_controller';
import { FirebaseDeleteRepository } from '../access_data/firebase_delete_repository';

//Servicios disp controller

const readServiciosIniciadosPrestador = async (idPrestador, tipoServicio) => {
    const url = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + idPrestador + "/" + tipoServicio + "susuario";
    const firebaseReadRepository = new FirebaseReadRepository();
    const userController = new UserController();
    let result = [];
    const snapshot = await firebaseReadRepository.readCollection(url).get();

    for (let i = 0; i < snapshot.size; i++) {
        let doc = snapshot.docs[i];
        const servicio = infoServicio(doc);
        const url2 = url + "/" + doc.id + "/solicitud";
        const snapshot2 = await firebaseReadRepository.readCollection(url2).get();
        for (let j = 0; j < snapshot2.size; j++) {
            let doc2 = snapshot2.docs[j];
            const consumidor = await userController.getInfomracionUsuario(doc2.id);
            const prestador = await userController.getInfomracionUsuario(idPrestador);
            result.push({ servicio: servicio, consumidor: consumidor, tipo: tipoServicio, prestador: prestador });
        }
    }
    return result;
}

const addImagen = (img, loadImg, error, fullyLoaded, getUserId, getaIdServicio, nombreServicio) => {
    const firebaseStorageRespository = new FirebaseStorageRespository();
    const task = firebaseStorageRespository.storageData(`/Servicios/${nombreServicio}/${getUserId}/${getaIdServicio}`, img);

    task.on('state_changed',
        snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            loadImg(percentage)
        },
        error,
        async () => {
            try {
                let url = await task.snapshot.ref.getDownloadURL();
                fullyLoaded(url)
            } catch (errorCatch) {
                error(errorCatch)
            }
        }
    )
}

const updateServicio = async (email, tipoServicio, idServicio, atributes) => {
    idServicio = idServicio.toLowerCase();
    const update = new FirebaseUpdateRepository();
    let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + email + "/" + tipoServicio + "susuario/";
    return update.updateAttributesDocument(direccion, idServicio, atributes)
}

//Get info servicios
const serviciosFullInfo = async (servicio, userId, servicioId) => {
    const search = 'servicios/' + servicio + '/' + servicio + 's/' + userId + '/' + servicio + 'susuario/' + servicioId;
    const firebaseReadRepository = new FirebaseReadRepository();
    return firebaseReadRepository.readDocument(search).get().then(
        querySnapshot => {
            const tipo = { tipoServicio: servicio };
            return { ...infoServicio(querySnapshot), ...tipo }
        }
    )
}

const infoServicio = (doc) => {
    if (doc.exists) {
        const data = doc.data();
        let id = { "id": doc.id }
        let parent = { "usuario": doc.ref.parent.parent.id }
        let cantidad = { puntuacion: promedio(data.sumapuntuacion, data.cantidadpuntuacion) }
        return { ...data, ...id, ...parent, ...cantidad }
    } else {
        console.log("No such document!");
    }
}

const promedio = (suma, cantidad) => {
    return suma / cantidad
}

const readBasicInfoInciarServicio = async (userId, idPrestador, idServicio, readServicioFullInfo) => {
    const userController = new UserController();
    const user = await userController.getInfomracionUsuario(userId);
    const prestador = await userController.getInfomracionUsuario(idPrestador);
    const servicio = await readServicioFullInfo(idPrestador, idServicio);
    return { user: user, prestador: prestador, servicio: servicio };
}


const readServiciosIniciadosConsumidor = async (idUser) => {
    let result = [];
    const firebaseReadRepository = new FirebaseReadRepository();
    const userController = new UserController();
    const snapshot = await firebaseReadRepository.readGroupCollection("solicitud").get();
    for (let i = 0; i < snapshot.size; i++) {
        let doc = snapshot.docs[i];
        if (doc.id === idUser) {
            const servicioRef = await doc.ref.parent.parent.get();
            if(servicioRef.exists){
                const consumidor = await userController.getInfomracionUsuario(doc.id);
                const prestador = await userController.getInfomracionUsuario(doc.ref.parent.parent.parent.parent.id);
                const servicio = await infoServicio(servicioRef);
                result.push({ servicio: servicio, consumidor: consumidor, tipo: doc.ref.parent.parent.parent.parent.parent.parent.id, prestador: prestador,paht:doc.ref.parent.parent.path ,doc:await doc.ref.parent.parent.get()});
            }
        }
    }
    return(result)
}

export class ServiciosDispController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
        this.firebaseAuthRepository = new FirebaseAuthRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
        this.firebaseDeleteRepository = new FirebaseDeleteRepository();
    }

    //CONSULTAS SIN FILTROS ##################################################################################################################

    async readServicio(tipoServicio) {
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    const values = infoServicio(doc)
                    servicio.push(values);
                });
                return servicio;
            });
    }


    readServicioGuarderia() {
        return this.readServicio("guarderia");
    }


    readServicioPaseo() {
        return this.readServicio("paseo");
    }


    readServicioVeterinaria() {
        return this.readServicio("veterinaria");
    }


    readServicioSalto() {
        return this.readServicio("salto");
    }

    //Devuelve un arreglo de guarderias ordenadas de mayor a menor puntuacion
    async readServicioFiltroPuntuacion(tipoServicio) {
        return this.readServicio(tipoServicio).then(function (servicio) {
            function comparar(a, b) { return b.puntuacion - a.puntuacion; }
            return servicio.sort(comparar);
        });
    }


    readServicioGuarderiaFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("guarderia");
    }

    readServicioPaseoFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("paseo");
    }

    readServicioVeterinariaFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("veterinaria");
    }

    readServicioSaltoFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("salto");
    }

    //Devuelve un arreglo de guarderias ordenadas de menor a mayor dentro de un rango de precio
    async readServicioFiltroPrecio(precioMin, precioMax, tipoServicio) {
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('precio', '>=', precioMin).where('precio', '<=', precioMax).orderBy('precio').get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let values = infoServicio(doc);
                    servicio.push(values);
                });
                return servicio;

            });
    }

    readServicioGuarderiaFiltroPrecio(precioMin, precioMax) {
        precioMin = parseFloat(precioMin);
        precioMax = parseFloat(precioMax);
        return this.readServicioFiltroPrecio(precioMin, precioMax, "guarderia");
    }

    readServicioPaseoFiltroPrecio(precioMin, precioMax) {
        precioMin = parseFloat(precioMin);
        precioMax = parseFloat(precioMax);
        return this.readServicioFiltroPrecio(precioMin, precioMax, "paseo");
    }

    readServicioVeterinariaFiltroPrecio(precioMin, precioMax) {
        precioMin = parseFloat(precioMin);
        precioMax = parseFloat(precioMax);
        return this.readServicioFiltroPrecio(precioMin, precioMax, "veterinaria");
    }

    readServicioSaltoFiltroPrecio(precioMin, precioMax) {
        precioMin = parseFloat(precioMin);
        precioMax = parseFloat(precioMax);
        return this.readServicioFiltroPrecio(precioMin, precioMax, "salto");
    }

    //Devuelve un arreglo de guarderias cuyo atributo 'localidad' == localidad
    async readServicioFiltroLocalidad(localidad, tipoServicio) {
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('localidad', '==', localidad).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let values = infoServicio(doc);
                    servicio.push(values);
                });
                return servicio;
            });
    }


    readServicioGuarderiaFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    readServicioPaseoFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "paseo");
    }

    readServicioVeterinarioFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "veterinaria");
    }

    readServicioSaltoFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    //Devuelve un arreglo de guarderias cuyo atributo 'barrio' == barrio
    readServicioFiltroBarrio(barrio, tipoServicio) {
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('barrio', '==', barrio).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }

    readServicioGuarderiaFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "guarderia");
    }

    readServicioPaseoFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "paseo");
    }

    readServicioVeterinariaFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "veterinaria");
    }

    readServicioSaltoFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "salto");
    }




    // realiza una consulta para verificar si el nombre de servicio que se esta ingresando
    // ya esta asignado.
    async verifyService(tipoServicio, nombreServicio) {
        let ac = true;
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where("nombre", "==", nombreServicio).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    ac = false;
                });
                return ac;
            }
        );
    }


    // crea el servicio en la base de datos
    // recibe el idUser del prestador y el objeto guarderia que incluye:
    // el nombre de la guarderia y los demas atributos.
    // en caso de que el nombre este repetido, devuelvo un objeto de tipo error
    async writeServicio(idUser, tipoServicio, servicio) {
        servicio.sumapuntuacion = 0;
        servicio.cantidadpuntuacion = 0;
        let verify = await this.verifyService(tipoServicio, servicio.nombre);
        if (verify) {
            let id = servicio.nombre.toLowerCase();
            let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + idUser + "/" + tipoServicio + "susuario/";
            return this.firebaseCreateRepository.writeCollectionIdDefined(direccion, id, servicio);
        } else {
            throw new Error("El nombre del servicio ya esta en uso");
        }
    }


    //Para TODAS las fuciones
    //-img: Imagen que se va a enviar tipo file
    //-loadImg: Una funcion que se ejecuta al cargar la imagen
    //-error: Una fucnion que se ejecuta al ocurrir un error
    //-fullyLoaded: Una funcion que se ejecuta al cargar la imagen

    async fullServicio(servicio, img, loadImg, error, fullyLoaded, addImagen, nombreServicio1) {
        let nombreServicio = nombreServicio1.toLowerCase();
        try {
            if (nombreServicio === "guarderia" || nombreServicio === "paseo" || nombreServicio === "salto") {
                let precio = parseInt(servicio.precio, 10);
                servicio.precio = precio;
            }
            const idUser = this.firebaseAuthRepository.getUserId();
            await this.writeServicio(idUser, nombreServicio, servicio);
            addImagen(img, loadImg, error,
                async (url) => {
                    await updateServicio(idUser, nombreServicio, servicio.nombre, { img: url })
                    fullyLoaded(url)
                }
                , idUser, servicio.nombre)
        } catch (errorCatch) {
            console.log(errorCatch)
        }
    }

    writeServicioGuarderia(guarderia, img, loadImg, error, fullyLoaded) {
        this.fullServicio(guarderia, img, loadImg, error, fullyLoaded, this.addImagenGuarderia, "guarderia")
    }

    writeServicioPaseo(paseo, img, loadImg, error, fullyLoaded) {
        this.fullServicio(paseo, img, loadImg, error, fullyLoaded, this.addImagenPaseo, "paseo")
    }

    writeServicioVeterinaria(veterinaria, img, loadImg, error, fullyLoaded) {
        this.fullServicio(veterinaria, img, loadImg, error, fullyLoaded, this.addImagenVeterinaria, "veterinaria")
    }

    writeServicioSalto(salto, img, loadImg, error, fullyLoaded) {
        this.fullServicio(salto, img, loadImg, error, fullyLoaded, this.addImagenSalto, "salto")
    }

    // recibe el nombre del servicio,  el tipo de servicio (guarderia, veterinaria, salto, paseo) y el valor de la nueva puntuacion
    async updateStars(nombreServicio, tipoServicio, nuevaPuntuacion) {

        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where("nombre", "==", nombreServicio).get().then(
            function (querySnapshot) {
                const update = new FirebaseUpdateRepository();
                querySnapshot.forEach(function (doc) {
                    let sp = doc.data().sumapuntuacion + nuevaPuntuacion;
                    let cp = doc.data().cantidadpuntuacion + 1;
                    let direccion = doc.ref.path.toString();
                    let m = {
                        sumapuntuacion: sp,
                        cantidadpuntuacion: cp
                    }
                    return update.updateAttributesDocumentCompletePath(direccion, m);
                })
            }

        );
    }

    updateStarsGuarderia(nombreServicio, nuevaPuntuacion) {
        return this.updateStars(nombreServicio, "guarderia", nuevaPuntuacion);
    }

    updateStarsPaseo(nombreServicio, nuevaPuntuacion) {
        return this.updateStars(nombreServicio, "paseo", nuevaPuntuacion);
    }

    updateStarsVeterinaria(nombreServicio, nuevaPuntuacion) {
        return this.updateStars(nombreServicio, "veterinaria", nuevaPuntuacion);
    }

    updateStarsSalto(nombreServicio, nuevaPuntuacion) {
        return this.updateStars(nombreServicio, "salto", nuevaPuntuacion);
    }

    //Get info servicios

    readSaltosFullInfo(userId, saltoId) {
        return serviciosFullInfo('salto', userId, saltoId);
    }

    readPasesosFullInfo(userId, idPaseo) {
        return serviciosFullInfo('paseo', userId, idPaseo);
    }

    readVeterinariaFullInfo(userId, idVeterinaria) {
        return serviciosFullInfo('veterinaria', userId, idVeterinaria);
    }

    readGuarderiaFullInfo(userId, idGuarderia) {
        return serviciosFullInfo('guarderia', userId, idGuarderia);
    }


    //Add imagen a los servicios

    //Para TODAS las fuciones
    //Reciben 4 parametros:
    //-imagen que se va a enviar tipo file
    //-una funcion que se ejecuta al cargar la imagen
    //-una fucnion que se ejecuta al ocurrir un error
    //-una funcion que se ejecuta al cargar la imagen

    addImagenPaseo(img, loadImg, error, fullyLoaded, idUser, idPaseo) {
        return addImagen(img, loadImg, error, fullyLoaded, idUser, idPaseo, "Paseos")
    }

    addImagenGuarderia(img, loadImg, error, fullyLoaded, idUser, idGuarderia) {
        return addImagen(img, loadImg, error, fullyLoaded, idUser, idGuarderia, "Guarderias")
    }

    addImagenSalto(img, loadImg, error, fullyLoaded, idUser, idSalto) {
        return addImagen(img, loadImg, error, fullyLoaded, idUser, idSalto, "Saltos")
    }

    addImagenVeterinaria(img, loadImg, error, fullyLoaded, idUser, idVeterinaria) {
        return addImagen(img, loadImg, error, fullyLoaded, idUser, idVeterinaria, "Veterinarias")
    }

    //Iniciar servicio

    async writeIiniciarServicio(idUser, tipoServicio, idPrestador, idServicio) {
        //Verficiacion de que el servicio no ha sido tomado
        idServicio = idServicio.toLowerCase();
        const verify = true;
        if (verify) {
            let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + idPrestador + "/" + tipoServicio + "susuario/" + idServicio + "/solicitud/" + idUser;
            return this.firebaseCreateRepository.writeDocument(direccion, { activo: true })
        } else {
            throw new Error("El nombre del servicio ya esta en uso");
        }
    }

    async writeIniciarServicioVeterinaria(idPrestador, idVeterinaria) {
        try {
            const userId = this.firebaseAuthRepository.getUserId();
            return await this.writeIiniciarServicio(userId, "veterinaria", idPrestador, idVeterinaria);
        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async writeIniciarServicioSalto(idPrestador, idSalto) {
        try {
            const userId = this.firebaseAuthRepository.getUserId();
            return await this.writeIiniciarServicio(userId, "salto", idPrestador, idSalto);
        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async writeIniciarServicioGuarderia(idPrestador, idGuarderia) {
        try {
            const userId = this.firebaseAuthRepository.getUserId();
            return await this.writeIiniciarServicio(userId, "guarderia", idPrestador, idGuarderia);
        } catch (error) {
            console.log(error)
            return error;
        }
    }


    async writeIniciarServicioPaseo(idPrestador, idPaseo) {
        try {
            const userId = this.firebaseAuthRepository.getUserId();
            return await this.writeIiniciarServicio(userId, "paseo", idPrestador, idPaseo);
        } catch (error) {
            console.log(error)
            return error;
        }
    }

    //Leer los servicios que ha iniciado el usuario
    async readServicioIniciadoVeterinaria(idPrestador, idVeterinaria) {
        const userId = this.firebaseAuthRepository.getUserId();
        return await readBasicInfoInciarServicio(userId, idPrestador, idVeterinaria, this.readVeterinariaFullInfo);
    }

    async readServicioIniciadoSalto(idPrestador, idSalto) {
        const userId = this.firebaseAuthRepository.getUserId();
        return await readBasicInfoInciarServicio(userId, idPrestador, idSalto, this.readSaltosFullInfo);
    }

    async readServicioIniciadoGuarderia(idPrestador, idGuarderia) {
        const userId = this.firebaseAuthRepository.getUserId();
        return await readBasicInfoInciarServicio(userId, idPrestador, idGuarderia, this.readGuarderiaFullInfo);
    }

    async readServicioIniciadoPaseo(idPrestador, idPaseo) {
        const userId = this.firebaseAuthRepository.getUserId();
        return await readBasicInfoInciarServicio(userId, idPrestador, idPaseo, this.readPasesosFullInfo);
    }

    //Servicios iniciados prestador
    async readServiciosIniciadosPrestador() {
        let servicios = [];
        let userId = this.firebaseAuthRepository.getUserId();
        servicios = servicios.concat(await readServiciosIniciadosPrestador(userId, "veterinaria"));
        servicios = servicios.concat(await readServiciosIniciadosPrestador(userId, "guarderia"));
        servicios = servicios.concat(await readServiciosIniciadosPrestador(userId, "paseo"));
        servicios = servicios.concat(await readServiciosIniciadosPrestador(userId, "salto"));
        return servicios;
    }

    //Servicios iniciados Consumidor
    async readServiciosIniciadosConsumidor(){
        let servicios = [];
        let userId = this.firebaseAuthRepository.getUserId();
        return servicios.concat(await readServiciosIniciadosConsumidor(userId,"veterinaria"))
    }

    //Devuelve todos los servicios del mismo tipo que tenga publicados el usuario
    async servicioPrestador(tipoServicio) {
        const userId = this.firebaseAuthRepository.getUserId();
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + userId + "/" + tipoServicio + "susuario/";
        return this.firebaseReadRepository.readCollection(direccion).get().then(
            function (querySnapshot) {
                let servicio = [];
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let tipo = { "tipo": tipoServicio };
                    let values = { ...doc.data(), ...id, ...tipo };
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;
            }
        );
    }


    servicioGuarderiaPrestador() {
        return this.servicioUsuario("guarderia");
    }

    servicioPaseoPrestador() {
        return this.servicioUsuario("paseo");
    }

    servicioVeterinariaPrestador() {
        return this.servicioUsuario("veterinaria");
    }

    servicioSaltoPrestador() {
        return this.servicioUsuario("salto");
    }


    //Retorna todos los servicios registrados de un prestador
    async allServiciosPrestador() {
        let veterinarias = await this.servicioPrestador("veterinaria");
        let paseos = await this.servicioPrestador("paseo");
        let guarderias = await this.servicioPrestador("guarderia");
        let saltos = await this.servicioPrestador("salto");

        let all = veterinarias.concat(paseos, guarderias, saltos);
        return all;
    }



    deleteServicio(nombreServicio, tipoServicio) {
        const userId = this.firebaseAuthRepository.getUserId();
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + userId + "/" + tipoServicio + "susuario/"
        return this.firebaseDeleteRepository.deleteDocument(direccion, nombreServicio);
    }

    //Terminar un servicio que se ha iniciado
    finalizarServicioIniciado(idServicio, tipoServicio,idPrestador, idConsumidor,calificacion){
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + idPrestador + "/" + tipoServicio + "susuario/" + idServicio + "/solicitud/";
        return this.firebaseDeleteRepository.deleteDocument(direccion,idConsumidor);
    }

}