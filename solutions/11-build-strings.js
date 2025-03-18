// BEGIN
export default function buildDefinitionList (array) {
    if (array.length === 0){
        return '';
    }

    const result =['<dl>'];
    
    for (const[termin, description] of array){
        result.push(`<dt>${termin}</dt><dd>${description}</dd>`);
    }

    result.push('</dl>');
    return result.join('');
}
// END