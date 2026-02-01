// https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript
// Arrays Similar

function arraysSimilar(a, b) {
    if (a.length !== b.length) return false;

    const used = new Array(b.length).fill(false);

    for (let i = 0; i < a.length; i++) {
        let found = false;
        for (let j = 0; j < b.length; j++) {
            if (!used[j] && a[i] === b[j] && !found) {
                used[j] = true;
                found = true;
            }
        }
        if (!found) return false;
    }

    return true;
}