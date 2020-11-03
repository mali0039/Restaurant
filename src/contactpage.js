let mainContent = document.getElementById("content");
function createTabs(name,link) {
    let tab = document.createElement('a');
    tab.textContent=name;
    tab.setAttribute('href',link);
    return tab;
}
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
function loadContactPage() {


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
nav.appendChild(createTabs("Home","#"));
nav.appendChild(createTabs("News","#"));
let contact = createTabs("Contact","#");
contact.style.color = "red";
nav.appendChild(contact);
nav.appendChild(createTabs("Menu","menupage.html"));

let contactTitle = document.createElement('div');
contactTitle.setAttribute('id','contact-title');

let contactUs = document.createElement('h1');
contactUs.textContent = "Contact Us";
contactTitle.appendChild(contactUs);
mainContent.append(contactTitle);

let contactInfo = document.createElement('div');
contactInfo.setAttribute('id',"contact-info");
mainContent.appendChild(contactInfo);

let number = document.createElement('h2');
number.textContent = "Our Number: (404)-325-5182";
contactInfo.appendChild(number);

let email = document.createElement('h2');
email.textContent = "Email: sasquatchsteaks@squatch.com";
contactInfo.appendChild(email);

let contactForm = document.createElement('div');
contactForm.setAttribute('id','contact-form');
mainContent.appendChild(contactForm);

let p = document.createElement('p');
p.textContent="Get in touch with us online!";
contactForm.appendChild(p);

let form = document.createElement('form');
form.setAttribute('action','#');
contactForm.appendChild(form);
function createLabelAndInput(name,type) {
    let label = document.createElement('label');
    label.setAttribute('for',name );
    label.textContent=name +": ";

    let input = document.createElement('input');
    input.setAttribute('type',type);
    
    let br = document.createElement('br');

    return [label,input,br];
}
let firstInputandLabel = createLabelAndInput("Name", "text");
form.appendChild(firstInputandLabel[0]);
form.appendChild(firstInputandLabel[1]);
form.appendChild(firstInputandLabel[2]);

let secondInputandLabel = createLabelAndInput("Number", "text");
form.appendChild(secondInputandLabel[0]);
form.appendChild(secondInputandLabel[1]);
form.appendChild(secondInputandLabel[2]);

let thirdInputandLabel = createLabelAndInput("Email", "text");
form.appendChild(thirdInputandLabel[0]);
form.appendChild(thirdInputandLabel[1]);
form.appendChild(thirdInputandLabel[2]);

let fourthInputandLabel = createLabelAndInput("Additional Information", "text");
form.appendChild(fourthInputandLabel[0]);
form.appendChild(fourthInputandLabel[1]);
form.appendChild(fourthInputandLabel[2]);

let submitButton = document.createElement('button');
submitButton.textContent = "Submit";
form.appendChild(submitButton);

form.appendChild(document.createElement('br'));
}
export {loadContactPage}