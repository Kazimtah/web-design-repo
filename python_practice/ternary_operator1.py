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

def get_letter_gerad(grade):
    grade_score = 'A' if grade >=90 else 'B' if grade >=80 else 'c' if grade >=70 else 'D' 
    return grade_score

my_fruits = ["apple", 'bannana', 'lime']
for i in my_fruits:
    print(i)
