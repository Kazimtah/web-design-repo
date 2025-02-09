import random


house = ["Gryffindor", " Huffelpuff", "Ravenclaw", "Slytherin"]


def sort(name):
    print(name, "is in ", random.choice(house))


sort("Harry")
