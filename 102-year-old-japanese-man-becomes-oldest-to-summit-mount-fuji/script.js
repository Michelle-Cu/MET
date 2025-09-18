// 前端專用 script.js (無管理員功能)
// Michelle English Tutor - Quiz Only

// 直接寫死 quizQuestions 和 articleContent
const quizQuestions = [
  {
    "question": "What is the height of Mount Fuji?",
    "type": "single-choice",
    "answer": [
      "3,776 meters"
    ],
    "explanation": "The article states that Mount Fuji is 3,776 meters (12,388 feet) high.",
    "options": [
      "3,776 meters",
      "4,000 meters",
      "3,000 meters",
      "2,500 meters"
    ]
  },
  {
    "question": "What challenges are associated with climbing Mount Fuji?",
    "type": "multiple-choice",
    "answer": [
      "Hard trail",
      "Changing weather",
      "Loose rocks"
    ],
    "explanation": "The article mentions that the trail is hard, the weather changes quickly, and going down can be dangerous because of loose rocks.",
    "options": [
      "Hard trail",
      "Changing weather",
      "Loose rocks",
      "Smooth path"
    ]
  },
  {
    "question": "On what date did Kokichi Akuzawa reach the top of Mount Fuji?",
    "type": "single-choice",
    "answer": [
      "August 5, 2025"
    ],
    "explanation": "The article states that Kokichi Akuzawa reached the top of Mount Fuji on August 5, 2025.",
    "options": [
      "August 5, 2025",
      "August 3, 2025",
      "August 4, 2025",
      "August 6, 2025"
    ]
  },
  {
    "question": "How old was Kokichi Akuzawa when he first climbed Mount Fuji?",
    "type": "single-choice",
    "answer": [
      "96"
    ],
    "explanation": "The article mentions that Akuzawa had already climbed Mount Fuji once when he was 96 years old.",
    "options": [
      "96",
      "100",
      "90",
      "85"
    ]
  },
  {
    "question": "What challenges did Akuzawa face while preparing to climb Mount Fuji at 102 years old?",
    "type": "multiple-choice",
    "answer": [
      "A fall while hiking",
      "Shingles",
      "Heart problems"
    ],
    "explanation": "The article states that he fell while hiking, got shingles, and had some heart problems before climbing.",
    "options": [
      "A fall while hiking",
      "Shingles",
      "Heart problems",
      "Lack of motivation"
    ]
  },
  {
    "question": "Which trail did Akuzawa and his group use to climb Mount Fuji?",
    "type": "single-choice",
    "answer": [
      "Yoshida Trail"
    ],
    "explanation": "The article mentions that they used the Yoshida Trail, which is the easiest of the four main trails.",
    "options": [
      "Yoshida Trail",
      "Subashiri Trail",
      "Gotemba Trail",
      "Fujinomiya Trail"
    ]
  },
  {
    "question": "Approximately how long does it take most people to climb Mount Fuji?",
    "type": "single-choice",
    "answer": [
      "6 hours"
    ],
    "explanation": "The article states that most people climb Mount Fuji in about 6 hours.",
    "options": [
      "6 hours",
      "1 day",
      "12 hours",
      "2 days"
    ]
  },
  {
    "question": "What made it difficult for Akuzawa to breathe as he climbed higher?",
    "type": "single-choice",
    "answer": [
      "Thin air"
    ],
    "explanation": "The article mentions that the thin air made it very hard to breathe.",
    "options": [
      "Thin air",
      "Pollution",
      "Lack of oxygen",
      "Strong winds"
    ]
  },
  {
    "question": "Who encouraged Akuzawa to keep going when he almost gave up on the last day?",
    "type": "single-choice",
    "answer": [
      "His daughter"
    ],
    "explanation": "The article states that his daughter encouraged him to keep going.",
    "options": [
      "His daughter",
      "His son",
      "A fellow climber",
      "A guide"
    ]
  },
  {
    "question": "What did Akuzawa do when he reached the summit of Mount Fuji? Choose all options that apply.",
    "type": "multiple-choice",
    "answer": [
      "Signed the visitors book",
      "Celebrated his success"
    ],
    "explanation": "The article states that he signed the visitors book at the shrine on the summit and celebrated his success.",
    "options": [
      "Signed the visitors book",
      "Planted a flag",
      "Celebrated his success",
      "Started descending immediately"
    ]
  }
];
const articleContent = "# 102-Year-Old Japanese Man Becomes Oldest To Summit Mount Fuji\n\nClimbing Mount Fuji, the tallest mountain in Japan, is not easy — even for strong hikers! The mountain is 3,776 meters (12,388 feet) high. The trail is hard, the weather changes quickly, and going down can be dangerous because of loose rocks.\n\nBut none of that stopped Kokichi Akuzawa, a 102-year-old man from Japan. On August 5, 2025, he became the oldest person to reach the top of Mount Fuji. He even got a Guinness World Record!\n\nAkuzawa loves climbing. He had already climbed Mount Fuji once when he was 96 years old. But he wanted to break the record, so he decided to climb it again at age 102.\n\nGetting ready was not easy. In January, he fell while hiking and got hurt. Then he got shingles and had some heart problems. But after recovering, he started training seriously. Every morning, he walked for an hour, and every week, he climbed smaller mountains.\n\nOn August 3, 2025, Akuzawa started his journey with a small group of people — including his 70-year-old daughter, Motoe. They used the Yoshida Trail, which is the easiest of the four main trails, but still very hard.\n\nMost people climb Mount Fuji in about 6 hours, but Akuzawa took three days. He stopped to rest and sleep at mountain huts. The higher he went, the colder and windier it got. The thin air made it very hard to breathe. On the last day, he almost gave up. But his daughter encouraged him to keep going.\n\nAt 11:00 a.m. on August 5, Akuzawa finally reached the top! He signed the visitors book at the shrine on the summit and celebrated his success.\n\n\"It was very hard,\" Akuzawa said. \"But I made it to the top. I couldn’t have done it without help. I feel very happy.\"\n\nHe doesn’t plan to climb again — for now. But he added with a smile, “If you ask me next year, I might say something different!”";

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
