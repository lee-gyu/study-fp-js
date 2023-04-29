const array = [1, 5, 1, 4, 7, 8, 9, 1, 3, 4]

const divideAndMerge = (comparator, arr) => {
    // 1크기 짜리는 바로 return
    if (arr.length === 1) return arr;

    const half = Math.floor(arr.length / 2);

    return merge(
        divideAndMerge(comparator, arr.slice(0, half)),
        divideAndMerge(comparator, arr.slice(half)),
        comparator
    );
}

const merge = (arr1, arr2, comparator) => {
    const merged = Array(arr1.length + arr2.length).fill(null);

    merged.reduce((context, _, id) => {
        // arr2Id, arr1Id가 끝에 도달했다면 다른 배열 id 전진
        if (context.arr1Id === arr1.length)
            merged[id] = arr2[context.arr2Id++];
        else if (context.arr2Id === arr2.length)
            merged[id] = arr1[context.arr1Id++];
        else if ( comparator(arr1[context.arr1Id], arr2[context.arr2Id]) < 0)
            merged[id] = arr1[context.arr1Id++];
        else
            merged[id] = arr2[context.arr2Id++];

        return context;
    }, {
        arr1Id: 0,
        arr2Id: 0
    })

    return merged;
}

// divide and conquer
// recursive
// TODO using buffer (for efficiency memory)
export const mergeSort = (arr, comparator) => divideAndMerge(comparator, arr);
