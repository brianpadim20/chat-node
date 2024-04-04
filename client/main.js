var socket = io.connect('http://192.168.0.103:6677', {'forceNew':true})//Inicia la conexión 
/*En lugar de la ip del equipo, se podría usar el localhost, pero limitaría sus funciones, no se podría usar en otro telefono*/

socket.on('messages', function(data){//Mensajes de inicio
    console.log(data);//data hace referencia a la variable messages creada en index.js
    render(data)

});

function render(data){//Método que permite recorrer lo que hay en el array data y mostrar o hacer otra cosa
    var html = data.map(function(message, index){//Itera los elementos del array data, guarda el contenido de cada indice en la variable mensaje y el indice en index
        return(`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>

        `);

    }).join(' ');

    document.getElementById('messages').innerHTML = html;   

}