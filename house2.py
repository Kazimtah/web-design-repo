students = [{"name": "Hermione", "house": "Gryffindor"},
            {"name": "Harry", "house": "Gryffindor"},
            {"name": "Ron", "house": "Gryffindor"},
            {"name": "Draco", "house": "Slytherin"},
            {"name": "Padma", "house": "Ravenclaw"}
            
            ]
houses = set() #defining a empy set in order to prevent from duplicate element 

for student in students:
    if  student["house"] not in houses:
        houses.add(student["house"])


for house in sorted(houses):
    print(house)
 