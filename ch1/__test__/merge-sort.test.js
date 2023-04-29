import { describe, test, expect } from "vitest"
import { mergeSort } from "../01-merge-sort"

const numberComparator = (a, b) => a - b;

describe("merge-sort testing", () => {
    
    test("#1 [5, 1, 1, 4, 11, 0, 2, 6]", () => {
        const input = [5, 1, 1, 4, 11, 0, 2, 6];
        const output = [0, 1, 1, 2, 4, 5, 6, 11];

        expect(mergeSort(input, numberComparator)).toEqual(output);
    })

})