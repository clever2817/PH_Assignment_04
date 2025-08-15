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

const result = totalFine("Gorib tai ticket katinai");

console.log(result);
