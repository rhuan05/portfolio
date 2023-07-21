let languages_list = document.querySelector('.languages_list');

let languages_list_li_qtds = (languages_list.childNodes.length - 1) / 2;
languages_list.style.height = `${languages_list_li_qtds * 50}px`;

languages_list.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('open_options_languages');
});


//Mudar o idioma da página
let h1Portuguese = 'Olá';
let h2Portuguese = 'Meu nome é';
let h3Portuguese = 'e eu sou um dev fullstack :)';

let sobreBtnPortugues = 'sobre mim';
let projetosBtnPortugues = 'meus projetos';
let contatoBtnPortugues = 'contato';

document.querySelector('.portuguese').addEventListener('click', changeForPortuguese);

function changeForPortuguese(){
    document.querySelector('h1').innerHTML = h1Portuguese;
    document.querySelector('.apresentationH2').innerHTML = h2Portuguese;
    document.querySelector('h3').innerHTML = h3Portuguese;

    document.querySelector('#aboutMe_btn').innerHTML = sobreBtnPortugues;
    document.querySelector('#myProjects_btn').innerHTML = projetosBtnPortugues;
    document.querySelector('#contacts').innerHTML = contatoBtnPortugues;
};

let h1English = 'Hi';
let h2English = 'My name is';
let h3English = "and i'm a fullstack developer.";

let sobreBtnEnglish = 'about me';
let projetosBtnEnglish = 'my projects';
let contatoBtnEnglish = 'contact';

document.querySelector('.english').addEventListener('click', changeForEnglish);

function changeForEnglish(){
    document.querySelector('h1').innerHTML = h1English;
    document.querySelector('.apresentationH2').innerHTML = h2English;
    document.querySelector('h3').innerHTML = h3English;

    document.querySelector('#aboutMe_btn').innerHTML = sobreBtnEnglish;
    document.querySelector('#myProjects_btn').innerHTML = projetosBtnEnglish;
    document.querySelector('#contacts').innerHTML = contatoBtnEnglish;
};


//Funcionalidade do cursor acompanhar o mouse
let cursorCircle = document.querySelector('.cursorCircle');

document.addEventListener('mousemove', (e)=>{
    cursorCircle.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});

//Sobre mim
let aboutMe_btn = document.querySelector('#aboutMe_btn');

aboutMe_btn.addEventListener('click', ()=>{
    document.querySelector('.main__aboutme').style.top = '0vh'

    setTimeout(()=>{
        document.querySelector('.sobremim__title').style.transform = 'translateX(0px)';
    }, 1000);
});

document.querySelector('.x_iconaboutme').addEventListener('click', ()=>{
    document.querySelector('.main__aboutme').style.top = '100vh'
    document.querySelector('.sobremim__title').style.transform = 'translateX(-200px)'
});

//Meus projetos
let myProjects_btn = document.querySelector('#myProjects_btn');

myProjects_btn.addEventListener('click', ()=>{
    document.querySelector('.main__myProjects').style.top = '0vh'

    setTimeout(()=>{
        document.querySelector('.myProjects__title').style.transform = 'translateX(0px)';
    }, 1000);
});

document.querySelector('.x_iconmyprojects').addEventListener('click', ()=>{
    document.querySelector('.main__myProjects').style.top = '100vh'
    document.querySelector('.myProjects__title').style.transform = 'translateX(-200px)'
});

//Contato
let contacts = document.querySelector('#contacts');

contacts.addEventListener('click', ()=>{
    document.querySelector('.main__contact').style.top = '0vh'

    setTimeout(()=>{
        document.querySelector('.contact__title').style.transform = 'translateX(0px)';
    }, 1000);
});

let main__contact = document.querySelector('.main__contact');

if(main__contact.style.top == '0vh'){
    setTimeout(()=>{
        document.querySelector('.contact__title').style.transform = 'translateX(0px)';
    }, 1000);
};


document.querySelector('.x_iconcontact').addEventListener('click', ()=>{
    document.querySelector('.main__contact').style.top = '100vh'
    document.querySelector('.contact__title').style.transform = 'translateX(-200px)'
});