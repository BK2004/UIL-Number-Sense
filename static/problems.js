// Links topics to their question generation
const TOPIC_LIST = {
    "Double Digit Multiplication": DDM,
    "Multiplication by 11": M11,
    "Multiplication by Multiples of 25": M25s,
    "Common Fractions": CF,
    "Double and Half": DH,
    "Multiplication Near 100": Near100,
    "Square Numbers": SN,
}

// Common fractions
const COMMON_APPROXIMATE_FRACTIONS = [3, 6, 7, 9, 11, 12];

// Container function for generating questions
function generate_problem(random = true, topic) {    
    if (random) {
        topic = Object.keys(TOPIC_LIST)[Math.floor(Math.random() * Object.keys(TOPIC_LIST).length)];
    }

    var q = TOPIC_LIST[topic]();
    return new Question(topic, q[0], q[1], q[2] == null ? false : q[2]);
}

// Generate double digit multiplication problem
function DDM() {
    const n1 = random(10, 99);
    const n2 = random(10, 99);

    return [`${n1}*${n2}`, n1*n2];
}

// Generate multiplication by 11 problems
function M11() {
    const n1 = parseInt("1".repeat(random(2, 3)));
    const n2 = random(10, 299);

    return [`${n1}*${n2}`, n1*n2];
}

// Generate multiplication by multiples of 25 (25, 50, 75)
function M25s() {
    const n1 = 25 * random(1, 3);
    const n2 = random(10, 150);

    return [`${n1}*${n2}`, n1*n2];
}

// Generate problems about common fractions
function CF() {
    const n1 = random(2, 12);
    const n2 = random(1, n1 - 1);
    const n3 = random(10, 200);
    const p = random(1, 4);
    const n = Math.trunc(n2/n1*10**(3 + Math.max(0, p - 3)))/10**(3 + Math.max(0, p - 3)) * 10**p;
    var approx = false;

    if (COMMON_APPROXIMATE_FRACTIONS.includes(n1)) {
        approx = true;
    }

    return [`${n}*${n3}`, n*n3, approx];
}

// Generate double and half question
function DH() {
    const n1 = parseInt(random(2, 4) + "" + 5);
    const n2 = random(5, 70) * 2;

    return [`${n1}*${n2}`, n1*n2];
}

// Generate problem about multiplication near 100
function Near100() {
    const n1 = random(91, 109);
    const n2 = random(91, 109);

    return [`${n1}*${n2}`, n1*n2];
}

// Generate square number problem
function SN() {
    const n = random(2, 99);

    return [`${n}<sup>2</sup>`, n**2];
}

// Class for ease of access
class Question {
    constructor(topic, question, answer, approximate = false) {
        this.topic = topic;
        this.question = `<span class="highlight">` + question + `</span> =`;
        this.answer = answer;
        this.approximate = approximate;

        if (approximate) {
            this.question = "(*) " + this.question;
        }
    }
}