const _ = require("lodash"); 

// BEGIN
export default function getSameCount (array1, array2) {
    let uniqArray1 = _.uniq(array1);
    let uniqArray2 = _.uniq(array2);
    let result =[];
    for (let i=0; i < uniqArray1.length; i++ ){

        for (let j=0; j < uniqArray2.length; j++ )
            if (uniqArray1[i] === uniqArray2[j]){
                result.push(uniqArray1[i]);
            }
    }

    return result.length;
}
// END