class Converter:
    def __init__(self, meters: int):
        self.number = meters * 100
        self.string = f"{meters * 100}cm"

print(Converter(1).string)