module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let result =1;
        for(let i = 0; i<=arr.length; i++){
            if(Array.isArray(arr[i])) {
                result+=this.calculateDepth(arr[i]);
            }
            if(i==arr.length) {
                return result; // wrong
            }
        }
    }
};


