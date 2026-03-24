def create_user(username, email, password):
    return {'username': username, 'Email': email, 'Password': password}

user_details = {
    'username': 'bodgan123',
    'email': 'bodggan@gmail.com',
    'password': 'password2@@@%^^$##%%#$#$#'
}

creted_user = create_user(**user_details)
print(create_user)

user_other_details = ['alice-445','alice@alice.com','alice_34555']
other_created_user = create_user(*user_other_details)
print(other_created_user)