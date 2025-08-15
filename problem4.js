// Problem-04: Same Same But Different  😕 

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


const result = isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]);

console.log(result);