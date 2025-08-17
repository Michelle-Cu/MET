// 前端專用 script.js (無管理員功能)
// Michelle English Tutor - Quiz Only

// 直接寫死 quizQuestions 和 articleContent
const quizQuestions = [
  {
    "answer": [
      "Lenny Maughan"
    ],
    "explanation": "The article states that Lenny Maughan transforms San Francisco streets into stunning GPS art.",
    "question": "Who transforms San Francisco streets into stunning GPS art?",
    "type": "single-choice",
    "options": [
      "Bob Ross",
      "Lenny Maughan",
      "Banksy",
      "Michelangelo"
    ]
  },
  {
    "answer": [
      "paper map of San Francisco"
    ],
    "explanation": "The article says that Maughan carefully plans his routes on a paper map of San Francisco before running.",
    "question": "Before running, Maughan plans his routes on a:",
    "type": "single-choice",
    "options": [
      "computer screen",
      "his phone",
      "paper map of San Francisco",
      "his smartwatch"
    ]
  },
  {
    "answer": [
      "Strava"
    ],
    "explanation": "The text indicates that Maughan uses Strava, a GPS fitness app, to record each run.",
    "question": "Maughan records each run with which GPS fitness app?",
    "type": "single-choice",
    "options": [
      "Google Maps",
      "Fitbit",
      "Nike Run Club",
      "Strava"
    ]
  },
  {
    "answer": [
      "simple shapes like a heart",
      "complex images like the Star Trek Enterprise",
      "portrait of artist Frida Kahlo"
    ],
    "explanation": "The article mentions that Maughan has created drawings ranging from simple shapes like a heart to complex images like the Star Trek Enterprise and a portrait of Frida Kahlo.",
    "question": "According to the article, which of the following has Maughan drawn?",
    "type": "multiple-choice",
    "options": [
      "simple shapes like a heart",
      "complex images like the Star Trek Enterprise",
      "portrait of artist Frida Kahlo",
      "the Eiffel Tower"
    ]
  },
  {
    "answer": [
      "40 miles (64 km)"
    ],
    "explanation": "The article specifies that Maughan ran 40 miles (64 km) to draw a snake for Lunar New Year.",
    "question": "How far did Maughan run to draw a snake for Lunar New Year?",
    "type": "single-choice",
    "options": [
      "10 miles (16 km)",
      "20 miles (32 km)",
      "30 miles (48 km)",
      "40 miles (64 km)"
    ]
  },
  {
    "answer": [
      "San Francisco"
    ],
    "explanation": "Maughan states that his canvas is San Francisco.",
    "question": "According to Maughan, his canvas is:",
    "type": "single-choice",
    "options": [
      "New York City",
      "San Francisco",
      "Los Angeles",
      "Chicago"
    ]
  },
  {
    "answer": [
      "He loves running",
      "He loves art",
      "He is a human Etch A Sketch"
    ],
    "explanation": "The article states Maughan loves running and art, combining them both. He also calls himself a 'human Etch A Sketch'.",
    "question": "Which of the following statements are true about Lenny Maughan?",
    "type": "multiple-choice",
    "options": [
      "He loves running",
      "He loves art",
      "He hates planning routes",
      "He is a human Etch A Sketch"
    ]
  }
];
const articleContent = "# **Runner Transforms San Francisco Streets Into Stunning GPS Art**\n\nMost runners choose their paths based on distance or terrain. Some prefer flat roads, while others take on hills for a harder workout. But for Lenny Maughan, running is about making art with his footsteps.\n\nMaughan calls himself a “human Etch A Sketch.” He was inspired by GPS drawings made through running apps. As a kid, he loved drawing funny pictures of people, but he didn’t return to art until about 10 years ago.\n\nBefore running, Maughan carefully plans his routes on a paper map of San Francisco. He often redraws them several times to make sure the final picture will be clear and recognizable.\n\nHe records each run with **Strava**, a GPS fitness app. Strava only shows the finished image after the run is over, so he has to follow the plan exactly. Even one wrong turn can ruin the picture.\n\n“It’s such a great feeling when you finish and finally see the artwork you imagined,” he said.\n\nOver the last 10 years, Maughan has created more than 50 drawings, from simple shapes like a heart to complex images like the Star Trek Enterprise. In February 2025, he ran 40 miles (64 km) in 10 hours to draw a snake for Lunar New Year. His most famous piece is a portrait of artist Frida Kahlo, which took over six hours and almost 29 miles (46 km) to complete.\n\n“I like to say my canvas is San Francisco,” Maughan said. “I love running and I love art. This combines them both.”";

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
