const question = document.querySelector('.question');
const topicDisplays = document.querySelectorAll('.topic-hint');
const answerInput = document.querySelector('.answer-input');
const submitButton = document.querySelector(".submit-answer");
var ans;
var currentTopic;
var shouldApproximate;

// Changes HTML of problem parts
function start_problem(topic) {
    const q = generate_problem(topic == null, topic);
    ans = q.answer;
    currentTopic = q.topic;
    shouldApproximate = q.approximate;

    question.innerHTML = q.question;
    topicDisplays.forEach((obj) => {
        set_topic_display(obj, false);
    });
}

// Checks if user is submitting correct answer
function is_correct() {
    if (!shouldApproximate) {
        return parseFloat(answerInput.value) == ans;
    }

    return Math.abs((ans - parseFloat(answerInput.value))/ans) <= 0.05;
}

// Toggles visiblity of topic hint
function set_topic_display(obj, isShowing) {
    obj.dataset.showing = isShowing;
    if (isShowing) {
        obj.innerHTML = currentTopic;
    } else {
        obj.innerHTML = "Reveal topic...";
    }
}

topicDisplays.forEach((obj) => {
    obj.addEventListener("click", (e) => {
        set_topic_display(obj, true);
    });
});