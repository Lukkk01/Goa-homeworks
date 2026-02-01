# https://www.codewars.com/kata/635fc0497dadea0030cb7936/train/python
# Same matrix (2 * 2)

def count_different_matrices(matrices):
    def rotations(mat):
        a, b, c, d = mat
        return [
            [a, b, c, d], 
            [c, a, d, b],
            [d, c, b, a],
            [b, d, a, c]
        ]

    seen = set()
    for mat in matrices:
        normalized = min(rotations(mat))
        seen.add(tuple(normalized))

    return len(seen)
def count_different_matrices(matrices):
    def rotations(mat):
        a, b, c, d = mat
        return [
            [a, b, c, d], 
            [c, a, d, b],
            [d, c, b, a],
            [b, d, a, c]
        ]

    seen = set()
    for mat in matrices:
        normalized = min(rotations(mat))
        seen.add(tuple(normalized))

    return len(seen)