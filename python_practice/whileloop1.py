user_password = 'admin123'
password = ''

while password != user_password:
    print("Enter 'quite' i order to to exit from login")
    password = input("Please enter your passsword: ")
    if password == 'quite':
        print("Quiting...")
        break 

if password == user_password:
    print("login successfull")
else:
    print("login failed")

my_list = [10,5, 2, 100, 35]
for num in my_list:
    if num == 2:
        break
    print(num)