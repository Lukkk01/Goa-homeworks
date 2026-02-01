// https://www.codewars.com/kata/590adadea658017d90000039/train/javascript
// Fruit Machine

function fruit(reels, spins) {
    const scores = {
        Wild: 100,
        Star: 90,
        Bell: 80,
        Shell: 70,
        Seven: 60,
        Cherry: 50,
        Bar: 40,
        King: 30,
        Queen: 20,
        Jack: 10
    };

    const x = reels[0][spins[0]];
    const y = reels[1][spins[1]];
    const z = reels[2][spins[2]];

    if (x === y && y === z) return scores[x];

    let same = null;
    let other = null;

    if (x === y) {
        same = x;
        other = z;
    } else if (x === z) {
        same = x;
        other = y;
    } else if (y === z) {
        same = y;
        other = x;
    } else {
        return 0;
    }

    const base = scores[same] / 10;

    if (other === "Wild") return base * 2;

    return base;
}