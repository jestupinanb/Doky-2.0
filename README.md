## Principales cambios con respecto a la pagina original:
En react-router: 
se implemento de manera diferente de tal forma que si el usuario accede a una url que no existe se mostrara una pantalla informando que esta pagina no existe aun por ejemplo acceder a '/noexiste

Todas las url se encuentran organizadas y separdas de el codigo en general en un archivo que no pertenece a los 'components' y los 'containers' permitiendo un debug mas rapido 

Se hace uso de las ultimas funcionalidades (v5.1) de react-router(hooks)

En redux:
Se implemento redux, toda la informacion relacioanda a redux (actions,reducers y types) se encuentran en la carpeta de store se hizo uso de diferentes middleware para permitir nuevas funcionalidades, como el uso de funciones asincronas
