const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#0000FF", rgb: "0,0,255" },
  { hex: "#FFFF00", rgb: "255,255,0" },
  { hex: "#00FFFF", rgb: "0,255,255" },
  { hex: "#FF00FF", rgb: "255,0,255" },
  { hex: "#C0C0C0", rgb: "192,192,192" },
  { hex: "#808080", rgb: "128,128,128" },
  { hex: "#800000", rgb: "128,0,0" },
  { hex: "#808000", rgb: "128,128,0" },
  { hex: "#008000", rgb: "0,128,0" },
  { hex: "#800080", rgb: "128,0,128" },
  { hex: "#008080", rgb: "0,128,128" },
  { hex: "#000080", rgb: "0,0,128" },
];

const paletteContainer = document.querySelector(".js-palette");
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

paletteContainer.addEventListener("click", onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  const markup = colors
    .map(({ hex, rgb }) => {
      return `
      <div class="color-card">
      <div
      class="color-swatch"
      data-hex= "${hex}"
      data-rgb= "${rgb}"
      style="background-color: ${hex}">
       </div>
       <div class="color-meta">
           <p>HEX: ${hex}</p>
           <p>RGB: ${rgb}</p>
       </div>
      </div>
      `;
    })
    .join("");

  return markup;
}

function onPaletteContainerClick(e) {
  const isColorSwatchEl = e.target.classList.contains("color-swatch");
  if (!isColorSwatchEl) {
    return;
  }

  const currentActiveCard = document.querySelector(".color-card.is-active");

  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest(".color-card");

  parentColorCard.classList.add("is-active");

  document.body.style.backgroundColor = swatchEl.dataset.hex
}
