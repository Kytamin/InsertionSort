function InsertionSort(Arr:number[]) {
    for (let i = 1; i < Arr.length; i++) {
        let key = Arr[i];
        let j = i - 1;
        while ((j > -1) && (key < Arr[j])) {
            Arr[j + 1] = Arr[j];
            j--;
        }
        Arr[j + 1] = key;

    }
    return Arr;
}
let arr1=[1,11,2,22,3,33,4,44,5,55]
console.log(InsertionSort(arr1))