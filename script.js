const QUESTIONS = [
  {
    "q": "What is 626 + 31?",
    "answer": "657"
  },
  {
    "q": "What is 311 + 24?",
    "answer": "335"
  },
  {
    "q": "What is 536 + 63?",
    "answer": "599"
  },
  {
    "q": "What is 174 - 10?",
    "answer": "164"
  },
  {
    "q": "What is 72 \u00f7 8?",
    "answer": "9"
  },
  {
    "q": "What is 877 - 10?",
    "answer": "867"
  },
  {
    "q": "What is the tens digit in 489?",
    "answer": "8"
  },
  {
    "q": "What is 581 + 47?",
    "answer": "628"
  },
  {
    "q": "What is 12 \u00f7 4?",
    "answer": "3"
  },
  {
    "q": "What is 3 \u00d7 11?",
    "answer": "33"
  },
  {
    "q": "What is 735 + 78?",
    "answer": "813"
  },
  {
    "q": "What is 8 \u00d7 10?",
    "answer": "80"
  },
  {
    "q": "What is 6 \u00d7 8?",
    "answer": "48"
  },
  {
    "q": "What is 6 \u00d7 11?",
    "answer": "66"
  },
  {
    "q": "What is the perimeter of a rectangle with sides 4 cm and 6 cm?",
    "answer": "20 cm"
  },
  {
    "q": "What is 374 + 51?",
    "answer": "425"
  },
  {
    "q": "What is 7 \u00d7 2?",
    "answer": "14"
  },
  {
    "q": "What is 753 - 75?",
    "answer": "678"
  },
  {
    "q": "What is 517 + 46?",
    "answer": "563"
  },
  {
    "q": "What is 136 - 84?",
    "answer": "52"
  },
  {
    "q": "What is 621 + 76?",
    "answer": "697"
  },
  {
    "q": "What is 42 \u00f7 6?",
    "answer": "7"
  },
  {
    "q": "What is 10 \u00d7 10?",
    "answer": "100"
  },
  {
    "q": "What is 844 - 67?",
    "answer": "777"
  },
  {
    "q": "What is 44 \u00f7 4?",
    "answer": "11"
  },
  {
    "q": "What is 548 - 38?",
    "answer": "510"
  },
  {
    "q": "What is 25 + 75?",
    "answer": "100"
  },
  {
    "q": "What is 20 \u00f7 10?",
    "answer": "2"
  },
  {
    "q": "What is 7 \u00d7 6?",
    "answer": "42"
  },
  {
    "q": "What is 812 + 34?",
    "answer": "846"
  },
  {
    "q": "What is 2 \u00d7 11?",
    "answer": "22"
  },
  {
    "q": "What is 664 + 93?",
    "answer": "757"
  },
  {
    "q": "What is 4 \u00d7 4?",
    "answer": "16"
  },
  {
    "q": "What is 6 \u00d7 4?",
    "answer": "24"
  },
  {
    "q": "What is 11 \u00d7 10?",
    "answer": "110"
  },
  {
    "q": "What is 282 + 73?",
    "answer": "355"
  },
  {
    "q": "If a show starts at 3:15pm and lasts 45 minutes, what time does it end?",
    "answer": "4:00pm"
  },
  {
    "q": "What is 439 + 51?",
    "answer": "490"
  },
  {
    "q": "What is 976 - 50?",
    "answer": "926"
  },
  {
    "q": "What is 4 \u00d7 9?",
    "answer": "36"
  },
  {
    "q": "What is 636 + 85?",
    "answer": "721"
  },
  {
    "q": "What is 42 \u00f7 6?",
    "answer": "7"
  },
  {
    "q": "How many centimetres are in 2 metres?",
    "answer": "200"
  },
  {
    "q": "What is 422 - 95?",
    "answer": "327"
  },
  {
    "q": "What is 6 \u00d7 7?",
    "answer": "42"
  },
  {
    "q": "What is 9 \u00d7 4?",
    "answer": "36"
  },
  {
    "q": "How many sides does a hexagon have?",
    "answer": "6"
  },
  {
    "q": "What is 24 \u00f7 4?",
    "answer": "6"
  },
  {
    "q": "What is 20 \u00f7 2?",
    "answer": "10"
  },
  {
    "q": "What is 2 \u00d7 11?",
    "answer": "22"
  },
  {
    "q": "What is 9 \u00d7 7?",
    "answer": "63"
  },
  {
    "q": "What is 5 \u00d7 2?",
    "answer": "10"
  },
  {
    "q": "What is 853 - 7?",
    "answer": "846"
  },
  {
    "q": "What is 12 \u00d7 11?",
    "answer": "132"
  },
  {
    "q": "What is 852 + 54?",
    "answer": "906"
  },
  {
    "q": "What is 12 \u00f7 3?",
    "answer": "4"
  },
  {
    "q": "What is 8 \u00d7 2?",
    "answer": "16"
  },
  {
    "q": "What is 764 + 46?",
    "answer": "810"
  },
  {
    "q": "What is 6 \u00d7 12?",
    "answer": "72"
  },
  {
    "q": "What is 3 \u00d7 11?",
    "answer": "33"
  },
  {
    "q": "What is 105 - 53?",
    "answer": "52"
  },
  {
    "q": "What is 100 \u00f7 10?",
    "answer": "10"
  },
  {
    "q": "What is 523 + 66?",
    "answer": "589"
  },
  {
    "q": "What is 22 - 20?",
    "answer": "2"
  },
  {
    "q": "What is 4 \u00d7 5?",
    "answer": "20"
  },
  {
    "q": "What is 10 \u00f7 5?",
    "answer": "2"
  },
  {
    "q": "What is 60 \u00f7 10?",
    "answer": "6"
  },
  {
    "q": "What is 35 \u00f7 7?",
    "answer": "5"
  },
  {
    "q": "What is 6 \u00f7 3?",
    "answer": "2"
  },
  {
    "q": "What is 143 - 81?",
    "answer": "62"
  },
  {
    "q": "What is 7 \u00d7 10?",
    "answer": "70"
  },
  {
    "q": "What is 48 \u00f7 6?",
    "answer": "8"
  },
  {
    "q": "What is 60 \u00f7 10?",
    "answer": "6"
  },
  {
    "q": "What is 6 \u00d7 4?",
    "answer": "24"
  },
  {
    "q": "What is 319 + 74?",
    "answer": "393"
  },
  {
    "q": "What is 5 \u00d7 7?",
    "answer": "35"
  },
  {
    "q": "What is 673 + 49?",
    "answer": "722"
  },
  {
    "q": "What is 72 \u00f7 9?",
    "answer": "8"
  },
  {
    "q": "What is 70 + 82?",
    "answer": "152"
  },
  {
    "q": "What is 36 \u00f7 4?",
    "answer": "9"
  },
  {
    "q": "What is 449 + 34?",
    "answer": "483"
  },
  {
    "q": "What is 8 \u00d7 10?",
    "answer": "80"
  },
  {
    "q": "What is 8 \u00d7 7?",
    "answer": "56"
  },
  {
    "q": "What is 44 \u00f7 11?",
    "answer": "4"
  },
  {
    "q": "What is 10 \u00f7 5?",
    "answer": "2"
  },
  {
    "q": "What is 18 \u00f7 9?",
    "answer": "2"
  },
  {
    "q": "What is 4 \u00d7 7?",
    "answer": "28"
  },
  {
    "q": "What is 2 \u00d7 4?",
    "answer": "8"
  },
  {
    "q": "What is 8 \u00d7 3?",
    "answer": "24"
  },
  {
    "q": "What is 751 + 47?",
    "answer": "798"
  },
  {
    "q": "What is the value of the digit 7 in 7,345?",
    "answer": "7000"
  },
  {
    "q": "What is 4 \u00f7 2?",
    "answer": "2"
  },
  {
    "q": "What is 10 \u00d7 7?",
    "answer": "70"
  },
  {
    "q": "What is 17 - 7?",
    "answer": "10"
  },
  {
    "q": "What is 762 - 40?",
    "answer": "722"
  },
  {
    "q": "What is 10 \u00d7 10?",
    "answer": "100"
  },
  {
    "q": "What is 414 + 22?",
    "answer": "436"
  },
  {
    "q": "What is 81 \u00f7 9?",
    "answer": "9"
  },
  {
    "q": "What is 120 \u00f7 12?",
    "answer": "10"
  },
  {
    "q": "What is 292 + 23?",
    "answer": "315"
  },
  {
    "q": "What is 797 + 59?",
    "answer": "856"
  },
  {
    "q": "What is 3 \u00d7 11?",
    "answer": "33"
  },
  {
    "q": "What is 11 \u00d7 12?",
    "answer": "132"
  },
  {
    "q": "What is 5 \u00d7 9?",
    "answer": "45"
  },
  {
    "q": "What is 16 \u00f7 4?",
    "answer": "4"
  },
  {
    "q": "What is 8 \u00d7 4?",
    "answer": "32"
  },
  {
    "q": "What is 537 - 43?",
    "answer": "494"
  },
  {
    "q": "What is 6 \u00d7 5?",
    "answer": "30"
  },
  {
    "q": "What is 86 - 21?",
    "answer": "65"
  },
  {
    "q": "What is 12 \u00d7 4?",
    "answer": "48"
  },
  {
    "q": "What is 7 \u00d7 10?",
    "answer": "70"
  },
  {
    "q": "What is 24 \u00f7 3?",
    "answer": "8"
  },
  {
    "q": "What is 1/2 of 24?",
    "answer": "12"
  },
  {
    "q": "What is 12 \u00f7 4?",
    "answer": "3"
  },
  {
    "q": "What is 929 + 44?",
    "answer": "973"
  },
  {
    "q": "What is 2 \u00d7 4?",
    "answer": "8"
  },
  {
    "q": "What is 3/4 of 20?",
    "answer": "15"
  },
  {
    "q": "What is 36 \u00f7 12?",
    "answer": "3"
  },
  {
    "q": "What is 12 \u00d7 4?",
    "answer": "48"
  },
  {
    "q": "What is 10 \u00d7 2?",
    "answer": "20"
  },
  {
    "q": "What is 33 \u00f7 3?",
    "answer": "11"
  },
  {
    "q": "What is 8 \u00d7 6?",
    "answer": "48"
  },
  {
    "q": "What is 48 \u00f7 4?",
    "answer": "12"
  },
  {
    "q": "What is 920 - 67?",
    "answer": "853"
  },
  {
    "q": "What is 5 \u00d7 5?",
    "answer": "25"
  },
  {
    "q": "What is 198 - 67?",
    "answer": "131"
  },
  {
    "q": "What is 7 \u00d7 3?",
    "answer": "21"
  },
  {
    "q": "What is 60 \u00f7 5?",
    "answer": "12"
  },
  {
    "q": "What is 774 + 78?",
    "answer": "852"
  },
  {
    "q": "What is 60 \u00f7 6?",
    "answer": "10"
  },
  {
    "q": "What is 72 \u00f7 9?",
    "answer": "8"
  },
  {
    "q": "What is 845 - 29?",
    "answer": "816"
  },
  {
    "q": "What is 8 \u00d7 9?",
    "answer": "72"
  },
  {
    "q": "What is 21 \u00f7 3?",
    "answer": "7"
  },
  {
    "q": "What is 21 \u00f7 3?",
    "answer": "7"
  },
  {
    "q": "What is 1/4 of 36?",
    "answer": "9"
  },
  {
    "q": "What is 4 \u00d7 7?",
    "answer": "28"
  },
  {
    "q": "What is 528 + 20?",
    "answer": "548"
  },
  {
    "q": "What is 270 + 4?",
    "answer": "274"
  },
  {
    "q": "What is 4 \u00d7 8?",
    "answer": "32"
  },
  {
    "q": "What is 5 \u00d7 2?",
    "answer": "10"
  },
  {
    "q": "How many hours are in a day?",
    "answer": "24"
  },
  {
    "q": "What is 10 \u00d7 4?",
    "answer": "40"
  },
  {
    "q": "What is 12 \u00f7 3?",
    "answer": "4"
  },
  {
    "q": "What is 4 \u00d7 9?",
    "answer": "36"
  },
  {
    "q": "What is 5 \u00d7 3?",
    "answer": "15"
  },
  {
    "q": "What is 48 \u00f7 8?",
    "answer": "6"
  },
  {
    "q": "What is 403 + 10?",
    "answer": "413"
  },
  {
    "q": "What is 5 \u00d7 5?",
    "answer": "25"
  },
  {
    "q": "What is 10 \u00d7 5?",
    "answer": "50"
  },
  {
    "q": "What is 4 \u00d7 4?",
    "answer": "16"
  },
  {
    "q": "What is 74 - 14?",
    "answer": "60"
  },
  {
    "q": "What is 99 \u00f7 9?",
    "answer": "11"
  },
  {
    "q": "What is 11 \u00d7 9?",
    "answer": "99"
  },
  {
    "q": "How many faces does a cube have?",
    "answer": "6"
  },
  {
    "q": "What is 14 \u00f7 7?",
    "answer": "2"
  },
  {
    "q": "What is 940 - 46?",
    "answer": "894"
  },
  {
    "q": "What is 12 \u00d7 12?",
    "answer": "144"
  },
  {
    "q": "What is 4 \u00d7 10?",
    "answer": "40"
  },
  {
    "q": "How many seconds are in 3 minutes?",
    "answer": "180"
  },
  {
    "q": "What is 795 + 19?",
    "answer": "814"
  },
  {
    "q": "What is 2 \u00d7 2?",
    "answer": "4"
  },
  {
    "q": "Round 678 to the nearest ten.",
    "answer": "680"
  },
  {
    "q": "What is 9 \u00d7 3?",
    "answer": "27"
  },
  {
    "q": "What is 36 \u00f7 4?",
    "answer": "9"
  },
  {
    "q": "What is 373 - 17?",
    "answer": "356"
  },
  {
    "q": "What is 76 + 67?",
    "answer": "143"
  },
  {
    "q": "What is 70 \u00f7 10?",
    "answer": "7"
  },
  {
    "q": "You have KSh 50 and buy an item costing KSh 27. How much change do you get?",
    "answer": "23"
  },
  {
    "q": "What is 18 \u00f7 6?",
    "answer": "3"
  },
  {
    "q": "What is 9 \u00d7 5?",
    "answer": "45"
  },
  {
    "q": "What is 20 \u00f7 2?",
    "answer": "10"
  },
  {
    "q": "What is 861 + 43?",
    "answer": "904"
  },
  {
    "q": "What is 6 \u00d7 11?",
    "answer": "66"
  },
  {
    "q": "What is 121 + 53?",
    "answer": "174"
  },
  {
    "q": "What is 11 \u00d7 9?",
    "answer": "99"
  },
  {
    "q": "What is 25 \u00f7 5?",
    "answer": "5"
  },
  {
    "q": "What is 148 + 83?",
    "answer": "231"
  },
  {
    "q": "What is 704 + 95?",
    "answer": "799"
  },
  {
    "q": "What is 24 \u00f7 3?",
    "answer": "8"
  },
  {
    "q": "What is 15 \u00f7 5?",
    "answer": "3"
  },
  {
    "q": "How many minutes are in 2 hours?",
    "answer": "120"
  },
  {
    "q": "What is 7 \u00d7 10?",
    "answer": "70"
  },
  {
    "q": "What is 4 \u00d7 9?",
    "answer": "36"
  },
  {
    "q": "What is 4 \u00d7 8?",
    "answer": "32"
  },
  {
    "q": "What is 66 \u00f7 11?",
    "answer": "6"
  },
  {
    "q": "What is 77 \u00f7 7?",
    "answer": "11"
  },
  {
    "q": "What is 9 \u00d7 2?",
    "answer": "18"
  },
  {
    "q": "What is 873 - 2?",
    "answer": "871"
  },
  {
    "q": "What is 10 \u00d7 8?",
    "answer": "80"
  },
  {
    "q": "What is 84 \u00f7 7?",
    "answer": "12"
  },
  {
    "q": "What is 6 \u00f7 2?",
    "answer": "3"
  },
  {
    "q": "What is 228 - 43?",
    "answer": "185"
  },
  {
    "q": "What is 328 + 73?",
    "answer": "401"
  },
  {
    "q": "Which is greater: 0.5 or 0.75?",
    "answer": "0.75"
  },
  {
    "q": "What is 50 - 25?",
    "answer": "25"
  },
  {
    "q": "What is 11 \u00d7 4?",
    "answer": "44"
  },
  {
    "q": "What is 12 \u00d7 8?",
    "answer": "96"
  },
  {
    "q": "What is 108 \u00f7 12?",
    "answer": "9"
  },
  {
    "q": "What is 10 \u00d7 2?",
    "answer": "20"
  }
];
let index = 0;
let score = 0;
let total = QUESTIONS.length;

function shuffleArray(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }

function $(id){return document.getElementById(id);}

function showMenu(){ $('menu').style.display='block'; $('quiz').style.display='none'; $('total').innerText = 'Questions available: ' + total; $('score').innerText = 'Score: ' + score + ' / ' + total; }

function startQuiz(){
  shuffleArray(QUESTIONS); // shuffle each time
  index = 0; score = 0;
  $('menu').style.display='none'; $('quiz').style.display='block';
  showQuestion();
  $('score').innerText = 'Score: ' + score + ' / ' + total;
}

function showQuestion(){
  $('feedback').innerText = '';
  $('answerInput').value = '';
  const q = QUESTIONS[index];
  $('qnum').innerText = 'Question ' + (index+1) + ' of ' + total;
  $('qtext').innerText = q.q;
  $('nextBtn').style.display = 'none';
  $('checkBtn').style.display = 'inline-block';
}

function checkAnswer(){
  const user = $('answerInput').value.trim();
  if(user===''){ $('feedback').innerText = 'Please type an answer.'; return; }
  const correct = String(QUESTIONS[index].answer).trim();
  if(user.replace(/\s+/g,'') === correct.replace(/\s+/g,'')){
    $('feedback').innerText = 'Correct!';
    score++;
  } else {
    $('feedback').innerText = 'Try again! Correct answer: ' + correct;
  }
  $('score').innerText = 'Score: ' + score + ' / ' + total;
  $('checkBtn').style.display = 'none';
  if(index < total-1){
    $('nextBtn').style.display = 'inline-block';
  } else {
    $('nextBtn').innerText = 'Finish';
    $('nextBtn').style.display = 'inline-block';
  }
}

function nextQuestion(){
  index++;
  if(index >= total){ endQuiz(); } else { showQuestion(); }
}

function endQuiz(){
  $('quiz').innerHTML = '<h2>Quiz Finished</h2><p>Your score: ' + score + ' / ' + total + '</p><button onclick="startQuiz()">Play Again</button><button onclick="showMenu()">Back to Menu</button>';
}

window.onload = function(){
  $('startBtn').onclick = startQuiz;
  $('resetBtn').onclick = function(){ score=0; $('score').innerText='Score: ' + score + ' / ' + total; };
  $('checkBtn').onclick = checkAnswer;
  $('nextBtn').onclick = nextQuestion;
  showMenu();
}
