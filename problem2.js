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

const result = onlyCharacter(true);

console.log(result);