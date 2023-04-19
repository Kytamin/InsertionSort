function InsertionSort(Arr:number[]) {
    for (let i = 1; i < Arr.length; i++) {
        let key = Arr[i];
        let j = i - 1;
        while ((j > -1) && (key < Arr[j])) {
            Arr[j + 1] = Arr[j];
            j--;
        }
        Arr[j + 1] = key;

        console.log(`bước chèn ${Arr} `)
        console.log(`swap ${Arr[j]} with ${Arr[j+1]}`)
    }
    return Arr;
}
let arr1=[1,11,2,22,3,33,4,44,5,55]
InsertionSort(arr1)