const filterBox = document.querySelectorAll('.swiper-slide');

document.querySelector('.projects-filter-list').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['filter'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hidden-project');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hidden-project');
        }
    });
});