function arraySort(arr){
    let result = [];
    let count = 0;
    let length = arr.length;

    for(var i=0; i<length; i++){
        let minValue = Math.min.apply(Math,arr);
        result.push(minValue);
        let index = arr.indexOf(minValue);
        arr.splice(index, 1);
    }
    return result;   
}

const unsortedArray = [10,2,4,1,3,2];
const sortedArray = arraySort(unsortedArray);

console.log('Sorted Array: ', sortedArray);







