import React, { useState } from 'react';

const Formulario = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result); // Almacena la imagen como Base64
      };
      reader.readAsDataURL(file); // Lee el archivo como Base64
    }

    setSelectedImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedImage) {
      console.error('Debes seleccionar una imagen');
      return;
    }

    // Ahora puedes usar "base64Image" en lugar del archivo binario seleccionado

    const formData = new FormData();
    formData.append('image', selectedImage);

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
      console.error('Error al subir la imagen', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Subir Imagen</button>
      </form>
      {base64Image && (
        <div>
          <p>Imagen seleccionada en Base64:</p>
          <img src={base64Image} alt="Imagen seleccionada" />
        </div>
      )}
    </div>
  );
};

export default Formulario;