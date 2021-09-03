const backgroundImages = [
  "children.jpeg",
  "colors.jpeg",
  "colors2.jpeg",
  "star.jpeg",
  "sunflower.jpeg",
];

const chosenImage =
  backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
