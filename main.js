// API => aplication programing interface
const wrapper = document.querySelector(".ota");
const form = document.querySelector("#form");
const inp = document.querySelector("#input");
const btn = document.querySelector(".btn");

let sorovKeldi = []; // Global o'zgaruvchi

// Foydalanuvchilarni API'dan olish
fetch("https://jsonplaceholder.typicode.com/users")
  .then(sorov => sorov.json())
  .then(data => {
    sorovKeldi = data;
    renderUser(sorovKeldi);
  });

function renderUser(users) {
  wrapper.innerHTML = ""; // Ichini tozalaymiz
  users.forEach(objektlar => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h1>Name: ${objektlar.name}</h1>
      <h2>Username: ${objektlar.username}</h2>
      <h5>Address: ${objektlar.address.street}</h5>
      <span>Email: ${objektlar.email}</span>
    `;
    li.className = "li1";
    wrapper.appendChild(li);
  });
}

// Qidiruv funksiyasi
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputQiymati = inp.value.toLowerCase();
  const filter = sorovKeldi.filter(bola => bola.name.toLowerCase().includes(inputQiymati));
  renderUser(filter);
  inp.value = "";
});

// 🌙 Dark Mode tugmasi
btn.addEventListener("click", function () {
    document.body.classList.toggle("addcolor");

    
    if (document.body.classList.contains("addcolor")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("addcolor");
}












