window.onload = function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get('value');

    const valueElement = document.getElementById('category-title');
    if (valueElement) {
        valueElement.innerText = `${value}`;
    }

    const questionRows = document.querySelectorAll('.question-row');

    questionRows.forEach(row => {
        row.addEventListener('click', function() {

            const questionNumber = this.querySelector('.question-number').textContent;

            console.log(`Value: ${value}, 문제 번호: ${questionNumber}`);
            location.href = `question.html?value=${value}&&number=${questionNumber}`
        });
    });
};
