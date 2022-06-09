const arrayDetail = [
    {
        firstname: "Max",
        lastname: "Laadvermogen",
        age: "23",
        birthplace: "Zoetermeer",
        img: "stock.jpg"
    },
    {
        firstname: "Timo",
        lastname: "Bijl",
        age: "18",
        birthplace: "Den Haag",
        img: "stock.jpg"
    },
    {
        firstname: "Bennie",
        lastname: "Lekker",
        age: "34",
        birthplace: "Rotterdam",
        img: "stock.jpg"
    },
    {
        firstname: "Kees",
        lastname: "Duinen",
        age: "25",
        birthplace: "Den Haag",
        img: "stock.jpg"
    },
    {
        firstname: "Jan",
        lastname: "Zorgvliet",
        age: "27",
        birthplace: "Amsterdam",
        img: "stock.jpg"
    }
];

let sectionData = document.querySelector('.array');
console.log(arrayDetail);
for(let i = 0; arrayDetail.length; i++) {
    sectionData.innerHTML += `
    <div class="card">
    <img src="img/${arrayDetail[i].img}" alt="cardfoto" style="width: 100%;">
    <div class="container">
        <h4>${arrayDetail[i].firstname}</h4>
        <h4>${arrayDetail[i].lastname}</h4>
        <p>${arrayDetail[i].age}</p>
        <p>${arrayDetail[i].birthplace}</p>
    </div>
</div>
    `
};
