function createTabs(name,link) {
    let tab = document.createElement('a');
    tab.textContent=name;
    tab.setAttribute('href',link);
    return tab;
}
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
function loadNewsPage() {
    swapStyleSheet("new.css");
    let mainContent = document.getElementById("content");

    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    mainContent.appendChild(nav);
    
    
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
    nav.appendChild(createTabs("Home","#"));
    let news = createTabs("News","#");
    news.style.color = "red";
    nav.appendChild(news);
    nav.appendChild(createTabs("Contact","#"));
    nav.appendChild(createTabs("Menu","menupage.html"));
    
   
    let newsTitle = document.createElement('div');
    newsTitle.setAttribute('id','news-title');
    mainContent.appendChild(newsTitle);
    let title = document.createElement('h1');
    title.textContent = "Winter is Here!";

    let yeti = document.createElement('img');
    yeti.setAttribute('src', "abominable.gif");
    newsTitle.appendChild(yeti);
    newsTitle.appendChild(title);

    let items = document.createElement('div');
    items.setAttribute('id', 'items');
    
    function createSquare(h2Text, imgSrc, pText) {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.textContent = h2Text;
        div.appendChild(h2);

        let img = document.createElement('img');
        img.setAttribute('src', imgSrc);
        div.appendChild(img);

        let p = document.createElement('p');
        p.textContent = pText;
        div.appendChild(p);

        return div;
    }
    items.appendChild(createSquare("New Chilled Drinks","lemonade.jpg","Enjoy a cold lemonade alongside our new appetizers."));
    items.appendChild(createSquare("Winter Pecan Pie Returns!", "pie.jpeg","Our signature pecan pie returns! Get it while supplies last!"));
    items.appendChild(createSquare("Improved Grilled Steak","steak.jpg","We improved our classic steak formula! New seasons. New spices. Same Squatch!"));
    items.appendChild(createSquare("Hot Pot Roast","potroast.jpg","Warm up with a nice warm pot roast! Served alongside potatoes, carrots, sausage, and spices!"));
    mainContent.appendChild(items);
}
export {loadNewsPage}