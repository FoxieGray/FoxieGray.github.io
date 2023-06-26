const quizData = [
    {
        question: "1. What do you call the reaction to an input that disturbs our physical and mental health?",
        a: "Fear",
        b: "Stress",
        c: "Anxiety",
        d: "Disgust",
        correct: "b",
    },
    {
        question: "2. Which part of the brain controls fundamental body functions like breathing, eye movement, heartbeat, and swallowing?",
        a: "Cerebrum",
        b: "Cerebellum",
        c: "Brain Stem",
        d: "Hypothalamus",
        correct: "c",
    },
    {
        question: "3. Which part of the brain maintains our posture and equilibrium?",
        a: "Cerebrum",
        b: "Cerebellum",
        c: "Brain Stem",
        d: "Hypothalamus",
        correct: "b",
    },
    {
        question: "4. Which part of the brain controls our senses (sight, hearing, smell, etc.)",
        a: "Cerebrum",
        b: "Cerebellum",
        c: "Brain Stem",
        d: "Hypothalamus",
        correct: "a",
    },
    {
        question: "5. What is the subjective state of mind triggered by certain stimuli or events?",
        a: "Emotions",
        b: "Psychology",
        c: "Expressions",
        d: "Mental Response",
        correct: "a",
    },
    {
        question: "6. What do you call the close connections between people, formed by emotional bonds and interactions?",
        a: "Feelings",
        b: "Infatuation",
        c: "Personal Relationship",
        d: "Mutual Understanding",
        correct: "c",
    },
    {
        question: "7. Which among the following shows responsibility in personal relationships?",
        a: "Infidelity",
        b: "Self-concept",
        c: "Mutual Respect",
        d: "Unrealistic Expectations",
        correct: "a",
    },
    {
        question: "8. What do you call the history, rituals, and customs passed down from generation to generation?",
        a: "Genogram",
        b: "Family Tree",
        c: "History Book",
        d: "Family Legacy",
        correct: "d",
    },
    {
        question: "9. What are the small tasks/steps that leads you to a career goal?",
        a: "Job",
        b: "Occupation",
        c: "Career Paths",
        d: "Career Planner",
        correct: "c",
    },
    {
        question: "10. What do you call the position that an individual holds during their duties?",
        a: "Job",
        b: "Occupation",
        c: "Career Paths",
        d: "Career Planner",
        correct: "a",
    },
    {
        question: "11. In philosophy, what does the Greek word SOPHIA means?",
        a: "Love",
        b: "Hatred",
        c: "Wisdom",
        d: "Intelligence",
        correct: "c",
    },
    {
        question: "12. Which branch of Philosophy studies the nature of moral judgements?",
        a: "Logic",
        b: "Ethics",
        c: "Metaphysics",
        d: "Epistemology",
        correct: "b",
    },
    {
        question: "13. What is the ability to discern or judge what is true, right, or a lasting insight?",
        a: "Guess",
        b: "Humor",
        c: "Wisdom",
        d: "Decision Making",
        correct: "c",
    },
    {
        question: "14. Which of the following statements best describes truth?",
        a: "Scientifically Proven",
        b: "Based on Mass Media",
        c: "Rumors from the neighborhood",
        d: "Based on beliefs and viewpoints",
        correct: "a",
    },
    {
        question: "15. According to the benefits of Hinduism, what is the root of the universe and evrything that exists?",
        a: "Light",
        b: "Brahma",
        c: "Upanishads",
        d: "The Aum(Om)",
        correct: "d",
    },
    {
        question: "16. Where did Buddhism originate?",
        a: "Iran",
        b: "India",
        c: "Malaysia",
        d: "Vietnam",
        correct: "b",
    },
    {
        question: "17. Which model is devoted in preserving the totality of Earth's biodiversity and its life supporting system?",
        a: "Ecosystem",
        b: "Environment",
        c: "Ecocentric Model",
        d: "Anthropocentric Model",
        correct: "c",
    },
    {
        question: "18. What do you call the ability of a person to make choices and perform it? ",
        a: "Will",
        b: "Wisdom",
        c: "Freedom",
        d: "Decision Making",
        correct: "c",
    },
    {
        question: "19. What do you call the unique relationship between distinct subjects?",
        a: "Interiority",
        b: "Interobjectivity",
        c: "Intersubjectivity",
        d: "A person's free will",
        correct: "c",
    },
    {
        question: "20. What is the interaction between persons that happens through speech or the use of words, expressions, and body language?",
        a: "Dialogue",
        b: "Connection",
        c: "Conversation",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "21. What do you call the scientific study of man?",
        a: "History",
        b: "Sociology",
        c: "Psychology",
        d: "Anthropology",
        correct: "d",
    },
    {
        question: "22. Which of the following is NOT an element of culture?",
        a: "Beliefs",
        b: "Influence",
        c: "Knowledge",
        d: "Social Norms",
        correct: "b",
    },
    {
        question: "23. Which cultural orientation refers to understanding the cultural practices of other groups in their cultural context?",
        a: "Variations",
        b: "Xenocentrism",
        c: "Ethnocentrism",
        d: "Cultural Relativism",
        correct: "d",
    },
    {
        question: "24. Which cultural orientation refers to the belief that one's own culture respresents or is superior to all other cultures?",
        a: "Variations",
        b: "Xenocentrism",
        c: "Ethnocentrism",
        d: "Cultural Relativism",
        correct: "c",
    },
    {
        question: "25. Which of the following refers to the process of developing physical and biological changes in species over a period of time?",
        a: "Elevation",
        b: "Evolution",
        c: "Revolution",
        d: "Computation",
        correct: "b",
    },
    {
        question: "26. Which among the following species name means wise man?",
        a: "Homo Erectus",
        b: "Homo Sapiens",
        c: "Homo Floresiensis",
        d: "Homo Heidelbergenesis",
        correct: "b",
    },
    {
        question: "27. Which among the following species name means upright man?",
        a: "Homo Erectus",
        b: "Homo Sapiens",
        c: "Homo Floresiensis",
        d: "Homo Heidelbergenesis",
        correct: "a",
    },
    {
        question: "28. What do you call the remains that got preserved in rocks, thousands of years ago?",
        a: "Fossils",
        b: "Ancient",
        c: "Sediments",
        d: "Yamashita's treasure",
        correct: "a",
    },
    {
        question: "29. What is the life-long process whereby an individual acquires beliefs, values, and social behaviors?",
        a: "Influence",
        b: "Experiences",
        c: "Socialization",
        d: "Participation",
        correct: "c",
    },
    {
        question: "30. Which agent of socialization mainly influences an individual's basic skills in socialization?",
        a: "Peers",
        b: "Family",
        c: "Religion",
        d: "Mass Media",
        correct: "b",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <p><a href="answers.html">Reveal Correct Answers</a></p>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
