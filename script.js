let currentImageIndex = 0;
const images = [
    'images/gimage1.webp',
    'images/gimage2.webp',
    // Añade más rutas de imágenes según sea necesario
];

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.querySelector('.gallery-image').src = images[currentImageIndex];
}