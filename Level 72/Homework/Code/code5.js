'https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript'
// Complementary DNA

function dnaStrand(dna){
    let complement = '';
    for (const acid of dna) {
        if (acid === 'A') {
            complement += 'T';
        } else if (acid === 'T') {
            complement += 'A';
        } else if (acid === 'C') {
            complement += 'G';
        } else if (acid === 'G') {
            complement += 'C';
        }
    }
    return complement;
}