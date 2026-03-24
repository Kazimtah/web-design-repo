def calc_discounted_prince(price: float, is_member: bool):
    if is_member:
        discount = price * 0.1  # 10% discount
    else:
        discount = price * 0.05 # 5% discount
    return price - discount
        
price_with_discount = calc_discounted_prince(1000, True)
print(price_with_discount)