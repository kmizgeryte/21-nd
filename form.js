const API_URL = "https://sophisticated-humane-dandelion.glitch.me";
const form = document.getElementById("myForm");
const imageInput = document.querySelector('input[name="image"]');
const titleInput = document.querySelector('input[name="title"]');
const priceInput = document.querySelector('input[name="price"]');

const loadData = async (image, title, price) => {
    try {
        const newItemData = { image, title, price };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItemData)
        });

        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await loadData(imageInput.value, titleInput.value, priceInput.value);
    form.reset(); // Išvalyti formą po sėkmingo išsiuntimo
});
