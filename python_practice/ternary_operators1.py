user_is_active = True
active_user = "Active" if user_is_active else "Inactive"
print(active_user)

def conver_status_to_str(is_active):
    user_status_string = "Active" if is_active else "Inactive"
    return user_is_active
user_is_active = False
print(conver_status_to_str(user_is_active))