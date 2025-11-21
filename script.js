// ===== IMAGE SLIDER =====
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Auto slide
setInterval(() => {
    plusSlides(1);
}, 3000);


// ===== CART FUNCTIONALITY =====

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price, img) {
    cart.push({ productName, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}

function loadCart() {
    let cartDiv = document.getElementById("cartItems");

    cart.forEach(item => {
        cartDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <h3>${item.productName}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });
}


// ===== DARK MODE =====

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    let status = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", status);
}

window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }
}
