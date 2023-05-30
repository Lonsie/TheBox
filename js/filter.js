const filterBox = document.querySelectorAll('.swiper-slide');

document.querySelector('.projects-filter-list').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['filter'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hidden-project');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hidden-project');
            swiper.update();
        }
        if (filterClass == 'all')
        {
            swiper.update();
        }
    });
});




const navLinkEls = document.querySelectorAll('.projects-filter');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active-filter-button').classList.remove('active-filter-button');
        navLinkEl.classList.add('active-filter-button');
    });
});