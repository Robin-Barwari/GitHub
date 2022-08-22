
// function getRandomStudent() {
//     return students[Math.floor(Math.random() * students.length)];
// }

// let randomStudent = getRandomStudent();

let students = [
    {
        name: "Amir",
        img: "./img/amirImage.jpeg",
        options: [
            "Albin",
            "Hugo",
            "Robin",
            "Ammir"
        ],
        Answer: "Amir"
    },
    {
        name: "Robin",
        img: "./img/robinImage.jpeg",
        options: [
            "Robin",
            "Charlie",
            "Amir",
            "Samuel"
        ],
        Answer: "Robin"
    },
    {
        name: "Albin",
        img: "./img/albinImage.jpeg",
        options: [
            "Markus",
            "Charlie",
            "Albin",
            "Hugo"
        ],
        Answer: "Albin"
    },
    {
        name: "Markus",
        img: "./img/markusImage.jpeg",
        options: [
            "Robin",
            "Markus",
            "Mathias",
            "Samuel"
        ],
        Answer: "Markus"
    },
    {
        name: "Hugo",
        img: "./img/hugoImage.jpeg",
        options: [
            "Hugo",
            "Amir",
            "Albin",
            "Mathias"
        ],
        Answer: "Hugo"
    },
    {
        name: "Mathias",
        img: "./img/mathiasImage.jpeg",
        options: [
            "Charlie",
            "Mathias",
            "Hugo",
            "Samuel"
        ],
        Answer: "Mathias"
    },
    {
        name: "Samuel",
        img: "./img/samuelImage.jpeg",
        options: [
            "Samuel",
            "Albin",
            "Markus",
            "Amir"
        ],
        Answer: "Samuel"
    },
    {
        name: "Charlie",
        img: "./img/charlieImage.jpeg",
        options: [
            "Mathias",
            "Hugo",
            "Robin",
            "Charlie"
        ],
        Answer: "Charlie"
    }
]

// variabel för att starta frågan (börjar från 0)
const lastQuestion = students.length - 1;

let runningQuestion = 0;

// läser in bilden + alternativ
function renderQuestion() {
    let q = questions[runningQuestion];

    img.innerHTML = "<img src=" + q.img + ">";
    options.innerHTML = q.options;
}