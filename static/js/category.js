window.onload = function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const value = urlParams.get('value');

    // console.log(value);

    const valueElement = document.getElementById('category-title');
    if (valueElement) {
        valueElement.innerText = `${value}`;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const questionRows = document.querySelectorAll('.question-row');
    
    questionRows.forEach(row => {
        row.addEventListener('click', function() {
            const questionNumber = this.querySelector('.question-number').textContent;
            const questionTitle = this.querySelector('.question-title').textContent;
            location.href = 'question.html';
            // alert(`문제 번호: ${questionNumber}\n문제 제목: ${questionTitle}`);
        });
    });
});
