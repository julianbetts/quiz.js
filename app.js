const correctAnswers = ['B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers      
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })
    // result.children[0].textContent = 'You are ' + score + '% Ninja';
    scrollTo(0,0)
    result.classList.remove('d-none')

    let output = 0
    const setTimer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(setTimer)
        }   else {
            output++}
        },10)
})



// let i = 0
// const setTimer = setInterval(() => {
// i++
// if (i === 5) {
//     clearInterval
// }
// }, 1000)

