window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const value = urlParams.get('value');
    const number = urlParams.get('number');

    const locationElement = document.getElementById('location');
    
    if (locationElement) {
        locationElement.innerText = `카테고리 > ${value} > ${number}번`;
    }

    const menuCategoryElement = document.getElementById('menu-category');
    if (menuCategoryElement) {
        menuCategoryElement.addEventListener('click', function() {

            const url = `category.html?value=${encodeURIComponent(value)}`;
            location.href = url;
        });
    }
};
