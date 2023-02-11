const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryElement = document.querySelector(".gallery");

let markup = '';

for (let image of images) {
  markup += `<li class="gallery__item"><img src="${image.url}" width = '400' alt="${image.alt}" class="gallery__image" /></li>`;
}

galleryElement.insertAdjacentHTML('afterbegin', markup);
galleryElement.style.display = 'flex';
galleryElement.style.flexWrap = 'column-reverse'
galleryElement.style.listStyle = 'none'
galleryElement.style.gap = '20px'
galleryElement.style.justifyContent = 'center'