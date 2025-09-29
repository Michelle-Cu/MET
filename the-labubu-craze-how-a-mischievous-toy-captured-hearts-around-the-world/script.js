// 前端專用 script.js (無管理員功能)
// Michelle English Tutor - Quiz Only

// 直接寫死 quizQuestions 和 articleContent
const quizQuestions = [
  {
    "question": "What is the most distinctive feature of Labubu's appearance?",
    "type": "single-choice",
    "answer": [
      "Crazy hair, jagged little teeth, and funny smile"
    ],
    "explanation": "The article explicitly mentions Labubu's 'crazy hair, jagged little teeth, and funny smile' as key features contributing to its appeal.",
    "options": [
      "Large, expressive eyes",
      "Crazy hair, jagged little teeth, and funny smile",
      "A long, pointed nose",
      "Colorful, patterned clothing"
    ]
  },
  {
    "question": "Which of the following is NOT true about Kasing Lung?",
    "type": "single-choice",
    "answer": [
      "He created Labubu in the Netherlands."
    ],
    "explanation": "Kasing Lung is from Hong Kong and moved to the Netherlands when he was seven. The article states that he is from Hong Kong, implying he created Labubu in Hong Kong.",
    "options": [
      "He is from Hong Kong.",
      "He moved to the Netherlands at a young age.",
      "He created Labubu in the Netherlands.",
      "He created 'The Monsters Trilogy'."
    ]
  },
  {
    "question": "What is the name of the toy company that started mass-producing Labubu toys?",
    "type": "single-choice",
    "answer": [
      "Pop Mart"
    ],
    "explanation": "The article explicitly states that 'a toy company called Pop Mart in China started making more Labubu toys'.",
    "options": [
      "Hasbro",
      "Mattel",
      "Pop Mart",
      "Bandai"
    ]
  },
  {
    "question": "What sales strategy did Pop Mart use to increase excitement around collecting Labubu toys?",
    "type": "single-choice",
    "answer": [
      "Selling them in blind boxes"
    ],
    "explanation": "The article mentions that Pop Mart 'sold them in blind boxes — so when you buy one, you don’t know which version is inside. This made people more excited to collect them'.",
    "options": [
      "Offering discounts for bulk purchases",
      "Selling them in limited edition sets",
      "Selling them in blind boxes",
      "Collaborating with famous artists on designs"
    ]
  },
  {
    "question": "How did social media contribute to the Labubu craze?",
    "type": "multiple-choice",
    "answer": [
      "Fans posted videos of opening boxes",
      "Fans showed off their collections",
      "Fans dressed up like Labubu"
    ],
    "explanation": "The article states, 'On TikTok, fans posted videos of opening boxes, showing their collections, and even dressing up like Labubu'. These are all examples of how social media fueled the craze.",
    "options": [
      "Fans posted videos of opening boxes",
      "Fans shared news articles about Labubu",
      "Fans showed off their collections",
      "Fans dressed up like Labubu"
    ]
  },
  {
    "question": "What makes some Labubu toys so valuable?",
    "type": "single-choice",
    "answer": [
      "Their rarity"
    ],
    "explanation": "The article states that 'One reason Labubu is so popular is because it's hard to find. Some versions are super rare'. This indicates that rarity is a major factor in their value.",
    "options": [
      "Their size",
      "Their rarity",
      "Their color",
      "Their material"
    ]
  },
  {
    "question": "Which of the following celebrities are mentioned as fans of Labubu?",
    "type": "multiple-choice",
    "answer": [
      "Rihanna",
      "Naomi Osaka"
    ],
    "explanation": "The article specifically mentions 'Even stars like Rihanna and Naomi Osaka became fans!'.",
    "options": [
      "Taylor Swift",
      "Rihanna",
      "Naomi Osaka",
      "Beyonce"
    ]
  },
  {
    "question": "In 2024, Labubu sales accounted for what percentage of Pop Mart's total income?",
    "type": "single-choice",
    "answer": [
      "23%"
    ],
    "explanation": "The article mentions, 'In 2024, it made over $420 million in sales — that's 23% of all the company’s income'.",
    "options": [
      "10%",
      "23%",
      "50%",
      "75%"
    ]
  },
  {
    "question": "What was the original medium through which Kasing Lung introduced the Labubu character?",
    "type": "single-choice",
    "answer": [
      "A picture book series"
    ],
    "explanation": "The article states 'In 2015, he made a picture book series called The Monsters Trilogy, which had over 100 different characters — all small, elf-like monsters with unique looks and personalities. But the most famous one is Labubu.'",
    "options": [
      "A video game",
      "A comic book",
      "A picture book series",
      "An animated film"
    ]
  },
  {
    "question": "The first Labubu toys were made by hand in what year?",
    "type": "single-choice",
    "answer": [
      "2019"
    ],
    "explanation": "The article clearly states: 'In 2019, Lung made the first limited-edition Labubu toy by hand.'",
    "options": [
      "2015",
      "2017",
      "2019",
      "2024"
    ]
  }
];
const articleContent = "# **The Labubu Craze: How A Mischievous Toy Captured Hearts Around The World**\n\nIn the world of designer toys, one character is super popular — Labubu! With its crazy hair, jagged little teeth, and funny smile, this little monster has become a favorite for toy collectors around the world.\n\nKasing Lung, the creator of the plushie called Labubu, is from Hong Kong. When he was seven years old, he moved to the Netherlands. There, he loved reading stories about Nordic elves. In 2015, he made a picture book series called The Monsters Trilogy, which had over 100 different characters — all small, elf-like monsters with unique looks and personalities. But the most famous one is Labubu.\n\nIn 2019, Lung made the first limited-edition Labubu toy by hand. At first, there were only a few fans, but more and more people grew to love them! Later that year, a toy company called Pop Mart in China started making more Labubu toys. They sold them in blind boxes — so when you buy one, you don’t know which version is inside. This made people more excited to collect them.\n\nSocial media gave the craze an extra boost. On TikTok, fans posted videos of opening boxes, showing their collections, and even dressing up like Labubu. Some people painted their own custom Labubu designs. Even stars like Rihanna and Naomi Osaka became fans!\n\nOne reason Labubu is so popular is because it's hard to find. Some versions are super rare — only 1 in every 72 boxes! Most Labubu toys cost about $28, but rare ones can be resold for $200, $7,000, or even more! In early 2024, a life-size Labubu plushie was sold in China for nearly $150,000!\n\nToday, Labubu is the #1 best-selling toy at Pop Mart. In 2024, it made over $420 million in sales — that's 23% of all the company’s income. Not bad for a cute little monster that started in a storybook!";

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
