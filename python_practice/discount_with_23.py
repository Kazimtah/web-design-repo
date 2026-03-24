def calc_discount_with_return(price: float, is_member: bool):
    """
    prince: float is the orginial price of the item
    is_member: bool shows if the person is a member of the group

    """
    if is_member:
        return price - price * 0.1
    else:
        return price - price * 0.05

calculate_discount = calc_discount_with_return(price=1000, is_member= False)
print(calculate_discount)