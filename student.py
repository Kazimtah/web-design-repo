class Student():
    def __init__(self, name, house):
        self.name = name
        self.house = house

    def __str__(self):
        return f"{self.name} from {self.house}"


def main():
    student = ()
    print(student)

def get_student():
    name = input("Name:   ")
    house = input("House: ")
    return Student(name, house)


if __name__ == "__main__":
    main()
    
