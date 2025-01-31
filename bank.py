balance = 0

def main():
    print("Balance", balance)
    deposite(100)
    withdraw(50)

    print("Balance", balance)

def deposite(n):
    balance += n

def withdraw (n):
    balance -= n


if __name__== "__name__":

    main()