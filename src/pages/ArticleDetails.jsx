// ArticleDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClickCounter from "../components/ClickCounter";

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Hacer una solicitud al servidor JSON usando el 'id' de la URL
    fetch(`http://localhost:3000/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Agregar esta línea para verificar los datos
      setArticle(data);
    })
    .catch((error) => {
      console.error("Error al obtener los detalles del artículo:", error);
    });
  }, [id]);

  const updateServer = (newCount) => {
    // Define la URL correcta para actualizar la cantidad del artículo específico
    const serverUrl = `http://localhost:3000/articles/${article.id}`;
  
    // Define los datos que deseas enviar al servidor.
    const data = { ...article, quantity: newCount };
  
    // Realiza una solicitud PUT al servidor JSON para actualizar el valor.
    fetch(serverUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Cantidad actualizada en el servidor');
        } else {
          console.error('Error al actualizar la cantidad en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  };

  return (
    <div>
      {article ? (
        <>
          <h2>Detalles del Artículo</h2>
          <img src={`/images/${article.image}`} alt={article.title} />
          <p>Título: {article.title}</p>
          <p>Descripción: {article.description}</p>
          <p>Cantidad</p>
          <ClickCounter initialCount={article.quantity} onUpdate={updateServer} />
          <p>Precio: {article.price}€</p>
          
        </>
      ) : (
        <p>Cargando detalles del artículo...</p>
      )}
    </div>
  );
}

export default ArticleDetails;
