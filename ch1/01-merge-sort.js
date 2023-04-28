const array = [1, 5, 1, 4, 7, 8, 9, 1, 3, 4]

const numberComparator = (a, b) => a - b;

const divideAndMerge = (comparator, arr, startIndex, endIndex) => {
    const length = endIndex - startIndex + 1;
    const half = Math.floor((startIndex + endIndex) / 2);

    if (length === 1) {
        return [arr[startIndex]];
    }

    return merge(
        divideAndMerge(comparator, array, startIndex, half),
        divideAndMerge(comparator, array, half + 1, endIndex),
        comparator
    );
}

const merge = (arr1, arr2, comparator) => {
    const merged = Array(arr1.length + arr2.length).fill(null);

    merged.reduce((context, _, id) => {
        if ( comparator(arr1[context.arr1Id], arr2[context.arr2Id]) < 0) {
            merged[id] = arr1[context.arr1Id];
            context.arr1Id++;
        }
        else {
            merged[id] = arr2[context.arr2Id];
            context.arr2Id++;
        }

        return context;
    }, {
        arr1Id: 0,
        arr2Id: 0
    })

    return merged;
}

const mergeSort = (arr, comparator) => divideAndMerge(comparator, arr, 0, arr.length - 1);

console.log( JSON.stringify( mergeSort(array, numberComparator) ));

// divide and conquer
// recursive
// using buffer (for efficiency memory)