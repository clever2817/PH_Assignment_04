// Problem-03 : FIFA Best Team Award 

function  bestTeam( player1, player2 ) {
    // You have to write your code here

    if((typeof(player1) === "object" && Array.isArray(player1) === false) && (typeof(player2) === "object" && Array.isArray(player2) === false))
    {
        const player1Evaluation = player1.foul + player1.cardY + player1.cardR;

        const player2Evaluation = player2.foul + player2.cardY + player2.cardR;

        if(player1Evaluation < player2Evaluation)
        {
            return player1.name;
        }

        else if(player2Evaluation < player1Evaluation)
        {
            return player2.name;
        }

        else
        {
            return "Tie";
        }
    }

    else
    {
        return "Invalid";
    }
}

const result = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },[1,2,3,4]);

console.log(result);
