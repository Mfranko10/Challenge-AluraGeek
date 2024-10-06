import { conexionAPI } from "./conexionAPI.js";

const form = document.querySelector("#form");

async function crearVideo(event) {
  event.preventDefault();
  const descripcion = document.querySelector("#descripcion").value;
  const precio = document.querySelector("#precio").value;
  const imagen = document.querySelector("#imagen").value;

  await conexionAPI.enviarVideo(descripcion, imagen, precio);
  
  location.reload();
}

form.addEventListener("submit", (event) => crearVideo(event));
