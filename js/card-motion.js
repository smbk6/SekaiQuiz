const words = [
    { word: "apple", phonetic: "/ˈæp.əl/", origin: "Old English æppel" },
    { word: "banana", phonetic: "/bəˈnɑː.nə/", origin: "Wolof (West African)" },
    { word: "computer", phonetic: "/kəmˈpjuː.tər/", origin: "Latin computare" },
    { word: "knowledge", phonetic: "/ˈnɒ.lɪdʒ/", origin: "Middle English knowleche" },
    { word: "elephant", phonetic: "/ˈel.ɪ.fənt/", origin: "Greek elephas" },
    { word: "university", phonetic: "/ˌjuː.nɪˈvɜː.sə.ti/", origin: "Latin universitas" },
    { word: "book", phonetic: "/bʊk/", origin: "Old English bōc" },
    { word: "challenge", phonetic: "/ˈtʃæl.ɪndʒ/", origin: "Latin calumniari" },
    { word: "freedom", phonetic: "/ˈfriː.dəm/", origin: "Old English frēodōm" },
    { word: "imagination", phonetic: "/ɪˌmædʒ.ɪˈneɪ.ʃən/", origin: "Latin imaginatio" }
];

let index = 0;
let history = [];

const card = document.getElementById("card");
const feedback = document.getElementById("feedback");
const explanation = document.getElementById("explanation");

function showCard() {
    if (index < words.length) {
    const entry = words[index];
    card.textContent = entry.word;
    explanation.textContent = "";
    card.style.transition = "none";
    card.style.opacity = 1;
    } else {
    card.textContent = "🎉 終わり！";
    explanation.textContent = "";
    }
}

function showExplanation() {
    const entry = words[index];
    explanation.innerHTML = `<b>発音:</b> ${entry.phonetic}<br><b>語源:</b> ${entry.origin}`;
}

function animateFeedback(text, color) {
    feedback.textContent = text;
    feedback.style.color = color;
    feedback.classList.remove("fadeShow");
    void feedback.offsetWidth; // 強制再描画
    feedback.classList.add("fadeShow");
}

function swipe(direction) {
    if (index >= words.length) return;
    history.push(index);

    const swipeClass = direction === 'left' ? 'swipe-left' : 'swipe-right';
    animateFeedback(direction === 'left' ? "NO.." : "OK!!", direction === 'left' ? "#f55" : "#6f6");

    card.classList.add(swipeClass);

    setTimeout(() => {
    card.classList.remove(swipeClass);
    index++;
    showCard();
    }, 200);
}

function goBack() {
    if (history.length === 0) return;
    index = history.pop();
    showCard();
}

document.addEventListener("keydown", (e) => {
    switch (e.key) {
    case "ArrowRight":
        swipe('right');
        break;
    case "ArrowLeft":
        swipe('left');
        break;
    case "ArrowDown":
        showExplanation();
        break;
    case "ArrowUp":
        goBack();
        break;
    }
});

showCard();
