class Vault():
    def __init__(self, galleons = 0, sickle=0, knuts=0):
        self.galleons= galleons
        self.sickle = sickle
        self.knuts = knuts
    

    def __str__(self):
        return f"{self.galleons} Galleons, {self.sickle} Sickle , {self.knuts} Knuts"
    
    def __add__(self, other):

        galleons = self.galleons + other.galleons
        sickle = self.sickle + other.sickle
        knuts = self.knuts + other.knuts
        return Vault(galleons, sickle, knuts)



potter = Vault(100, 50, 25)
print(potter)
print("*****************************")

weasly = Vault(25,50,100)
print(weasly)


print("****************************8")

total = potter + weasly
print(total)