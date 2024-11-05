import { useState } from "react";

const images = [
    'https://img.freepik.com/free-photo/summer-composition-with-variety-fruits_23-2147636463.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/fruits-glass-with-cocktail-straw_23-2148107984.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/tourist-sitting-phu-sub-lek-viewpoint-sunset-lopburi-thailand_335224-1390.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/top-view-fresh-greens-isolated-inside-plate-along-with-green-bell-peppers-spicy-peppers-bright-blue-desk-green-leaf-product-food-meal-vegetable_140725-34283.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/fruits-glass-with-cocktail-straw_23-2148107984.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/summer-composition-with-variety-fruits_23-2147636463.jpg?ga=GA1.1.1939296899.1730263064&semt=ais_hybrid',
    
];

const Gallery = () => {

    const [image, setImage] = useState(null);

    const openmodal = (image) => {
        setImage(image);
    }

    const closeModal = () => {
        setImage(null);
    }

  return (
    <>
     <div className="gallery">
        {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index}`} className='gallery-image' onClick={() => openmodal(image)} />
        ))}
     </div>

     {image && (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={image} alt="image-1" className="modal-image" />
                <button className="close-button" onClick={closeModal}>X</button>
            </div>
        </div>
     )}
    </>
  )
}

export default Gallery;
