let btn = document.querySelectorAll(".btn");
let player = true;
let game = [3, 4, 5, 6, 7, 8, 9, 10, 11];
let start = false;
let square = 0;
let draw = false;
let im;
document.querySelector(".play-btn").addEventListener("click", function () {
    start = true;
    this.style.display = "none";
});

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (start) {
            if (!this.firstElementChild.hasAttribute("src")) {
                square++;
                let j = this.getAttribute("id");
                if (player) {
                    player = false;
                    game[j] = 1;
                    im="cross.jpg";
                }
                else {
                    im = "circle.png";
                    player = true;
                    game[j] = 2;
                }
                this.firstElementChild.setAttribute("src", "./" + im);

            }
        }
        result();

    })
};
function result() {
    if (game[0] == game[1] && game[1] == game[2] && game[0] == game[2]) {
        resultDecide();
    }
    if (game[3] == game[4] && game[4] == game[5] && game[3] == game[5]) {
        resultDecide();
    }
    if (game[6] == game[7] && game[7] == game[8] && game[6] == game[8]) {
        resultDecide();
    }
    else if (game[0] == game[3] && game[3] == game[6] && game[0] == game[6]) {
        resultDecide();
    }
    else if (game[1] == game[4] && game[4] == game[7] && game[1] == game[7]) {
        resultDecide();
    }
    else if (game[2] == game[5] && game[5] == game[8] && game[2] == game[8]) {
        resultDecide();
    }
    else if (game[0] == game[4] && game[4] == game[8] && game[0] == game[8]) {
        resultDecide();
    }
    else if (game[2] == game[4] && game[4] == game[6] && game[2] == game[6]) {
        resultDecide();
    }
    else if (square == 9) {
        draw = true;
        resultDecide();
    }
}

function resultDecide() {
    let playerName;
    if (player) {
        playerName = "Player 2";
    }
    else {
        playerName = "Player 1";
    }

    if (draw && square==9) {
        document.querySelector("h1").innerHTML = "Draw !";
    }
    else {
        document.querySelector("h1").innerHTML = playerName + " won !";
    }
    document.querySelector("h1").style.display = "block";
    start = false;
    document.querySelector(".exit-btn").style.display = "block";
}
