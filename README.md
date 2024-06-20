# proyecto8

Modelo para crear una foto:
    nombre:
    imagen:
    categoria: animales, coches, paisajes, aviones, trenes

Endpoints  FOTOS
<------->
Obtener todas las fotos
URL: http://localhost:3000/api/v1/fotos
Método: GET
Descripción: Obtiene una lista de todas las fotos en la base de datos.
Respuesta exitosa: Código 200 y un array de objetos de fotos.
<----->
Obtener una foto por ID
URL: http://localhost:3000/api/v1/fotos/:id
Método: GET
Descripción: Obtiene una foto específica por su ID.
Parámetros URL: id - ID de la foto.
Respuesta exitosa: Código 200 y el objeto de la foto.
<----->
Crear una nueva foto
URL: http://localhost:3000/api/v1/fotos
Método: POST
Descripción: Crea una nueva foto en la base de datos.
<------>
Borrar una foto
Url: http://localhost:3000/api/v1/fotos/:id
Método: DELETE
Descripción: Elimina una foto por el ID.


   <----------------------------------------->
Modelo para crear una camara: 
 nombre:
 imagen:

 Endpoints  CAMARAS
<------->
Obtener todas las camaras
URL: http://localhost:3000/api/v1/camaras
Método: GET
Descripción: Obtiene una lista de todas las camaras en la base de datos.
Respuesta exitosa: Código 200.
<----->
Obtener una camara por ID
URL: http://localhost:3000/api/v1/camaras/:id
Método: GET
Descripción: Obtiene una camara específica por su ID.
Parámetros URL: id - ID de la foto.
Respuesta exitosa: Código 200.
<----->
Crear una nueva camara
URL: http://localhost:3000/api/v1/camaras
Método: POST
Descripción: Crea una nueva camara en la base de datos.
<------>
Borrar una camara
Url: http://localhost:3000/api/v1/camaras/:id
Método: DELETE
Descripción: Elimina una cammara por el ID.  

   <----------------------------------------->




   
