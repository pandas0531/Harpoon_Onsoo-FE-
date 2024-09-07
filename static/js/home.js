function goToCategory(value) {
    // 버튼을 클릭하면 해당 값으로 category.html/값 경로로 이동
    window.location.href = `category.html?value=${value}`;
}

function selectCategory(category) {
    document.getElementById('selected-category').innerText = '선택된 카테고리: ' + category;
}

function jscheck(text){
    console.log(text)
    location.href="category.html"
}