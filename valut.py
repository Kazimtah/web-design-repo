class Vault():
    def __init__(self, galleons = 0, sickle=0, knuts=0):
        self.galleons= galleons
        self.sickle = sickle
        self.knuts = knuts
    

    def __str__(self):
        return f"{self.galleons} Galleons, {self.sickle} Sickle , {self.knuts} Knuts"

potter = Vault(100, 40, 25)
print(potter)
print("*****************************")

weasly = Vault(25,50,100)
print(weasly)

galeons = potter.galleons + weasly.galleons
sickle = potter.sickle + weasly.sickle
knuts = potter.knuts + weasly.knuts
print("****************************8")
total = Vault(galeons, sickle, knuts)
print(total)