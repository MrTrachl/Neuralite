// Cursor
document.body.style.cursor = 'url("../icons/static/cursor.svg"), auto';



// <===============================>
//    -> Header Change Scripts <-
// <===============================>
const currentQuestionOverTotalQuestion = document.getElementById("currentQuestionOverTotalQuestion");

currentQuestionOverTotalQuestion.addEventListener("click", () => {
    const mainTestBlock = document.getElementById("mainTestBlock");
    const questionBankBlock = document.getElementById("questionBankBlock");

    // Fade out
    mainTestBlock.classList.add("fade-hidden");
    // Fade in
    questionBankBlock.classList.remove("fade-hidden");

    setTimeout(() => {
    mainTestBlock.style.display = "none";
  questionBankBlock.style.display = "flex";
}, 250); // Match the transition duration
});



// <================================>
//     -> Tool Bar HUD Scripts <-
// <================================>

// **TIMER COUNTDOWN** -> Default set to 2:30:00
let totalSeconds = 2 * 60 * 60 + 30 * 60; // 2 hours + 30 minutes in seconds
const timerDisplay = document.querySelector('.timer-display');

function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    timerDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

updateTimer();

const timerInterval = setInterval(() => {
    if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
    } else {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Time\'s up!';
    }
}, 1000);



// **FRAME SLIDER**
const frames = [
    document.getElementById('slideFrame1'),
    document.getElementById('slideFrame2'),
];
let currentIndex = 0;
let isAnimating = false;

function goToSlide(targetIndex) {
    // bounds check tosee if on current frame
    if (targetIndex < 0 || targetIndex >= frames.length) return;
    if (targetIndex === currentIndex || isAnimating) return;

    isAnimating = true;

    const current = frames[currentIndex];
    const next = frames[targetIndex];
    const goingForward = targetIndex > currentIndex;

    // Position the incoming frame on the correct side BEFORE animating in
    next.classList.remove('offscreen', 'slide-out');
    next.style.transform = goingForward ? 'translateX(200%)' : 'translateX(-200%)';

    // Force reflow so the browser registers the start position
    void next.offsetWidth;

    // Animate: current exits opposite the entry side, next slides to center
    current.classList.remove('active');
    current.style.transform = goingForward ? 'translateX(-200%)' : 'translateX(200%)';

    next.classList.add('active');
    next.style.transform = 'translateX(0)';

    // Update header counter (e.g. "45/50")
    const questionNumber = 44 + targetIndex;
    document.getElementById('currentQuestionOverTotalQuestion').textContent =
        `${questionNumber}/50`;

    currentIndex = targetIndex;

    // Release lock ->
    next.addEventListener('transitionend', () => { isAnimating = false; }, { once: true });
}

document.getElementById('nextQuestionButton').addEventListener('click', () => goToSlide(currentIndex + 1));
document.getElementById('prevQuestionButton').addEventListener('click', () => goToSlide(currentIndex - 1));




// **HUD BUTTONS AND EFFECTS**
// Next Button
    const nextButton = document.getElementById("nextQuestionButton");
    const nextButtonImg = nextButton.querySelector("img");

    nextButton.addEventListener("mouseover", () => {
    nextButtonImg.src =  "../icons/static/next_full.svg";
   });

    nextButton.addEventListener("mouseout", () => {
    nextButtonImg.src =  "../icons/static/next_unfilled.svg";
   });

// Prev Button

    const prevButton = document.getElementById("prevQuestionButton");
    const prevButtonImg = prevButton.querySelector("img");

    prevButton.addEventListener("mouseover", () => {
    prevButtonImg.src =  "../icons/static/prev_full.svg";
   });

    prevButton.addEventListener("mouseout", () => {
    prevButtonImg.src =  "../icons/static/prev_unfilled.svg";
   });

//    Star Button
   const starQuestionButton = document.getElementById("starQuestionButton");
   const starQuestionImg = document.getElementById("starQuestionImg");
   let starred = false;

    starQuestionButton.addEventListener("mouseover", () => {
        if(!starred) {
            starQuestionImg.src = "../icons/static/star_outline.svg";
        }
   });

    starQuestionButton.addEventListener("mouseout", () => {
        if(!starred) {
            starQuestionImg.src = "../icons/static/star.svg";
        }
   });

   starQuestionButton.addEventListener("click", () => {
    starred = !starred;

    // Swap the icon (gold filled when starred, outline when not)
    starQuestionImg.src = starred
        ? "../icons/static/star_full.svg"
        : "../icons/static/star_outline.svg";

    // Persistent glow only while starred
    starQuestionButton.classList.toggle("starred", starred);

    // Restart the animations by removing, forcing reflow, then re-adding
    starQuestionImg.classList.remove("star-pop");
    starQuestionButton.classList.remove("star-burst");
    void starQuestionButton.offsetWidth; // force reflow so the animation replays
    starQuestionImg.classList.add("star-pop");
    if (starred) starQuestionButton.classList.add("star-burst");
   });

   // Calculator
   const calculatorButton = document.getElementById("calculatorButton");
   const calculatorButtonImg = document.getElementById("calculatorButtonImg");

   calculatorButton.addEventListener("mouseover", () => {
        calculatorButtonImg.src = "../icons/static/calculator_full.svg";
   });
   calculatorButton.addEventListener("mouseout", () => {
        calculatorButtonImg.src = "../icons/static/calculator.svg";
   });



// Top left exit button 
    const exitButton = document.getElementById("exit-button");
    exitButton.addEventListener("mouseover", ()=>{
        exitButton.src="../icons/static/left_exit_full.svg";
    });
    exitButton.addEventListener("mouseout", ()=>{
        exitButton.src="../icons/static/left_exit.svg";
});


// <=====================================>
//   -> Leave Exam Verification Popup <-
// <=====================================>

function toggleMenu() {
        const menuContent = document.getElementById('menu-content');

        const overlay = document.getElementById('overlay');
            if (menuContent.classList.contains('show')) {
                // Collapse the menu
                menuContent.classList.remove('show');
                overlay.classList.remove('show');
                setTimeout(() => {
                    menuContent.style.visibility = 'hidden';
                    overlay.style.visibility = 'hidden';
                }, 300); // Match the duration of the transition
            } else {
                // Expand the menu
                menuContent.style.visibility = 'visible';
                overlay.style.visibility = 'visible';
                setTimeout(() => {
                    menuContent.classList.add('show');
                    overlay.classList.add('show');
                    menuContent.focus(); // Shift focus to the popup
            }, 0);
        }
    }

    function closePopup() {
        const menuContent = document.getElementById('menu-content');
        const overlay = document.getElementById('overlay');
        menuContent.classList.remove('show');
        overlay.classList.remove('show');
        setTimeout(() => {
            menuContent.style.visibility = 'hidden';
            overlay.style.visibility = 'hidden';
        }, 300); // Match the duration of the transition
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('menu-content').classList.contains('show')) {
            closePopup();
        }
    });