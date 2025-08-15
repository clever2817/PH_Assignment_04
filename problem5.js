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


const result = resultReport(100);

console.log(result);