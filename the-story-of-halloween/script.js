// 前端專用 script.js (無管理員功能)
// Michelle English Tutor - Quiz Only

// 直接寫死 quizQuestions 和 articleContent
const quizQuestions = [
  {
    "question": "When is Halloween celebrated each year?",
    "type": "single-choice",
    "answer": [
      "October 31"
    ],
    "explanation": "The first sentence of the article states that Halloween is celebrated every year on October 31.",
    "options": [
      "December 25",
      "October 31",
      "January 1",
      "July 4"
    ]
  },
  {
    "question": "What is the second biggest shopping holiday in the US, after Christmas?",
    "type": "single-choice",
    "answer": [
      "Halloween"
    ],
    "explanation": "The article explicitly states, 'Today, Halloween is the second biggest shopping holiday in the US, after Christmas.'",
    "options": [
      "Thanksgiving",
      "Halloween",
      "Easter",
      "Valentine's Day"
    ]
  },
  {
    "question": "What did poor people ask for on All Souls' Day in Europe?",
    "type": "single-choice",
    "answer": [
      "Soul cakes"
    ],
    "explanation": "According to the text, poor people asked for 'soul cakes' on All Souls' Day in exchange for prayers for the dead.",
    "options": [
      "Candy",
      "Money",
      "Soul cakes",
      "Toys"
    ]
  },
  {
    "question": "In the 1970s, what did parents start giving out instead of fruit and nuts?",
    "type": "single-choice",
    "answer": [
      "Factory-wrapped candy"
    ],
    "explanation": "The text mentions that in the 1970s, parents started giving 'factory-wrapped candy' due to safety concerns.",
    "options": [
      "Fruit",
      "Nuts",
      "Coins",
      "Factory-wrapped candy"
    ]
  },
  {
    "question": "What did people in Ireland carve to scare away evil spirits?",
    "type": "single-choice",
    "answer": [
      "Turnips"
    ],
    "explanation": "The article states that people in Ireland carved 'turnips' to scare away evil spirits, which later evolved into using pumpkins in the US.",
    "options": [
      "Pumpkins",
      "Apples",
      "Turnips",
      "Potatoes"
    ]
  },
  {
    "question": "What was the Celtic festival celebrated over 2,000 years ago called?",
    "type": "single-choice",
    "answer": [
      "Samhain"
    ],
    "explanation": "The 'History (Bonus)' section mentions that the Celts celebrated a festival called 'Samhain'.",
    "options": [
      "All Hallows' Eve",
      "Samhain",
      "All Saints' Day",
      "Souling"
    ]
  },
  {
    "question": "Which of the following are used to decorate houses for Halloween?",
    "type": "multiple-choice",
    "answer": [
      "Spooky lights",
      "Jack-o’-lanterns",
      "Fake spiderwebs"
    ],
    "explanation": "The article mentions that people decorate their houses with 'spooky lights, jack-o’-lanterns, and fake spiderwebs'.",
    "options": [
      "Spooky lights",
      "Christmas trees",
      "Jack-o’-lanterns",
      "Fake spiderwebs"
    ]
  },
  {
    "question": "Which traditions became part of Halloween from the Samhain festival?",
    "type": "multiple-choice",
    "answer": [
      "Wearing costumes",
      "Lighting fires"
    ],
    "explanation": "The article mentions that some Samhain traditions, like 'wearing costumes' and 'lighting fires', became part of Halloween.",
    "options": [
      "Wearing costumes",
      "Giving gifts",
      "Lighting fires",
      "Praying for the dead"
    ]
  }
];
const articleContent = "# The Story of Halloween\n\nHalloween is celebrated every year on October 31. In the United States, it is one of the most popular holidays. People decorate their houses with spooky lights, jack-o’-lanterns, and fake spiderwebs. \n\nToday, Halloween is the second biggest shopping holiday in the US, after Christmas. Americans spend about $12 billion every year on costumes, decorations, and candy.\n\nThe tradition of trick-or-treating started a long time ago in Europe. On All Souls’ Day, poor people went to rich families and asked for soul cakes (small sweet breads). In return, they prayed for the dead. This was called “souling.” Later, children in Ireland and Scotland dressed up and sang for treats. When these traditions came to the US, they became the modern trick-or-treat custom we know today.\n\nBefore the 1900s, Halloween treats were things like fruit, nuts, coins, or small toys. But in the 1970s, parents worried about safety and started giving factory-wrapped candy instead. Candy companies saw a big chance and made mini candy bars just for Halloween. Now, Americans spend more than $2.6 billion every year on Halloween candy.\n\nOf course, no Halloween is complete without a jack-o’-lantern. This fun tradition started in Ireland, where people carved turnips to scare away evil spirits. When they moved to the US, they used pumpkins instead, because they were bigger and easier to carve.\n\n### **History (Bonus)**\n\nA long time ago, over 2,000 years ago, the Celts in Ireland and France celebrated a festival called Samhain (pronounced “Sow-in”). They believed that on this day, spirits of the dead came back to Earth. To protect themselves, people made bonfires and wore costumes made from animal heads and skins.\n\nIn the 8th century, the Christian church made November 1 “All Saints’ Day” to honor holy people. The night before became known as All Hallows’ Eve, which later changed to Halloween. Some Samhain traditions, like wearing costumes and lighting fires, became part of the new holiday.\n\nHalloween came to the United States in the mid-1800s, when Irish and Scottish immigrants moved there. By the 1920s, Halloween parades and parties became popular in towns and cities.";

// ...以下保留 quizPanel/resultsPanel 相關邏輯...

// ========== 必要工具函式 ==========
function showSection(sectionId) {
    const sections = [quizPanel, resultsPanel];
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

function markdownToHtml(markdown) {
    let html = markdown;
    html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/_(.*?)_/gim, '<em>$1</em>');
    html = html.replace(/^\s*[\-\*]\s+(.*)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>(\n<li>.*<\/li>)*)/gim, '<ul>$1</ul>');
    html = html.replace(/^\s*\d+\.\s+(.*)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>(\n<li>.*<\/li>)*)/gim, '<ol>$1</ol>');
    html = html.split('\n').map(line => {
        if (line.trim() === '' || line.trim().match(/<\/?(h|ul|ol|li|strong|em)>/)) {
            return line;
        }
        return `<p>${line.trim()}</p>`;
    }).join('');
    html = html.replace(/<p><\/p>/g, '');
    return html;
}

function alertMessage(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 text-base md:text-lg animate-fade-in-out ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`;
    document.body.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.remove();
    }, 4000);
}
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes fade-in-out {
    0% { opacity: 0; transform: translateY(-20px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-20px); }
}
.animate-fade-in-out {
    animation: fade-in-out 4s ease-in-out forwards;
}
`;
document.head.appendChild(styleSheet);

// ========== Quiz 狀態 ==========
let currentQuestionIndex = 0;
let userAnswers = [];
let quizResults = {
    totalCorrect: 0,
    totalQuestions: quizQuestions.length,
    questionTypeCounts: { "single-choice": 0, "multiple-choice": 0, "cloze": 0 },
    questionTypeCorrect: { "single-choice": 0, "multiple-choice": 0, "cloze": 0 }
};
let totalScoreChart;
let questionTypeAccuracyChart;

// ========== DOM 取得 ==========
const quizPanel = document.getElementById('quizPanel');
const resultsPanel = document.getElementById('resultsPanel');
const quizArticleContent = document.getElementById('quizArticleContent');
const progressBar = document.getElementById('progressBar');
const currentQuestionNumberSpan = document.getElementById('currentQuestionNumber');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const questionCard = document.getElementById('questionCard');
const quizQuestionText = document.getElementById('quizQuestionText');
const quizOptions = document.getElementById('quizOptions');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const feedbackArea = document.getElementById('feedbackArea');
const feedbackMessage = document.getElementById('feedbackMessage');
const explanationText = document.getElementById('explanationText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const totalScoreChartCanvas = document.getElementById('totalScoreChart');
const questionTypeAccuracyChartCanvas = document.getElementById('questionTypeAccuracyChart');
const retakeQuizBtn = document.getElementById('retakeQuizBtn');

// ========== 主要流程 ==========
document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
    showSection('quizPanel');
    submitAnswerBtn.addEventListener('click', submitAnswer);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    retakeQuizBtn.addEventListener('click', () => {
        startQuiz();
        showSection('quizPanel');
    });
});

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    quizResults = {
        totalCorrect: 0,
        totalQuestions: quizQuestions.length,
        questionTypeCounts: { "single-choice": 0, "multiple-choice": 0, "cloze": 0 },
        questionTypeCorrect: { "single-choice": 0, "multiple-choice": 0, "cloze": 0 }
    };
    quizQuestions.forEach(q => {
        if (quizResults.questionTypeCounts[q.type] !== undefined) {
            quizResults.questionTypeCounts[q.type]++;
        }
    });
    quizArticleContent.innerHTML = markdownToHtml(articleContent);
    totalQuestionsSpan.textContent = quizQuestions.length;
    displayQuestion();
    feedbackArea.classList.add('hidden');
    submitAnswerBtn.classList.remove('hidden');
    nextQuestionBtn.classList.add('hidden');
}

function displayQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }
    const question = quizQuestions[currentQuestionIndex];
    questionCard.classList.remove('question-enter-to');
    questionCard.classList.add('question-leave-active', 'question-leave-to');
    setTimeout(() => {
        questionCard.classList.remove('question-leave-active', 'question-leave-to');
        questionCard.classList.add('question-enter-active', 'question-enter-from-right');
        currentQuestionNumberSpan.textContent = currentQuestionIndex + 1;
        quizQuestionText.innerHTML = question.question;
        quizOptions.innerHTML = '';
        if (question.type === 'single-choice' || question.type === 'multiple-choice') {
            question.options.forEach((option, i) => {
                const label = document.createElement('label');
                label.className = 'block p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out';
                const inputType = question.type === 'single-choice' ? 'radio' : 'checkbox';
                label.innerHTML = `
                    <input type=\"${inputType}\" name=\"quizOption\" value=\"${option}\" class=\"mr-3 align-middle\">
                    <span class=\"align-middle\">${option}</span>
                `;
                quizOptions.appendChild(label);
                if (inputType === 'radio') {
                    label.querySelector('input').addEventListener('change', (e) => {
                        quizOptions.querySelectorAll('label').forEach(lbl => lbl.classList.remove('option-selected'));
                        if (e.target.checked) {
                            label.classList.add('option-selected');
                        }
                    });
                } else {
                    label.querySelector('input').addEventListener('change', () => {
                        label.classList.toggle('option-selected');
                    });
                }
            });
        } else if (question.type === 'cloze') {
            const clozeQuestionHtml = question.question.replace(/__BLANK__/g, '<input type="text" class="cloze-input p-2 border rounded-md w-48" placeholder="填空">');
            quizQuestionText.innerHTML = clozeQuestionHtml;
        }
        feedbackArea.classList.add('hidden');
        submitAnswerBtn.classList.remove('hidden');
        nextQuestionBtn.classList.add('hidden');
        updateProgressBar();
        void questionCard.offsetWidth;
        questionCard.classList.remove('question-enter-from-right');
        questionCard.classList.add('question-enter-to');
    }, 500);
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function submitAnswer() {
    const question = quizQuestions[currentQuestionIndex];
    let userAnswer;
    let isCorrect = false;
    if (question.type === 'single-choice') {
        const selectedRadio = quizOptions.querySelector('input[name="quizOption"]:checked');
        userAnswer = selectedRadio ? [selectedRadio.value] : [];
        isCorrect = (userAnswer.length === 1 && question.answer.length === 1 && userAnswer[0] === question.answer[0]);
    } else if (question.type === 'multiple-choice') {
        const selectedCheckboxes = Array.from(quizOptions.querySelectorAll('input[name="quizOption"]:checked')).map(cb => cb.value);
        userAnswer = selectedCheckboxes;
        isCorrect = (userAnswer.length === question.answer.length && userAnswer.every(val => question.answer.includes(val)) && question.answer.every(val => userAnswer.includes(val)));
    } else if (question.type === 'cloze') {
        const clozeInput = quizQuestionText.querySelector('.cloze-input');
        userAnswer = clozeInput ? [clozeInput.value.trim()] : [];
        isCorrect = (userAnswer.length === 1 && question.answer.length === 1 && userAnswer[0].toLowerCase() === question.answer[0].toLowerCase());
    }
    userAnswers[currentQuestionIndex] = userAnswer;
    if (isCorrect) {
        quizResults.totalCorrect++;
        if (quizResults.questionTypeCorrect[question.type] !== undefined) {
            quizResults.questionTypeCorrect[question.type]++;
        }
    }
    feedbackArea.classList.remove('hidden');
    submitAnswerBtn.classList.add('hidden');
    nextQuestionBtn.classList.remove('hidden');
    feedbackMessage.textContent = isCorrect ? '✅ 恭喜您，回答正確！' : '❌ 很可惜，回答錯誤。';
    feedbackMessage.className = `text-lg font-semibold mb-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`;
    explanationText.innerHTML = `
        <p><strong>正確答案:</strong> ${question.answer.join(', ')}</p>
        <p><strong>您的回答:</strong> ${userAnswer.length > 0 ? userAnswer.join(', ' ) : '未作答'}</p>
        <p><strong>詳盡解析:</strong> ${question.explanation}</p>
    `;
    if (question.type === 'single-choice' || question.type === 'multiple-choice') {
        quizOptions.querySelectorAll('label').forEach(label => {
            const optionValue = label.querySelector('input').value;
            label.classList.remove('option-selected');
            if (question.answer.includes(optionValue)) {
                label.classList.add('option-correct');
            } else if (userAnswer.includes(optionValue)) {
                label.classList.add('option-incorrect');
            }
            label.querySelector('input').disabled = true;
        });
    } else if (question.type === 'cloze') {
        const clozeInput = quizQuestionText.querySelector('.cloze-input');
        if (clozeInput) {
            clozeInput.disabled = true;
            if (isCorrect) {
                clozeInput.classList.add('border-green-500', 'bg-green-50');
            } else {
                clozeInput.classList.add('border-red-500', 'bg-red-50');
                const correctAnswerSpan = document.createElement('span');
                correctAnswerSpan.className = 'ml-2 text-green-600 font-semibold';
                correctAnswerSpan.textContent = `(正確答案: ${question.answer[0]})`;
                clozeInput.parentNode.insertBefore(correctAnswerSpan, clozeInput.nextSibling);
            }
        }
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    quizOptions.querySelectorAll('label').forEach(label => {
        label.classList.remove('option-selected', 'option-correct', 'option-incorrect');
        label.querySelector('input').disabled = false;
        label.querySelector('input').checked = false;
    });
    displayQuestion();
}

function showResults() {
    showSection('resultsPanel');
    updateProgressBar();
    if (totalScoreChart) totalScoreChart.destroy();
    if (questionTypeAccuracyChart) questionTypeAccuracyChart.destroy();
    const scorePercentage = quizQuestions.length > 0 ? (quizResults.totalCorrect / quizQuestions.length) * 100 : 0;
    const totalScoreData = {
        labels: ['正確', '錯誤'],
        datasets: [{
            data: [quizResults.totalCorrect, quizQuestions.length - quizResults.totalCorrect],
            backgroundColor: ['#4CAF50', '#F44336'],
            hoverOffset: 4
        }]
    };
    totalScoreChart = new Chart(totalScoreChartCanvas, {
        type: 'pie',
        data: totalScoreData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: `總成績: ${scorePercentage.toFixed(2)}%`, font: { size: 18 } }
            }
        },
    });
    const typeLabels = Object.keys(quizResults.questionTypeCounts);
    const typeAccuracyData = typeLabels.map(type => {
        const total = quizResults.questionTypeCounts[type];
        const correct = quizResults.questionTypeCorrect[type];
        return total > 0 ? (correct / total) * 100 : 0;
    });
    questionTypeAccuracyChart = new Chart(questionTypeAccuracyChartCanvas, {
        type: 'bar',
        data: {
            labels: typeLabels.map(type => {
                if (type === 'single-choice') return '單選題';
                if (type === 'multiple-choice') return '多選題';
                if (type === 'cloze') return '克漏字';
                return type;
            }),
            datasets: [{
                label: '正確率 (%)',
                data: typeAccuracyData,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: '正確率 (%)' }
                }
            },
            plugins: {
                legend: { display: false },
                title: { display: true, text: '各題型正確率', font: { size: 18 } }
            }
        }
    });
}
