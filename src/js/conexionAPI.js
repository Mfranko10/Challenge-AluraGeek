async function videosAPI() {
    const conexion = await fetch('https://6702cc69bd7c8c1ccd3fe24b.mockapi.io/api/v1/productos/app');
    const videos = await conexion.json();
    return videos;
}

async function enviarVideo(descripcion, imagen, precio) {
    const conexion = await fetch('https://6702cc69bd7c8c1ccd3fe24b.mockapi.io/api/v1/productos/app', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            descripcion:descripcion,
            imagen:imagen,
            precio:`$ ${precio}`
        })
    });
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function eliminarVideo(id) {
    await fetch(`https://6702cc69bd7c8c1ccd3fe24b.mockapi.io/api/v1/productos/app/${id}`, {
        method: 'DELETE'
    });
    
    location.reload();

    listarVideo();
}

export const conexionAPI = {
    videosAPI,
    enviarVideo,
    eliminarVideo
}