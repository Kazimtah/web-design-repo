button = {
    'width': 200,
    'text': 'Buy'
    }

red_button = {
    **button,
    'color': 'red'
}

print(button)

print("**************************")
print(red_button)

button_info = {
    'text': 'Buy'
}
button_style = {
    'color': 'yello',
    'widht': 200,
    'height': 300
}

button ={ **button_info, **button_style}
print("********************************")
print(button)

button1 = button_info | button_style

print('**********************')
print(button1)