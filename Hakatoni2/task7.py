def game():
    rock = "rock"
    paper = "paper"
    scissors = "scissors"
    input1 = input("Player 1, enter rock, paper, or scissors: ").lower()
    input2 = input("Player 2, enter rock, paper, or scissors: ").lower()
    if input1 == input2:
        print("It's a tie!")
    elif (input1 == rock and input2 == scissors) or (input1 == paper and input2 == rock) or (input1 == scissors and input2 == paper):
        print("Player 1 wins!")
    else:
        print("Player 2 wins!")
game()