// Problem-01 : Train TT's Fine Calculator 

function totalFine( fare ) {
    // You have to write your code here
    if(typeof(fare) === "number" && fare > 0)
    {
        const finalFine = fare + (fare * 0.2) + 30;

        return finalFine;
    }

    else
    {
        return "Invalid";
    }
}



// Problem-02 : Clean & Capitalize Characters

function  onlyCharacter( str ) {
    // You have to write your code here

    if(typeof(str) === "string")
    {
        const strWithoutSpaces = str.split(" ").join("");

        const finalStr = strWithoutSpaces.toUpperCase();

        return finalStr;
    }

    else
    {
        return "Invalid";
    }
}


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


// Problem-04: Same Same But Different 

function  isSame(arr1 , arr2 ) {
    // You have to write your code here

    if(Array.isArray(arr1) === true && Array.isArray(arr2) === true)
    {
        if(arr1.length === arr2.length)
        {

            let isSimilar = true;

            for(let i=0; i<arr1.length; i++)
            {
                if(arr1[i] !== arr2[i])
                {
                    isSimilar = false;
                    break;
                }
            }

            if(isSimilar)
            {
                return true;
            }

            else
            {
                return false;
            }
        }

        else
        {
            return false;
        }
    }

    else
    {
        return "Invalid";
    }
}


// Problem-05: Exam Result Report Generator

function  resultReport( marks ) {
    // You have to write your code here

    if(Array.isArray(marks) === true)
    {
        let passCount = 0;
        let failCount = 0;
        let totalScore = 0;

        for(let mark of marks)
        {
            if(mark >= 40)
            {
                passCount++;
            }

            else
            {
                failCount++;
            }

            totalScore += mark;
        }

        let avgScore = 0;

        if(marks.length !== 0)
        {
            avgScore = Math.round(totalScore / marks.length);
        }

        const output = {
            finalScore : avgScore,
            pass : passCount,
            fail : failCount
        }

        return output;
    }

    else
    {
        return "Invalid";
    }
}