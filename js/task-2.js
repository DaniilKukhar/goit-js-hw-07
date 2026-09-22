const images = [
  { url: "./images/img1.png", alt: "Team brainstorming with sticky notes" },
  { url: "./images/img2.png", alt: "Hand holding a lightbulb" },
  { url: "./images/img3.png", alt: "Phone with a portfolio site and a drink" },
  { url: "./images/img4.png", alt: "Modern office meeting room" },
  { url: "./images/img5.png", alt: "Office lounge with a ping pong table" },
  { url: "./images/img6.png", alt: "Open-space office with employees working" },
];

const galleryList = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    ({ url, alt }) => `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" />
    </li>
  `,
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
