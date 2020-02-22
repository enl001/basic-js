module.exports = function repeater(str, options) { 

    let addition = (options['addition'] !== undefined)? (options['addition'] != null)? options.addition.toString(): 'null' :'';
    let additionRepeatTimes = (options['additionRepeatTimes'] != undefined)? options.additionRepeatTimes : 0;
    let additionSeparator = (options['additionSeparator'] != undefined)? options.additionSeparator : '|';
    let repeatTimes = (options['repeatTimes'] != undefined)? options.repeatTimes : 0;
    let separator = (options['separator'] != undefined)? options.separator : '+';

    if(str == null) str = 'null';    
    
    if (additionRepeatTimes > 1) addition = combine(addition, additionRepeatTimes, additionSeparator);
    return (repeatTimes > 0) ? combine(str.toString()+addition, repeatTimes, separator) : str.toString()+addition;    
}
  
function combine(string, nTimes, separator){
    return Array(nTimes).fill(string).join(separator);
}