const boxContainer = document.querySelector('.box-container');

const button = document.querySelector('button');

const noOfBoxes = 6;

function generateBoxes() {
    for (let i = 0; i < noOfBoxes; i++) {
        const box = document.createElement('div');

        box.classList.add('box');

        boxContainer.appendChild(box);
    }
}

generateBoxes();

const boxes = document.querySelectorAll('.box');

const timeToRepeat = 200;
const totalTime = 5000;

button.addEventListener('click', () => {
    let timer = 0;
    const id = setInterval(() => {
        boxes.forEach(box => {
            const randomDigit = Math.floor(Math.random() * 10);

            box.innerText = randomDigit;
        })
        timer += timeToRepeat;

        if (timer === totalTime) {
            clearInterval(id);
        }
    }, timeToRepeat)
})