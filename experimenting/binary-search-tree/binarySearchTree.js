let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
function search(arr, needednum, left = 0, right = arr.length-1){        //left, right
    i++;
    let midNum = arr[Math.floor((left+right)/2)]
    if(needednum > midNum){
        return search(arr, needednum, midNum+1, right)
    } else if (needednum < midNum){
        return search(arr, needednum, left, midNum-1)
    }else{
        return arr.indexOf(midNum)
    }
}
console.log(search(array, 10), i)