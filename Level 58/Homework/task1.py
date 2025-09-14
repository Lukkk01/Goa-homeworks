class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def info(self):
            print(f"სათაური: {self.title}, ავტორი: {self.author}, გვერდები: {self.pages}")

book1 = Book('ვეფხისტყაოსანი', 'შოთა რუსთაველი', 600)

book1.info()