module.exports = function transform(arr) {
    if (!arr) throw 'undefined or null';
    if (!Array.isArray(arr)) throw 'not an array';
    let res = [];
    let position = 0;
    for(let i = 0; i < arr.length;i++){
        if(typeof(arr[i])=='string'){
            switch(arr[i]){
                case '--discard-next':
                    if(i<arr.length-1 && notControl(arr[i+1])) i++;
                    break;
                case '--discard-prev':
                    if (res.length > 0) res.pop();
                    // if (i>1) {
                    //     if(i>2 && arr[i-2] != '--discard-next')
                    //     {
                    //         if (arr[i-1] === res[res.length-1]) res.pop(); //?????????????????????????????
                    //     }
                    // }
                    break;
                case '--double-next':
                    if(i<arr.length-1 && notControl(arr[i+1])) {
                        res.push(arr[i+1]);
                        // res.push(arr[i+1]);
                        // i++;
                    }
                    break;
                case '--double-prev':
                    //  if (res.length > 0) {
                    //      res.push(res[res.length-1]);                        
                    //  }
                    if (i>0) res.push(arr[i-1]);
                    break;
                default:
                    res.push(arr[i]);
                    break;
            }
        }
        else
        {
            res.push(arr[i]);
        }
    }
    arr = null;
    return res;
};

function notControl(value){
    return (value !== '--discard-next' && value !== '--discard-prev' &&
            value !== '--double-next' && value !== '--double-prev'); 
}
