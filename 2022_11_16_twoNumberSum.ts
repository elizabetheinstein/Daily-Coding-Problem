// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// brute force
// O(n^2) time
// O(1) space
const twoNumberSumBruteForce = (list: number[], k: number) => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === k) return true
        }
    }
    return false
}

// linked list
// O(n^2) time
// O(1) space
const twoNumberSumLinkedList = (list: number[], k: number) => {
    let current = 0
    let next = 1

    while (current < list.length) {
        if (list[current] + list[next] === k) return true
        else if (next < list.length - 1) next++
        else current++
    }
    return false
}

// caching with a set
// O(n) time
// O(1) lookup
// O(n) space

const twoNumberSumSet = (list: number[], k: number) => {
    let set: Set<number>

    for (const num of list) {
        const diff = k - num
        if (set.has(diff)) return true
        set.add(diff)
    }
    return false
}

// caching with a hash map
// O(n) time
// O(1) lookup
// O(n) space
const twoNumberSumMap = (list: number[], k: number) => {
    let map: Map<number, number> = new Map()

    for (const num of list) {
        const diff = num - k
        if (map.has(diff)) return true
        map.set(num, diff)
    }
    return false
}