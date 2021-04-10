let quizMaxTime = 60;
let userScore = 0;
let currentQuestionIndex = 0;
let timer;
let questionBox;
let currentAnswerSelected = 0;
let questions = [
  {
    question:
      'If 96500 coulomb electricity is passed through CuSO4 solution, it will liberate',
    options: [
      '(a) 63.5 gm of Cu',
      '(b) 31.76 gm of Cu',
      '(c) 96500 gm of Cu',
      '(d) 100 gm of Cu',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Fused NaCl on electrolysis gives _______ on cathode',
    options: [
      '(a) Chlroine',
      '(b) Sodium',
      '(c) Sodium amalgam',
      '(d) Hydrogen',
    ],
    correctAnswerIndex: 1,
  },
];
setAnswer = (answerIndex) => {
  currentAnswerSelected = answerIndex;
};
let setQuestion = () => {
  let question = document.getElementById('question');
  let option1 = document.getElementById('option1');
  let option2 = document.getElementById('option2');
  let option3 = document.getElementById('option3');
  let option4 = document.getElementById('option4');
  question.innerText =
    currentQuestionIndex + 1 + '. ' + questions[currentQuestionIndex].question;
  option1.innerText = questions[currentQuestionIndex].options[0];
  option2.innerText = questions[currentQuestionIndex].options[1];
  option3.innerText = questions[currentQuestionIndex].options[2];
  option4.innerText = questions[currentQuestionIndex].options[3];
  document.getElementById('option1-radio').checked = true;
};
let init = () => {
  let time = quizMaxTime;
  let timerElement = document.getElementById('timer');

  timer = setInterval(() => {
    time += -1;
    timerElement.innerText = time;
    if (time == 0) {
      quizComplete();
    }
  }, 1000);
  setQuestion();
};
quizComplete = () => {
  let message = document.getElementById('message');
  questionBox = document.getElementById('questionBox');
  let submitButton = document.getElementById('submit');
  let nextButton = document.getElementById('next');
  clearInterval(timer);
  message.innerText = 'Your score is ' + userScore + '/' + questions.length;
  questionBox.remove();
  nextButton.style = '';
  submitButton.style = '';
};
nextQuestion = () => {
  currentQuestionIndex += 1;
  let option1 = document.getElementById('option1');
  let option2 = document.getElementById('option2');
  let option3 = document.getElementById('option3');
  let option4 = document.getElementById('option4');
  let submitButton = document.getElementById('submit');
  let nextButton = document.getElementById('next');
  option1.style = '';
  option2.style = '';
  option3.style = '';
  option4.style = '';
  setQuestion();
  nextButton.style = 'display: none';
  submitButton.style = '';
};
submitAnswer = () => {
  let submitButton = document.getElementById('submit');
  let nextButton = document.getElementById('next');
  if (
    questions[currentQuestionIndex].correctAnswerIndex == currentAnswerSelected
  ) {
    document.getElementById('option' + (currentAnswerSelected + 1)).style =
      'background: green; color: white';
    userScore = userScore + 1;
  } else {
    document.getElementById('option' + (currentAnswerSelected + 1)).style =
      'background: red; color: white';
  }
  submitButton.style = 'display: none';
  if (currentQuestionIndex != questions.length - 1) nextButton.style = '';
  else {
    quizComplete();
  }
};
init();
