import React, { useState } from 'react';

function ImageUploadForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedImage);

    // Llamar a la función que envía la imagen a la API
    // Ejemplo: uploadImage(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Subir Imagen</button>
    </form>
  );
}

export default ImageUploadForm;


const uploadImage = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/articles', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Imagen subida exitosamente');
        // Realizar acciones adicionales después de subir la imagen
      } else {
        console.error('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
 
  
  