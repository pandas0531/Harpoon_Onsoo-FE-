window.onload = function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const value = urlParams.get('value');

    // console.log(value);

    const valueElement = document.getElementById('category-title');
    if (valueElement) {
        valueElement.innerText = `선택한 값: ${value}`;
    }
};
