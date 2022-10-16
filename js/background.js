const iamges = ["0.jpeg", "1.jpg", "2.jpg", "3.jpeg", "4.webp"];

const chosenImage = iamges[Math.floor(Math.random() * iamges.length)];

const bgImage = document.createElement("img");

const wrapEl = document.querySelector("#wrap");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage);
