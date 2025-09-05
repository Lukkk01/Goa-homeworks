# scope არის გარკვეული ელემენტის ხელმისაწვდომობა კოდის კონკრეტულ ბლოკში ან ფუნქციაში

x = 10

def print_x():
    print(x)

print_x(x)


def func():
    y = 5
    print(y)

func()


def out():
    z = 20
    def inn():
        print(z)
    inn()

out()