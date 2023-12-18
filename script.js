// Base URL = https://sophisticated-humane-dandelion.glitch.me

// 1. Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito po keturis eilutėje
// 2. Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.
// 3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1 ištrins pirmą įrašą).
// 4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi.

const API_URL = "https://sophisticated-humane-dandelion.glitch.me";
const cardsElement = document.querySelector(".cards");
const buttons = document.querySelectorAll("button");

const loadData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    printData(data);
    setupEventListeners();
  } catch (error) {
    console.error("Klaida kraunant duomenis:", error);
  }
};

const printData = (data) => {
  // Clean cards element
  cardsElement.innerHTML = "";

  // Creating new cards and appending them to the DOM
  data.forEach((x) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
      <img src=${x.image} alt="">
      <div class="card-content">
        <p class="pavadinimas">${x.title}</p>
        <h3 class="kaina">€${x.price}</h3>
        <button class="delete-btn">Ištrinti</button>
      </div>
    `;
    cardsElement.appendChild(newCard);
  });
};

const deleteCard = (index) => {
  // Removing the card with the specified index
  const cards = document.querySelectorAll(".card");
  cards[index].remove();
};

const setupEventListeners = () => {
  // Adding the click event listener to the cards container
  const cardsContainer = document.querySelector(".cards");

  cardsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      // Finding the clicked card and its index
      const card = event.target.closest(".card");
      const index = Array.from(card.parentElement.children).indexOf(card);

      // Removing the card from the DOM
      deleteCard(index);
    }
  });
};

// Initial load
loadData();




