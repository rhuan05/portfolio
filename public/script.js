let languages_list = document.querySelector('.languages_list');

let languages_list_li_qtds = (languages_list.childNodes.length - 1) / 2;
languages_list.style.height = `${languages_list_li_qtds * 50}px`;

languages_list.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('open_options_languages');
});