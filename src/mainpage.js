let mainContent = document.getElementById("content");

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
function loadPage() {

let nav = document.createElement('div');
nav.setAttribute('id', 'nav');
mainContent.appendChild(nav);

swapStyleSheet("index.css");


let sasIcon = document.createElement('img');
sasIcon.setAttribute('class', 'icon');
sasIcon.setAttribute('src', 'icon.png');

let brandText = document.createElement('span');
brandText.textContent = "Sasquatch Steak";

let icon = createTabs("","#");
icon.appendChild(brandText);
icon.appendChild(sasIcon);
icon.setAttribute('id', 'icon-title');
nav.appendChild(icon);
let home = createTabs("Home","#");
home.style.color="red";
nav.appendChild(home);
nav.appendChild(createTabs("News","#"));
nav.appendChild(createTabs("Contact","#"));
nav.appendChild(createTabs("Menu","menupage.html"));

let title = document.createElement('div');
title.setAttribute('id', 'title');


let titleText = document.createElement('h1');
titleText.setAttribute('id', 'main-text');
titleText.textContent = "UNLOCK YOUR INNER ";
let squatchText = document.createElement('span');
squatchText.setAttribute('id','squatch');
squatchText.textContent = "SQUATCH";
titleText.appendChild(squatchText);
title.appendChild(titleText);
mainContent.appendChild(title);

let sasImage = document.createElement('img');
sasImage.setAttribute('id','lobster');
sasImage.setAttribute('src', 'dish.png');

let orderText = document.createElement('h1');
orderText.setAttribute('id',"order-now");
orderText.textContent = "Order Now";

let orderLink = document.createElement('a');
orderLink.setAttribute('src', "#");
orderLink.setAttribute('id','order-link');

orderLink.appendChild(orderText);
title.appendChild(sasImage);
title.appendChild(orderLink);



function createTabs(name,link) {
    let tab = document.createElement('a');
    tab.textContent=name;
    tab.setAttribute('href',link);
    return tab;
}
}
export {loadPage, mainContent}