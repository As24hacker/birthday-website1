// ----------------- Section Control -----------------
let currentLetter = 0;
const sections = {
  welcome: document.getElementById("welcome"),
  game: document.getElementById("game"),
  quiz: document.getElementById("quiz"),
  cake: document.getElementById("cake"),
  gift: document.getElementById("gift"),
  popup: document.getElementById("popup"),
  petals: document.getElementById("petals"),
  letters: document.getElementById("letters")
};

function showSection(id) {
  Object.values(sections).forEach(sec => sec.style.display = "none");
  sections[id].style.display = "block";
}

// ----------------- Start Button -----------------
document.getElementById("startButton").addEventListener("click", () => {
  showSection("game");
  document.getElementById("bg-music").play();
});

// ----------------- Game Section -----------------
document.getElementById("startQuiz").addEventListener("click", () => {
  showSection("quiz");
});

// ----------------- Quiz Section -----------------
const quizQuestions = [
  { q: "Her birthday month?", o: ["January", "August", "May", "December"], a: 1 },
  { q: "Your nickname for her?", o: ["Piyu", "Babu", "Golu", "Shona"], a: 0 },
  { q: "Your first gift to her?", o: ["Chocolate", "Watch", "Letter", "Ring"], a: 2 }
];

let quizIndex = 0;
let quizScore = 0;
const quizContainer = document.getElementById("quizContent");

function loadQuiz() {
  const q = quizQuestions[quizIndex];
  quizContainer.innerHTML = `
    <div class="question">${q.q}</div>
    <div class="options">
      ${q.o.map((opt, i) => `<button onclick="selectOption(${i})">${opt}</button>`).join('')}
    </div>
  `;
}

function selectOption(selected) {
  const correct = quizQuestions[quizIndex].a;
  if (selected === correct) quizScore++;
  quizIndex++;
  if (quizIndex < quizQuestions.length) loadQuiz();
  else showCake();
}

function showCake() {
  showSection("cake");
  setTimeout(() => {
    document.getElementById("showGift").style.display = "block";
  }, 3000);
}

loadQuiz(); // Preload first question

// ----------------- Gift Box -----------------
document.getElementById("showGift").addEventListener("click", () => {
  showSection("gift");
  setTimeout(showPopup, 2000);
});

// ----------------- Happy Birthday + I Love You -----------------
function showPopup() {
  showSection("popup");
  setTimeout(() => {
    document.getElementById("loveYou").style.display = "block";
    startPetals();
    setTimeout(showLetters, 4000);
  }, 2000);
}

// ----------------- Rose Petals -----------------
function startPetals() {
  for (let i = 0; i < 25; i++) {
    let petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }
}

// ----------------- Letters (Chitthis) -----------------
const letters = [
  "Letter 1: On this special day, I want to tell you how much you mean to me. You light up my world, just like candles on a cake.",
  "Letter 2: Every moment with you feels like magic. Your smile is the sweetest gift I've ever received.",
  "Letter 3: I remember our first laugh, our first silly talk — they live rent-free in my heart.",
  "Letter 4: You're not just my love, you're my peace, my calm in chaos, and my warm hug in cold days.",
  "Letter 5: If I could give you one thing in life, I’d give you the ability to see yourself through my eyes.",
  "Letter 6: You’ve made my life beautiful just by being in it. I’m thankful every day for you.",
  "Letter 7: When I say I love you, I mean every heartbeat, every breath, every thought that has your name in it.",
  "Letter 8: You deserve all the smiles, hugs, cakes, and kisses this world has to offer.",
  "Letter 9: Your voice is my favorite sound, and your name is my favorite word.",
  "Letter 10: Life with you is a dream I never want to wake up from.",
  "Letter 11: You bring meaning to my days and comfort to my nights.",
  "Letter 12: I love how you care, how you giggle, and how you never give up.",
  "Letter 13: You’re my rainbow after every storm, my home after every long day.",
  "Letter 14: Just seeing you happy is the greatest gift I could ask for.",
  "Letter 15: I wish I could wrap all my love and hand it to you — but it would be too big to hold!",
  "Letter 16: Your love has changed me for the better in ways I can't describe.",
  "Letter 17: You make me believe in love, in destiny, in forever.",
  "Letter 18: Happy Birthday, my love. I promise to keep making you smile — every single day."
];

function showLetters() {
  showSection("letters");
  const container = document.getElementById("letters");
  letters.forEach((text, i) => {
    setTimeout(() => {
      const box = document.createElement("div");
      box.className = "letter-box show";
      box.innerText = text;
      container.appendChild(box);
      box.scrollIntoView({ behavior: "smooth" });
    }, i * 3000); // 3s delay between each letter
  });
}
