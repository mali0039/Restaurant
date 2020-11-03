import {loadPage, mainContent} from "./mainpage.js"
import {loadNewsPage} from "./newspage.js"
import {loadContactPage} from "./contactpage.js"

loadPage();


function addListeners() {
    let tabs = document.querySelectorAll('a');
    let content = document.getElementById("content");
    tabs.forEach(item => {
        item.addEventListener('click', function() {
            if (item.textContent == "News") {
                content.textContent="";
                loadNewsPage();
                addListeners();
            }
            else if (item.textContent == "Home") {
                content.textContent="";
                loadPage();
                addListeners();
            }
            else if (item.textContent == "Contact") {
                content.textContent="";
                loadContactPage();
                addListeners();
            }
        })
    })
}
addListeners();