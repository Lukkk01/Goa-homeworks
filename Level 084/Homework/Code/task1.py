# https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/python
# Tic-Tac-Toe-like table Generator

def display_board(board, width):
    rows = []
    index = 0
    total_rows = len(board) // width

    for r in range(total_rows):
        row = ""
        for c in range(width):
            row += " " + board[index] + " "
            if c < width - 1:
                row += "|"
            index += 1

        rows.append(row)

        if r < total_rows - 1:
            rows.append("-" * len(row))

    return "\n".join(rows)
