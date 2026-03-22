// ====================== SEARCH FUNCTION ======================
const searchInput = document.querySelector(".search_bar");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    boxes.forEach(box => {
        let title = box.querySelector("h2").innerText.toLowerCase();

        if (title.includes(value)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});

// ====================== CART FUNCTION ======================
let cartCount = 0;

const cartIcon = document.getElementById("cart_icon");

// create cart counter UI
const cartText = document.querySelector(".cart_text");
const counter = document.createElement("span");
counter.style.marginLeft = "5px";
counter.style.fontWeight = "bold";
cartText.appendChild(counter);

// load from localStorage
if(localStorage.getItem("cart")){
    cartCount = parseInt(localStorage.getItem("cart"));
    counter.innerText = cartCount;
}

// click any box = add to cart
boxes.forEach(box => {
    box.addEventListener("click", () => {
        cartCount++;
        counter.innerText = cartCount;
        localStorage.setItem("cart", cartCount);
    });
});

// ====================== BACK TO TOP ======================
const backToTop = document.querySelector(".foot_panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ====================== MENU TOGGLE ======================
const menu = document.getElementById("menu");
const navBar = document.querySelector(".bar");

menu.addEventListener("click", () => {
    navBar.classList.toggle("active");
});

// ====================== RESPONSIVE FIX ======================
function handleResize() {
    if (window.innerWidth < 768) {
        document.querySelector(".search_bar").style.width = "150px";
    } else {
        document.querySelector(".search_bar").style.width = "950px";
    }
}

window.addEventListener("resize", handleResize);
handleResize();

// ====================== CLICK ALERT (DEMO AMAZON FEEL) ======================
document.querySelectorAll(".box p").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Product page coming soon 🚀");
    });
});