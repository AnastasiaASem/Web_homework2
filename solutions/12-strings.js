import { split } from "lodash";

// BEGIN
export default function makeCensored (text, stopWord) {
    let sentence = text.split(' ');

    for (let i=0; i < sentence.length; i++){

        if (stopWord.includes(sentence[i])){
            sentence[i] = '$#%!';
        }
    }

    return sentence.join(' ');
}
// END