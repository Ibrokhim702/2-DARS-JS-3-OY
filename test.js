
// const ul = document.querySelector(".ota");
// const form = document.querySelector("#form");
// const btn = document.querySelector(".btn");
// const input = document.querySelector("#input");

// let data = [];

// function renderKiyim(kiyimlar) {
//     if (kiyimlar.length === 0) {
//         ul.innerHTML = `<span style="color:red;">Siz yozgan user topilmadi!</span>`;
//     }
//     kiyimlar.forEach((product) => {
//         const li = document.createElement("li");
     
//         li.className = "li1";
//         ul.appendChild(li);
//     });
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => {
//         data = json;
//         renderKiyim(data);
//     });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const inpQiymat = input.value.trim().toLowerCase(); // Trim probellarni yo'q qiladi
//     const filter = data.filter((objectlar) => {
//         return objectlar.name.toLowerCase().includes(inpQiymat); // To'g'ri yozilishi
//     });
//     renderKiyim(filter);
// });


// API => aplication programing interface

// const wrapper = document.querySelector(".ota")

// fetch("https://jsonplaceholder.typicode.com/users")

// .then(sorov => sorov.json())
// .then(sorovKeldi => {
//     sorovKeldi.map(objektlar => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//         <h1>${objektlar.name}</h1>
//         <h2>${objektlar.username}</h2>



        
        
//         `

//         wrapper.appendChild(li )



//     });
    
// })

// .finally(bot => console.log("bot"))
// .catch(error => console.log("Xato")) 