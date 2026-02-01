function manualSlice(arr, start, end) {
    let result = [];
    if (end === undefined) {
        end = arr.length;
    }

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result
}