const characterScores = {
  "white rat": 0,
  meowl: 0,
  "alpha wolf": 0,
  bibble: 0,
  "nonchalant minion": 0,
};

const characterDescriptions = {
  "white rat": {
    name: "White Rat",
    image: "images/white%20rat.jpg",
    text: "A quiet, ultra-cautious introvert who thrives in dark, cozy blanket forts. You value peace, privacy, and a safe little sanctuary away from the chaos.",
  },
  meowl: {
    name: "Meowl",
    image: "images/meowl.jpg",
    text: "A sleek, high-fashion diva with an effortless aura of superiority. You are confident, polished, and secretly judging everyone with perfect taste.",
  },
  "alpha wolf": {
    name: "Alpha Wolf",
    image: "images/Werewolf%20alpha%20demon%20hottie.jpg",
    text: "An intense, pack-focused leader driven by raw energy and independence. You thrive on bold moves, adventure, and protecting your people.",
  },
  bibble: {
    name: "Bibble",
    image: "images/bibble.jpg",
    text: "A hyperactive chaos gremlin who lives at full volume. You bring energy, fun, and pure unfiltered excitement wherever you go.",
  },
  "nonchalant minion": {
    name: "Nonchalant Minion",
    image: "images/minion.jpg",
    text: "The ultimate moody, melodramatic main character draped in black. You are aesthetic, dramatic, and effortlessly cool in your own mysterious way.",
  },
};

function normalizeName(value) {
  return String(value).trim().toLowerCase();
}

function getResult() {
  const resultCard = document.getElementById("result");
  const resultText = document.getElementById("result-text");
  const resultName = document.getElementById("result-name");
  const resultImage = document.getElementById("result-image");
  const radios = document.querySelectorAll('input[type="radio"]:checked');

  if (radios.length < 10) {
    resultName.textContent = "Please finish the quiz";
    resultText.textContent = "Answer all 10 questions before seeing your match.";
    resultImage.src = "";
    resultImage.alt = "";
    resultCard.classList.remove("hidden");
    return;
  }

  const scores = { ...characterScores };

  radios.forEach((radio) => {
    const value = normalizeName(radio.value);

    if (value === "white rat") scores["white rat"] += 1;
    else if (value === "meowl") scores.meowl += 1;
    else if (value === "alpha wolf") scores["alpha wolf"] += 1;
    else if (value === "bibble") scores.bibble += 1;
    else if (value === "nonchalant minion") scores["nonchalant minion"] += 1;
  });

  let topCharacterKey = "white rat";
  let highestScore = -1;

  Object.entries(scores).forEach(([key, score]) => {
    if (score > highestScore) {
      highestScore = score;
      topCharacterKey = key;
    }
  });

  const match = characterDescriptions[topCharacterKey];
  resultName.textContent = match.name;
  resultText.textContent = match.text;
  resultImage.src = match.image;
  resultImage.alt = `${match.name} character image`;
  resultCard.classList.remove("hidden");
}

const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", getResult);
}

