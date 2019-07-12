const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function main() {
    rock.addEventListener('click', function () {
        compare('rock');
    })

    paper.addEventListener('click', function () {
        compare('paper');
    })

    scissors.addEventListener('click', function () {
        compare('scissors');
    })
}

function compare(choice) {
    let comp = (Math.floor(Math.random() * 3) + 1);

    if (comp === 1) {
        comp = 'rock';
    } else if (comp === 2) {
        comp = 'paper';
    } else {
        comp = 'scissors';
    }

    if (choice === comp) {
        result('D', choice, comp);
    } else if (choice === 'rock') {
        if (comp === 'paper') {
            result('L', choice, comp);
        } else {
            result('W', choice, comp);
        }
    } else if (choice === 'paper') {
        if (comp === 'rock') {
            result('W', choice, comp);
        } else {
            result('L', choice, comp);
        }
    } else {
        if (comp === 'rock') {
            result('L', choice, comp);
        } else {
            result('W', choice, comp);
        }
    }
}

function result(res, choice, comp) {
    if (res === "D") {
        alert(`You: ${choice}\nComp: ${comp}\nDRAW`);
    } else if (res === "W") {
        alert(`You: ${choice}\nComp: ${comp}\nWIN`);
    } else if (res === "L") {
        alert(`You: ${choice}\nComp: ${comp}\nLOSE`);
    }
}

main();