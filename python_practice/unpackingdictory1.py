person = {'name': 'Jhone', 'age': 23}
print(person)
other_person = person.copy()
other_person['age'] = 30
print(other_person)

other_person1 = {
    **person, 'age': 40, 'occupation': 'teacher'
}

print(other_person1)