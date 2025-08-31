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

if (localStorage.getItem('language')){
    let languageSite = localStorage.getItem('language');
    
    if(languageSite == 'portuguese'){
        changeForPortuguese();
    }
    
    if(languageSite == 'english'){
        changeForEnglish();
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
    if(document.querySelector('.email_enviado')){
        document.querySelector('.email_enviado').innerHTML = 'E-mail enviado com sucesso!';
    }
    document.querySelector('#p1_about_quizQuest_project').innerHTML = 'Um Duolingo para programadores, onde temos 10 perguntas sobre os principais conceitos de JavaScript. Cada pergunta com sua explicação e ao final, um feedback instantâneo e personalizado.';
    document.querySelector('#p2_tech_quizQuest_project').innerHTML = 'Tecnologias usadas: ReactJS, NodeJS, SQL';

    document.querySelector('#p1_about_ebook_project').innerHTML = 'Essa página foi criada com o objetivo de promover um e-book. Onde aconteceria uma campanha, rodando tráfego pago no Facebook ADS apontando para essa página.';
    document.querySelector('#p2_tech_ebook_project').innerHTML = 'Tecnologias usadas: HTML, CSS e JavaScript';
    
    document.querySelector('#p1_about_ecomerce_project').innerHTML = 'Um e-commerce onde o proprietário da loja (jf-construções) consegue criar promoções, produtos e adicionar novidades da loja pelo banner principal.';
    document.querySelector('#p2_tech_ecommerce_project').innerHTML = 'Tecnologias usadas: HTML, CSS, JavaScript, NodeJS, MongoDB e Cloudinary (que não é uma tecnologia mas foi usado para o armazenamento de imagens na nuvem).';
    
    document.querySelector('#p1_about_chat_project').innerHTML = 'Um chat (igual ao whatsapp mesmo!) que facilita a conversa em tempo real entre duas ou mais pessoas.';
    document.querySelector('#p2_tech_chat_project').innerHTML = 'Tecnologias usadas: HTML, CSS, JavaScript, NodeJS e Socket.io';
    
    document.querySelector('.myProjects__title').innerHTML = 'Meus projetos';
    document.querySelector('.sobremim__title').innerHTML = 'Sobre mim';
    document.querySelector('.aboutme__text').innerHTML = "Meu nome é Rhuan Firmino, desenvolvo sistemas desde 2021.<br><br>Quando tinha 16 anos me interessei por tecnologia e pelo que eu poderia construir com ela. Desde 2021 passei a desenvolver sistemas.<br><br>Em 2023 comecei a atual profissionalmente como programador fullstack na Sinqia, que hoje se tornou Evertec Brasil. Na Evertec atuei em diversos projetos pra um sistema full banking, com clientes grandes clientes como: Santander, Itaú, Bank of America, Banco Votorantim, Deutsche Bank entre outras grandes instituições financeiras que atuam no Brasil.<br><br>Na Evertec atuo em diversos importantes projetos, onde é necessário atuar com:<br><br>- Transformação de requisitos de negócio em código;<br>- Suporte/Acompanhamento na implantação de novas funcionalidades ao ambiente do cliente - on premisse/saas;<br>- Integração entre sistemas;<br>- Filas;<br>- Testes unitários;<br>- Desenvolvimento de novas funcionalidades;<br>- Aceleração no desenvolvimento através da IA;<br><br>Na Evertec, usando como principais ferramentas: .Net (Core/Framework), C#, ASP.NET, APSX, AngularJS, TypeScript, RabbitMQ, Kafka, SQL Server, Oracle SQL, Jenkins, TFS, GIT, GitHub Copilot. ";
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
    document.querySelector('#p1_about_quizQuest_project').innerHTML = 'A Duolingo for programmers, featuring 10 questions about key JavaScript concepts. Each question comes with its own explanation, and at the end, you receive instant and personalized feedback.';
    document.querySelector('#p2_tech_quizQuest_project').innerHTML = 'Technologies used: ReactJS, NodeJS, SQL';

    document.querySelector('#p1_about_ebook_project').innerHTML = 'This page was created with the aim of promoting an e-book. Where a campaign would take place, running paid traffic on Facebook ADS pointing to that page.';
    document.querySelector('#p2_tech_ebook_project').innerHTML = 'Technologies used: HTML, CSS and JavaScript';
    
    document.querySelector('#p1_about_ecomerce_project').innerHTML = 'An e-commerce where the store owner (jf-construções) can create promotions, products and add store news through the main banner.';
    document.querySelector('#p2_tech_ecommerce_project').innerHTML = 'Technologies used: HTML, CSS, JavaScript, NodeJS, MongoDB and Cloudinary (which is not a technology but was used for storing images in the cloud).';
    
    document.querySelector('#p1_about_chat_project').innerHTML = 'A chat (just like whatsapp!) that facilitates real-time conversation between two or more people.';
    document.querySelector('#p2_tech_chat_project').innerHTML = 'Technologies used: HTML, CSS, JavaScript, NodeJS and Socket.io';

    document.querySelector('.sobremim__title').innerHTML = 'About me';
    document.querySelector('.myProjects__title').innerHTML = 'My projects';
    document.querySelector('.aboutme__text').innerHTML = "My name is Rhuan Firmino, and I have been developing systems since 2021.<br><br>When I was 16, I became interested in technology and what I could build with it. Since 2021, I have been developing systems.<br><br>In 2023, I started working professionally as a fullstack developer at Sinqia, which is now Evertec Brasil. At Evertec, I participated in several projects for a full banking system, with major clients such as Santander, Itaú, Bank of America, Banco Votorantim, Deutsche Bank, among other large financial institutions operating in Brazil.<br><br>At Evertec, I led several important projects, where it was necessary to work with:<br><br>- Transforming business requirements into code;<br><br>- Support/monitoring the deployment of new features to the client's environment - on-premise/saas;<br><br>- System integration;<br><br>- Queues;<br><br>- Unit testing;<br><br>- Development of new features;<br><br>- Accelerating development through AI;<br><br>At Evertec, my main tools are: .Net (Core/Framework), C#, ASP.NET, APSX, AngularJS, TypeScript, RabbitMQ, Kafka, SQL Server, Oracle SQL, Jenkins, TFS, GIT, GitHub Copilot.";
};


//Funcionalidade do cursor acompanhar o mouse
let cursorCircle = document.querySelector('.cursorCircle');
let x_iconaboutme = document.querySelector('.x_iconaboutme');

document.addEventListener('mousemove', (e)=>{
    cursorCircle.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});

//Sobre mim
let aboutMe_btn = document.querySelector('#aboutMe_btn');

aboutMe_btn.addEventListener('click', ()=>{
    document.querySelector('.main__aboutme').style.top = '0vh';
    document.querySelector('.cursorCircle').style.background = 'black';
    document.querySelector('.cursorCircle').style.zIndex = '1';
    document.querySelectorAll('.icon_media').forEach(e=>{
        e.style.zIndex = '2';
    });
    
    setTimeout(()=>{
        document.querySelector('.sobremim__title').style.transform = 'translateX(0px)';
    }, 1000);
});

document.querySelector('.x_iconaboutme').addEventListener('click', ()=>{
    document.querySelector('.main__aboutme').style.top = '100vh';
    document.querySelector('.sobremim__title').style.transform = 'translateX(-200px)';
    document.querySelector('.cursorCircle').style.background = 'white';
    document.querySelector('.cursorCircle').style.zIndex = '-1';
});

//Meus projetos
let myProjects_btn = document.querySelector('#myProjects_btn');

myProjects_btn.addEventListener('click', ()=>{
    document.querySelector('.main__myProjects').style.top = '0vh';
    document.querySelector('.cursorCircle').style.background = 'black';
    document.querySelector('.cursorCircle').style.zIndex = '1';

    setTimeout(()=>{
        document.querySelector('.myProjects__title').style.transform = 'translateX(0px)';
    }, 1000);
});

document.querySelector('.x_iconmyprojects').addEventListener('click', ()=>{
    document.querySelector('.main__myProjects').style.top = '100vh';
    document.querySelector('.myProjects__title').style.transform = 'translateX(-200px)';
    document.querySelector('.cursorCircle').style.background = 'white';
    document.querySelector('.cursorCircle').style.zIndex = '-1';
});

//Contato
let contacts = document.querySelector('#contacts');

contacts.addEventListener('click', ()=>{
    document.querySelector('.main__contact').style.top = '0vh';
    document.querySelector('.cursorCircle').style.background = 'black';
    document.querySelector('.cursorCircle').style.zIndex = '1';

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
    document.querySelector('.main__contact').style.top = '100vh';
    document.querySelector('.contact__title').style.transform = 'translateX(-200px)';
    document.querySelector('.cursorCircle').style.background = 'white';
    document.querySelector('.cursorCircle').style.zIndex = '-1';
});

//Scroll in phone
let arrow_right = document.querySelector('#arrow_right');
let sroll_for_phone = document.querySelector('.sroll_for_phone');
let marginDefault = 0;

arrow_right.addEventListener('click', ()=>{
    if(marginDefault !== -300){
        marginDefault = marginDefault - 100;
        sroll_for_phone.style.marginLeft = `${marginDefault}%`;
    }else{
        marginDefault = 0;
        sroll_for_phone.style.marginLeft = `${marginDefault}%`;
    }
});

let arrow_left = document.querySelector('#arrow_left');

arrow_left.addEventListener('click', ()=>{
    if(marginDefault !== 0){
        marginDefault = marginDefault + 100;
        sroll_for_phone.style.marginLeft = `${marginDefault}%`;
    }else{
        marginDefault = 0;
        sroll_for_phone.style.marginLeft = `${marginDefault}%`;
    }
});