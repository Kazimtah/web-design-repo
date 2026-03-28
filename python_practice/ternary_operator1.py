def check_discount_eligibility(is_member):
    discount = 0.1 if is_member else 0.05
    return discount
customer_membership = True
print(check_discount_eligibility(customer_membership))

data  = None
def process_data(data):
    procesed_data = data if data is not None else []
    return procesed_data
recieved_data = None
print(process_data(recieved_data))