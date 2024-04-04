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

## Cargar librerías

Para crear el servidor con NodeJS y Express, lo primero que se debe hacer es cargar el módulo Express

    var express = require('express');
    var app = express();
    var http = require('http'); // Importar el módulo http
    var server = http.createServer(app); // Crear un servidor HTTP con Express

Esta variable server se le debe pasar a socket.io para que entienda que estará trabajando con sockets dentro de la conexión http que se generen en el servidor http

Ahora se crea una variable io, a la cual se le pasará el servidor o la librería http con la aplicación de express para poder trabajar con los sockets.

    var io = require('socket.io')(server); // Inicializar socket.io con el servidor HTTP

Ahora se procede a crear un servidor con express.

    server.listen(6677, function(){ // 6677 es el puerto al que se conectará
        console.log('Servidor funcionando correctamente en http://localhost:6677');
    });

Para verificar que si funciona bien, es opcionar crear una ruta con la variable express (app)

---

**Trabajo con Socket.io**

Una vez verificada la url y que esté funcionando, se procede a trabajar con Socket.io

Primero se abre una conexión al socket de la siguiente manera:

    io.on('connection', function(socket){
        console.log("El cliente con IP: " + socket.handshake.address + " se ha conectado...");

    });

El método connection debe ser llamado, se encarga de recibir las conexiones de los clientes y detecta cada vez que algún cliente se conecte.

Luego se crea un middleware de express para cargar los html estáticos

    app.use(express.static('client'));//Método de express para cargar todos los html estáticos de la carpeta client

Después de creado el middleware, crea dentro de la carpeta client el index.html y el main.js.

Dentro del index.html se carga el script de la librería de socket y el src del main.js creado en esta misma carpeta de la siguiente manera:

    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <script src="main.js"></script>

Si esto se ejecuta, en la dirección del localhost aparecerá el título creado en el html con el h1