import { result } from "lodash";

// BEGIN
export default function getSameParity (array) {
    if (array.length === 0){
        return [];
    }

    let result = [];
    if( Math.abs(array[0]) % 2 === 0){
        for ( let i = 0 ; i < array.length; i++){
            if(Math.abs(array[i]) %2 == 0){
                result.push(array[i]);
            }
        }
    }

    if( Math.abs(array[0]) % 2 !== 0){
        for ( let i = 0 ; i < array.length; i++){
            if(Math.abs(array[i]) %2 != 0){
                result.push(array[i]);
            }
        }
    }

    return result;
}
// END