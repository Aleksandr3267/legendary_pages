
// Select Elements
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

// Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 3 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText);
      let qCount = questionsObject.length;
      // Create Bullets + Set Questions Count
      createBullets(qCount);
      // Add Question Data
      addQuestionData(questionsObject[currentIndex], qCount);
      // Start CountDown
      countdown(3, qCount);


      // для счёта вопросов
      currentInd = 2;
      // Click On Submit
      submitButton.onclick = () => {
          let curnum = currentInd++;
          $(".questionBox span").text(curnum);
        // это конец счётов вопроса


        // Get Right Answer
        let theRightAnswer = questionsObject[currentIndex].right_answer;
        // Increase Index
        currentIndex++;
        // Check The Answer
        checkAnswer(theRightAnswer, qCount);
        // Remove Previous Question
        quizArea.innerHTML = "";
        answersArea.innerHTML = "";
        // Add Question Data
        addQuestionData(questionsObject[currentIndex], qCount);
        // Handle Bullets Class
        handleBullets();
        // Start CountDown
        clearInterval(countdownInterval);
        countdown(3, qCount);
        // Show Results
        showResults(qCount);
        submitButton.style.display = 'none';
      };
    }
  };

  myRequest.open("GET", "html_questions.json", true);
  myRequest.send();
}

getQuestions();

/* ------------------------------ createBullets ----------------------------- */
function createBullets(num) {
  countSpan.innerHTML = num;
  // Create Spans
  for (let i = 0; i < num; i++) {
    
    // Create Bullet
    // let theBullet = document.createElement("span");
    // $(".questionBox span").text(i);
    // Check If Its First Span
    // if (i === 0) {
      
    // }
    // Append Bullets To Main Bullet Container
    // bulletsSpanContainer.appendChild(theBullet);
  }
}

function addQuestionData(obj, count) {
  if (currentIndex < count) {
    
    // Create H2 Question Title
    let questionTitle = document.createElement("h2");
    // Create Question Text
    let questionText = document.createTextNode(obj["title"]);
    // Append Text To H2
    questionTitle.appendChild(questionText);
    // Append The H2 To The Quiz Area
    quizArea.appendChild(questionTitle);
    // Create The Answers
    for (let i = 1; i <= 3; i++) {
      // Create Main Answer Div
      let mainDiv = document.createElement("div");
      // Add Class To Main Div
      mainDiv.className = "answer";
      
      // Create Radio Input
      let radioInput = document.createElement("input");
      // Add Type + Name + Id + Data-Attribute
      radioInput.name = "question";
      radioInput.type = "radio";
      radioInput.id = `answer_${i}`;
      radioInput.dataset.answer = obj[`answer_${i}`];


      // Make First Option Selected
      if (i === 1) {
        radioInput.checked = true;
        
      }
      // Create Label
      let theLabel = document.createElement("label");
      // Add For Attribute
      theLabel.htmlFor = `answer_${i}`;
      // Create Label Text
      let theLabelText = document.createTextNode(obj[`answer_${i}`]);
      // Add The Text To Label
      theLabel.appendChild(theLabelText);
      // Add Input + Label To Main Div
      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);
      // Append All Divs To Answers Area
      answersArea.appendChild(mainDiv);
      
    }
  }
}

/* ------------------------------- checkAnswer ------------------------------ */
function checkAnswer(rAnswer, count) {
  let answers = document.getElementsByName("question");
  let theChoosenAnswer;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      theChoosenAnswer = answers[i].dataset.answer;
    }
  }
  if (rAnswer === theChoosenAnswer) {
    document.getElementById("good_answer").style.display = 'block';
    rightAnswers++;
    $(".count_points span").text(rightAnswers);
  }else{
    document.getElementById("bad_answer").style.display = 'block';
  }
}

// close button for answer
$(document).ready(function() {
  $('#but').on('click', function() {
    document.getElementById("bad_answer").style.display = 'none';
    submitButton.style.display = 'block';
  });
});
$(document).ready(function() {
  $('#but_good').on('click', function() {
    document.getElementById("good_answer").style.display = 'none';
    submitButton.style.display = 'block';
  });
});



function handleBullets() {
  let bulletsSpans = document.querySelectorAll(".bullets .spans span");
  let arrayOfSpans = Array.from(bulletsSpans);
  arrayOfSpans.forEach((span, index) => {
    if (currentIndex === index) {
      span.className = "on";
    }
  });
}

/* ------------------------------- showResults ------------------------------ */
function showResults(count) {
  let theResults;
  // clearInterval(timer);
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();
    

    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResults = `<span class="good">Куттуктайбыз, сиз сынактан өтүңүз!</span><span class="results_test_text">Результат теста</span> <span class="your_points">Ваши баллы: ${rightAnswers} из ${count}</span><span class="passing_score">Проходной балл: 18 баллов</span>`;
    } else if (rightAnswers === count) {
      theResults = `<span class="perfect">Perfect</span>, All Answers Is Good`;
    } else {
      theResults = `<span class="bad">Вы не прошли тест :(</span><span class="results_test_text">Результат теста</span> <span class="your_points">Ваши баллы: ${rightAnswers} из ${count}</span> <span class="passing_score">Проходной балл: 18 баллов</span>`;
    }

    resultsContainer.innerHTML = theResults;
    resultsContainer.style.padding = "10px";
    resultsContainer.style.backgroundColor = "white";
    resultsContainer.style.marginTop = "10px";
    document.getElementById('timer').style.display="none";
    document.getElementById('questionBox').style.display="none";

  }
  timers;
}



/* -------------------------------- for time -------------------------------- */
function showResTime(count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();

    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResults = `<span class="good">Куттуктайбыз, сиз сынактан өтүңүз!</span><span class="results_test_text">Результат теста</span> <span class="your_points">Ваши баллы: ${rightAnswers} из 20</span><span class="passing_score">Проходной балл: 18 баллов</span>`;
    } else if (rightAnswers === count) {
      theResults = `<span class="perfect">Perfect</span>, All Answers Is Good`;
    } else {
      theResults = `<span class="bad">Сиз сынактан өткөн жоксуз :(</span><span class="results_test_text">Результат теста</span> <span class="your_points">Ваши баллы: ${rightAnswers} из 20</span> <span class="passing_score">Проходной балл: 18 баллов</span>`;
    }

    resultsContainer.innerHTML = theResults;
    resultsContainer.style.padding = "10px";
    resultsContainer.style.backgroundColor = "white";
    resultsContainer.style.marginTop = "10px";
  
}

function countdown(duration, count) {
  if (currentIndex < count) {
    // let minutes, seconds;
    // countdownInterval = setInterval(function () {
      // minutes = parseInt(duration / 60);
      // seconds = parseInt(duration % 60);

      // minutes = minutes < 10 ? `0${minutes}` : minutes;
      // seconds = seconds < 10 ? `0${seconds}` : seconds;

    //   countdownElement.innerHTML = `${minutes}:${seconds}`;

      // if (--duration < 0) {
      //   clearInterval(countdownInterval);
      //   // submitButton.click();
      // }
    // }, 1000);
  }
}


let timers = function () {
  clearInterval(timer);
  
}

$(function () {
  let totaTime = 1500;
  let min = 0;
  let sec = 0;
  let counter = 0;

  let timer = setInterval(function () {
      counter++;
      min = Math.floor((totaTime - counter) / 60);
      sec = totaTime - min * 60 - counter;

      $(".timerBox span").text(min + ":" + sec);

      if (counter == totaTime) {
          clearInterval(timer);
          alert('Время закончилось');
          showResTime();
      }
  }, 1000);
  // /* ---------------------------------- print --------------------------------- */
  printQuestion(index);
});