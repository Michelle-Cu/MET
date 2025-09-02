// 前端專用 script.js (無管理員功能)
// Michelle English Tutor - Quiz Only

// 直接寫死 quizQuestions 和 articleContent
const quizQuestions = [
  {
    "question": "What is Alec Van Khajadourian's age?",
    "type": "single-choice",
    "answer": [
      "Five years old"
    ],
    "explanation": "The article states that Alec Van Khajadourian is only five years old.",
    "options": [
      "Three years old",
      "Five years old",
      "Seven years old",
      "Nine years old"
    ]
  },
  {
    "question": "What is the name of the venue where Alec performed?",
    "type": "single-choice",
    "answer": [
      "Carnegie Hall"
    ],
    "explanation": "The article mentions that Alec performed at New York City's famous Carnegie Hall.",
    "options": [
      "Lincoln Center",
      "Madison Square Garden",
      "Carnegie Hall",
      "Radio City Music Hall"
    ]
  },
  {
    "question": "In which city is Carnegie Hall located?",
    "type": "single-choice",
    "answer": [
      "New York City"
    ],
    "explanation": "The article explicitly states that Carnegie Hall is in New York City.",
    "options": [
      "Los Angeles",
      "Chicago",
      "New York City",
      "Boston"
    ]
  },
  {
    "question": "What type of attire did Alec wear for his performance?",
    "type": "single-choice",
    "answer": [
      "Black-and-white tuxedo"
    ],
    "explanation": "The article describes Alec as wearing a black-and-white tuxedo.",
    "options": [
      "Blue suit",
      "Red dress",
      "Black-and-white tuxedo",
      "Casual jeans and a t-shirt"
    ]
  },
  {
    "question": "What event did Alec perform at?",
    "type": "single-choice",
    "answer": [
      "NY Classical Debut Awards Gala Concert"
    ],
    "explanation": "The article specifies that Alec performed at the NY Classical Debut Awards Gala Concert.",
    "options": [
      "Grammy Awards",
      "MTV Music Awards",
      "NY Classical Debut Awards Gala Concert",
      "School Talent Show"
    ]
  },
  {
    "question": "When did Alec perform at Carnegie Hall?",
    "type": "single-choice",
    "answer": [
      "July 20, 2025"
    ],
    "explanation": "The article states that Alec performed on July 20, 2025.",
    "options": [
      "June 15, 2024",
      "July 20, 2025",
      "August 10, 2026",
      "September 1, 2023"
    ]
  },
  {
    "question": "At what age could Alec already play music by Bach and Beethoven?",
    "type": "single-choice",
    "answer": [
      "Four"
    ],
    "explanation": "The article says that by age four, he could already play music by great composers like Bach and Beethoven.",
    "options": [
      "Two",
      "Four",
      "Six",
      "Eight"
    ]
  },
  {
    "question": "What does it mean to have \"perfect pitch\"?",
    "type": "single-choice",
    "answer": [
      "Recognize musical notes just by hearing them"
    ],
    "explanation": "The article defines 'perfect pitch' as the ability to recognize musical notes just by hearing them.",
    "options": [
      "Play the piano very fast",
      "Compose original music",
      "Sing very high notes",
      "Recognize musical notes just by hearing them"
    ]
  },
  {
    "question": "What is Alec inspiring children around the world to do?",
    "type": "single-choice",
    "answer": [
      "Follow their musical dreams"
    ],
    "explanation": "The article states that Alec is inspiring children around the world to follow their musical dreams.",
    "options": [
      "Become doctors",
      "Become athletes",
      "Follow their musical dreams",
      "Become scientists"
    ]
  },
  {
    "question": "Alec has won prizes in which type of competitions?",
    "type": "single-choice",
    "answer": [
      "International music competitions"
    ],
    "explanation": "The article states that Alec has already won prizes in international music competitions.",
    "options": [
      "Local spelling bees",
      "National science fairs",
      "International music competitions",
      "Regional sports tournaments"
    ]
  }
];
const articleContent = "# **Five-Year-Old Piano Prodigy Makes History at Carnegie Hall**\n\nAlec Van Khajadourian, only five years old, has become the youngest person ever to perform at New York City’s famous Carnegie Hall. On July 20, 2025, he played at the NY Classical Debut Awards Gala Concert, an event that invites top musicians from around the world.\n\nWearing a black-and-white tuxedo, Alec walked on stage with confidence. With his parents proudly watching, he performed two piano pieces perfectly. “I was so excited,” he said afterward.\n\nAlec’s love for piano started when he was a toddler. His parents remember him reaching for the keys with a big smile on his face. By age four, he could already play music by great composers like Bach and Beethoven. He also has *perfect pitch*, a rare ability (about 1 in 100,000 people) that lets him recognize musical notes just by hearing them.\n\nHe has already won prizes in international music competitions. With his debut at Carnegie Hall, Alec is now inspiring children around the world to follow their musical dreams.";

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
