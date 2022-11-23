const poll = document.querySelector(".poll");
const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let text = JSON.parse(xhr.responseText);
        console.log(text);

        pollTitle.insertAdjacentHTML("beforebegin", `
       ${text.data.title}`)

        for (const i in text.data.answers)
            pollAnswers.insertAdjacentHTML("beforeend", `
       <button class="poll__answer">
    ${text.data.answers[i]}
            </button>
     `);

        const pollAnswer = Array.from(document.querySelectorAll(".poll__answer"));
        pollAnswer.forEach(el =>
            el.onclick = function () {
                alert("Спасибо, ваш голос засчитан!")
            });
    };
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();



