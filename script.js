const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.show-links');

navToggle.addEventListener('click', function(){
    if (links.classList.contains('hide-links') ){
        links.classList.remove('hide-links');
    }
    else{
        links.classList.add('hide-links');
    }
});