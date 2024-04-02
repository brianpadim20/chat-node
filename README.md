# Chat con NodeJS

Lo primero que se debe hacer para iniciar el proyecto es usar en consola el código npm start para generar el package.json.

Llenar los datos que este pide (nombre, version, descripcion, main, etc)

Luego crear dos carpetas:

- **Server**: Es donde se programa la parte del servidor, es decir la que recibirá los mensajes y tendrá el socket, el servidor, express y demás funcionando

- **Client** Es donde estará el HTML final, lo que se le mostrará al usuario, donde se tendrá un script que emitirá un socket o que se va a conectar al socket que se tenga programado.

## Instalación de dependencias

Para poder trabajar con sockets se instalan los siguientes módulos de Node:
- **Express**: npm install express --save, para que se guarde en el proyecto, además añade una dependencia al package.json, es un módulo que permite trabajar con protocolo http, tener acciones, tener un sistema de ruta, tener una serie de middlewares que permitirán trabajar con HTTP y muchas mas cosas.

- **Socket.io**: npm install socket.io --save, permite hacer las conexiones en tiempo real, crear sockets, etc.

- **Nodemon**: npm install nodemon --save-dev,  es un paquete que permite obtener algún tipo de cambio en el código de nodejs y cuando se hace el cambio en el cógio este daemon actualiza el servidor, lo vuelve a lanzar y por lo tanto se tienen disponibles los cambios sin necesidad de volver a lanzar el comando del servidor, se pone -dev para que sea una dependencia de desarrollo, es decir que cuando esté en producción o en un servidor remoto, no se tenga.

Después de instalarlas, ir a package.json y en la propiedad scripts crear el siguiente script:

        "start": "nodemon server/index.js",

Esto se hace para definir el comando npm start para que ejecute el index.js

Crear el fichero index.js en el server

