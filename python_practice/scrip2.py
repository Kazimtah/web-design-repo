class Person :
    def __init__(self,name: str, age: int):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Helllo, My name is {self.name} and I am {self.age} years old.")


person1 = Person("Mohammad Kazim", 30)
person1.greet()
