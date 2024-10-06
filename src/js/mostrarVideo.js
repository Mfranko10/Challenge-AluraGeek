import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("#products-container__grid");

function crearCard(descripcion, precio, imagen, id) {
  const video = document.createElement("li");
  video.className = "product__card-container center";
  video.innerHTML = `<div class="product-card center">
              <img src="${imagen}" alt="Imagen del producto" class="product-img" />
              <p class="product-description">${descripcion}</p>
              <div class="product-footer-card center">
                <p class="product-price">${precio}</p>
                <img
                  src="./src/img/trash.svg"
                  alt="Logo de basura"
                  class="product-trash-logo delete-btn"
                  data-id="${id}"
                />
              </div>
            </div>
    `;
    const deleteButton = video.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => conexionAPI.eliminarVideo(id));
  return video;
}

async function listarVideo() {
  const listaAPI = await conexionAPI.videosAPI();

  listaAPI.forEach((producto) => {
    lista.appendChild(
      crearCard(producto.descripcion, producto.precio, producto.imagen, producto.id)
    );
  });
}

listarVideo();
