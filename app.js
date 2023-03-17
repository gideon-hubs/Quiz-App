const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

const output = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score = score + 25;
        }

    });


    // show results on the page
    scrollTo(0,0);
    
    output.classList.remove('d-none');

    let results = 0;
    const timer = setInterval(() => {
        output.querySelector('span').textContent = `${results}%`;
        if (results === score) {
            clearInterval(timer)
        } else{
            results++;
        }
    }, 10);
});