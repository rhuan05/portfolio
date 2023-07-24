let portuguese = 'portuguese'
let english = 'english'

//Português
let h1Portuguese = 'Olá';
let h2Portuguese = 'Meu nome é';
let h3Portuguese = 'e eu sou um dev fullstack :)';

let sobreBtnPortugues = 'sobre mim';
let projetosBtnPortugues = 'meus projetos';
let contatoBtnPortugues = 'contato';

//Inglês
let h1English = 'Hi';
let h2English = 'My name is';
let h3English = "and i'm a fullstack developer.";

let sobreBtnEnglish = 'about me';
let projetosBtnEnglish = 'my projects';
let contatoBtnEnglish = 'contact';

if(localStorage.getItem('language')){
    let languageSite = localStorage.getItem('language');
    
    if(languageSite == 'portuguese'){
        changeForPortuguese();
    }
    
    if(languageSite == 'portuguese'){
        changeForPortuguese();
    }
}

let languages_list = document.querySelector('.languages_list');

let languages_list_li_qtds = (languages_list.childNodes.length - 1) / 2;
languages_list.style.height = `${languages_list_li_qtds * 50}px`;

languages_list.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('open_options_languages');
});


//Mudar o idioma da página

document.querySelector('.portuguese').addEventListener('click', changeForPortuguese);

function changeForPortuguese(){
    language = localStorage.setItem('language', portuguese);
    document.querySelector('h1').innerHTML = h1Portuguese;
    document.querySelector('.apresentationH2').innerHTML = h2Portuguese;
    document.querySelector('h3').innerHTML = h3Portuguese;

    document.querySelector('#aboutMe_btn').innerHTML = sobreBtnPortugues;
    document.querySelector('#myProjects_btn').innerHTML = projetosBtnPortugues;
    document.querySelector('#contacts').innerHTML = contatoBtnPortugues;
    document.querySelector('.contact__title').innerHTML = contatoBtnPortugues.replace('c', 'C');
    document.querySelector('#nome').placeholder = 'Seu nome';
    document.querySelector('#email').placeholder = 'Seu e-mail';
    document.querySelector('#text__area').placeholder = 'Mensagem';
    document.querySelector('.btnEnviar').innerHTML = 'Enviar';
    if(document.querySelector('.campo__erro_contato')){
        document.querySelector('.campo__erro_contato').innerHTML = 'Preencha todos os campos';
    }
    document.querySelector('#h1_ebook_project').innerHTML = 'Página de vendas para lançamento';
    document.querySelector('#p1_about_ebook_project').innerHTML = 'Essa página foi criada com o objetivo de promover um e-book. Onde aconteceria uma campanha, rodando tráfego pago no Facebook ADS apontando para essa página.';
    document.querySelector('#p2_tech_ebook_project').innerHTML = 'Tecnologias usadas: HTML, CSS e JavaScript';
    
    document.querySelector('#h1_eccomerce_project').innerHTML = 'E-commerce com paínel de admin';
    document.querySelector('#p1_about_ecomerce_project').innerHTML = 'Um e-commerce onde o proprietário da loja (jf-construções) consegue criar promoções, produtos e adicionar novidades da loja pelo banner principal.';
    document.querySelector('#p2_tech_ecommerce_project').innerHTML = 'Tecnologias usadas: HTML, CSS, JavaScript, NodeJS, MongoDB e Cloudinary (que não é uma tecnologia mas foi usado para o armazenamento de imagens na nuvem).';
    
    document.querySelector('#h1_chat_project').innerHTML = 'Chat interativo';
    document.querySelector('#p1_about_chat_project').innerHTML = 'Um chat (igual ao whatsapp mesmo!) que facilita a conversa em tempo real entre duas ou mais pessoas.';
    document.querySelector('#p2_tech_chat_project').innerHTML = 'Tecnologias usadas: HTML, CSS, JavaScript, NodeJS e Socket.io';
};

document.querySelector('.english').addEventListener('click', changeForEnglish);

function changeForEnglish(){
    language = localStorage.setItem('language', english);
    document.querySelector('h1').innerHTML = h1English;
    document.querySelector('.apresentationH2').innerHTML = h2English;
    document.querySelector('h3').innerHTML = h3English;
    
    document.querySelector('#aboutMe_btn').innerHTML = sobreBtnEnglish;
    document.querySelector('#myProjects_btn').innerHTML = projetosBtnEnglish;
    document.querySelector('#contacts').innerHTML = contatoBtnEnglish;
    document.querySelector('.contact__title').innerHTML = contatoBtnEnglish.replace('c', 'C');
    document.querySelector('#nome').placeholder = 'Your name';
    document.querySelector('#email').placeholder = 'Your e-mail';
    document.querySelector('#text__area').placeholder = 'Message';
    document.querySelector('.btnEnviar').innerHTML = 'Send';
    if(document.querySelector('.campo__erro_contato')){
        document.querySelector('.campo__erro_contato').innerHTML = 'Fill in all fields';
    }
    document.querySelector('#h1_ebook_project').innerHTML = 'Launch sales page';
    document.querySelector('#p1_about_ebook_project').innerHTML = 'This page was created with the aim of promoting an e-book. Where a campaign would take place, running paid traffic on Facebook ADS pointing to that page.';
    document.querySelector('#p2_tech_ebook_project').innerHTML = 'Technologies used: HTML, CSS and JavaScript';
    
    document.querySelector('#h1_eccomerce_project').innerHTML = 'E-commerce with admin panel';
    document.querySelector('#p1_about_ecomerce_project').innerHTML = 'An e-commerce where the store owner (jf-construções) can create promotions, products and add store news through the main banner.';
    document.querySelector('#p2_tech_ecommerce_project').innerHTML = 'Technologies used: HTML, CSS, JavaScript, NodeJS, MongoDB and Cloudinary (which is not a technology but was used for storing images in the cloud).';
    
    document.querySelector('#h1_chat_project').innerHTML = 'Interactive chat';
    document.querySelector('#p1_about_chat_project').innerHTML = 'A chat (just like whatsapp!) that facilitates real-time conversation between two or more people.';
    document.querySelector('#p2_tech_chat_project').innerHTML = 'Technologies used: HTML, CSS, JavaScript, NodeJS and Socket.io';
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