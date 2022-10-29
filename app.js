////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// APP STATE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}
}

let questions = []
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN DOM ELEMENT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const $question = $("#question");
const $a = $("#A");
const $b = $("#B");
const $c = $("#C");
const $d = $("#D");
const p1score = $("#player1 h4");
const p2score = $("#player2 h4");

console.log(p2score, p1score);

const URL = "https://cdn.contentful.com/spaces/wppm258xelxu/environments/master/entries?access_token=kXoSt3WXJZUsg8-akhTlSFtc47CUOpEmtaPKs2a_saI"
$.ajax(URL)
    .then((data) => {
        questions = data.items.map((q) => q.fields);
        console.log(data);
        console.log(questions);
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const setBoard = (q) => {
    // getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    cons randomQuestion = q[randomIndex]

    // update question
    $question.innerText = randomQuestion.question
    $a.text() = randomQuestion.a
    $b.text() = randomQuestion.b
    $c.text() = randomQuestion.c
    $d.text() = randomQuestion.a

    // update player scores
    $p1score.text() = state.player1
    $p2score.text() = state.player1

}