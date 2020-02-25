module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let result =1;
        for(let i = 0; i<arr.length; i++){
            if(Array.isArray(arr[i])) {
                arr = arr.flat(1);
                return result+=this.calculateDepth(arr);
            }         
        }
        return result;
    }
};


