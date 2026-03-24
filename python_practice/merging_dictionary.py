defaul_setting = {
    'theme': 'light', 'font_size': 16
}

user_setting = {
    'font_size': 20, 'show_avator': True
}

merged_setting = { **user_setting, **defaul_setting}
print(merged_setting)
# merging two dictionary using or | symbol in joing the 
merged_settings = user_setting | defaul_setting