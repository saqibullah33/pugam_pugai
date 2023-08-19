const MOVES = {
    FRONT: "front",
    BACK: "back"
}

const Moves_Sources = {
    FRONT: "front hand.svg",
    BACK: "back hand.svg"
}

const comp1 = {
    move: MOVES.FRONT
}

const comp2 = {
    move: MOVES.FRONT
}

const p1 = {
    move: MOVES.FRONT
}

getRandomIndex = () => {
    return Math.random() > 0.5 ? 1 : 0;
}

calculateMoves = () => {
    const moves = [MOVES.FRONT, MOVES.BACK]
    comp1.move = moves[getRandomIndex()] //either 0,1
    comp2.move = moves[getRandomIndex()]
    console.log("this is c1 -> " + comp1.move)
    console.log("this is c2 -> " + comp2.move)
    const userMove = prompt("choose front or back")
    if (userMove == null) {
        alert("invalid")
        throw new Error("invalid")
    }
    if
        (userMove.toLowerCase() != MOVES.FRONT &&
        userMove.toLowerCase() != MOVES.BACK) {
        alert("choose either Front or back")
        throw new Error("either front or back ")
    }
    p1.move = userMove.toLowerCase();
    console.log("this is -> " + p1.move)
}

const render = () => {
    const Comp1Img = document.getElementById("comp1");
    const Comp2Img = document.getElementById("comp2");
    const player1Img = document.getElementById("p1");


    if (comp1.move === MOVES.FRONT) {
        Comp1Img.src = Moves_Sources.FRONT;
    }
    else {
        Comp1Img.src = Moves_Sources.BACK;
    }

    if (comp2.move === MOVES.FRONT) {
        Comp2Img.src = Moves_Sources.FRONT;
    }
    else {
        Comp2Img.src = Moves_Sources.BACK;
    }

    if (p1.move === MOVES.FRONT) {
        player1Img.src = Moves_Sources.FRONT
    }
    else {
        player1Img.src = Moves_Sources.BACK;
    }
}
const player = ["comp1", "comp2", "player1"]
result = () => {

    const Res = [comp1.move, comp2.move, p1.move]
    console.log(Res)

    let frontCount = 0;  //count frontCount
    let backcount = 0;
    let fwinner; //store Front winner index
    let bwinner;
    let fname;  //store Front winnerName
    let bname;

    // loop for front winner 


    for (let i = 0; i < Res.length; i++) {
        if (Res[i] == MOVES.FRONT) {
            frontCount++;
            fwinner = i;
        }

    }
    if (frontCount == 1) alert("winner is " + player[fwinner] + " due front side")


    for (let i = 0; i < Res.length; i++) {
        if (Res[i] == MOVES.BACK) {
            backcount++;
            bwinner = i;
        }

    }
    if (backcount == 1) alert("winner is " + player[bwinner] + " due to backside")

    //ideal case if all are front or all or back
    if (frontCount == 3 || backcount == 3) {
        alert("No one is winner try again")
    }
}

isPlayAgain=()=>{

    istrue=confirm("do you want play again?")
 istrue ? main() : stop

}

main=()=>{

    calculateMoves();
    render()
    setTimeout(result,300)
    setTimeout(isPlayAgain,400)
}


main()

