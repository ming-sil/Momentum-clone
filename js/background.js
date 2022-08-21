const iamges = [
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://static.vecteezy.com/system/resources/previews/001/271/648/large_2x/purple-prism-3d-illustration-free-photo.jpg",
  "https://www.nsbpictures.com/wp-content/uploads/2020/04/sunset-hd-background-photos-12-scaled.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg",
  "https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);
