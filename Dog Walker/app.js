let services = document.querySelectorAll(".service");
let cartB = document.getElementById("cart");
let cartDiv = document.getElementById("cartDiv");
let shop = document.getElementById("shopcart")
let tg = document.getElementById("num");
let place = document.getElementById("place");
let clearB = document.getElementById("clear");
let id;
let number = document.getElementById("no");
let shopList = ["Pet Boarding", "House Sitting", "Dog Walking", "Doggy Daycare", "Pet Grooming", "Pet Taxi"];
let price = 0;
tg.innerHTML = price;

services.forEach(service => {
    service.addEventListener("click", function () {

        let dynam;
        let text;


        if (cartB.style.display = "none") {
            cartB.style.display = "initial";
        }
        id = event.srcElement.id;
        console.log(id);

        dynam = document.createElement("div");
        shop.appendChild(dynam);
        dynam.classList.add("items");


        switch (id) {
            case "board":
                text = document.createTextNode(shopList[0]);
                dynam.appendChild(text);
                price += 30;
                break;

            case "sitt":
                text = document.createTextNode(shopList[1]);
                dynam.appendChild(text);
                price += 50;
                break;

            case "walk":
                text = document.createTextNode(shopList[2]);
                dynam.appendChild(text);
                price += 30;
                break;

            case "day":
                text = document.createTextNode(shopList[3]);
                dynam.appendChild(text);
                price += 25;
                break;

            case "groom":
                text = document.createTextNode(shopList[4]);
                dynam.appendChild(text);
                price += 10;
                break;

            case "taxi":
                text = document.createTextNode(shopList[5]);
                dynam.appendChild(text);
                break;
        }
        tg.innerHTML = price;

        counter += 1;
    })
}
)


function buy() {
    cartDiv.style.display = "flex";
}

cartB.addEventListener("click", buy)

function clr() {
    cartDiv.style.display = "none";
    alert("We will contact you");
    while (shop.firstChild) {
        shop.removeChild(shop.firstChild);
    }
    price = 0;
    tg.innerHTML = price;
}

place.addEventListener("click", clr);

function clear() {
    while (shop.firstChild) {
        shop.removeChild(shop.firstChild);
    }
    price = 0;
    tg.innerHTML = price;
}

clearB.addEventListener("click", clear)