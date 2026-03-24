
def checking_shipping_fee(weight):
     if weight <= 0:
           print("Invalid weight. Weight must be greater than zero")

     if weight > 0 and weight <=4:
           print("The shipping fee is 4$")

     if 5< weight <=15:
           print("The shipping fee is 10$")

     if weight > 15:
           print('The shipping fee is 20$')