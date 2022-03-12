const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000)



const images2 = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg'
];
let imageIndex2 = 0;
const imageElement2 = document.getElementById('second-slider-img');
setInterval(() => {
    if (imageIndex2 >= images2.length) {
        imageIndex2 = 0;
    }
    const imgUrl2 = images2[imageIndex2];
    // imageElement2.setAttribute('src', imgUrl2);
    imageIndex2++;
}, 1000)




const images3 = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
];
let imgIndex3 = 0;
const imgElement3 = document.getElementById('third-slider-img');
setInterval(() => {
    if (imgIndex3 >= images3.length) {
        imgIndex3 = 0;
    }
    const imageUrl3 = images3[imgIndex3];
    // imgElement3.setAttribute('src', imageUrl3);
    imgIndex3++;
}, 1000)