all_numes = [-3,1,0, 10, -20, 5]
absolute_num = []

for num in all_numes:
    absolute_num.append(abs(num))
print("********************")
print(absolute_num)
print("*********************")
print(all_numes)

absolute_num_for_in = [abs(num) for num in all_numes if num >0]
print(absolute_num_for_in)





my_set = {1, 10, 15}
new_set = set()

for val in my_set:
    new_set.add(val*val)
print(new_set)

new_set1 = {val*val for num in my_set}
print(new_set1)

# creating dictionary comprehensiion 
my_scores = {
    'a': 10,
    'b': 7,
    'm': 14
}
scores = {}
for key, value in my_scores.items():
    scores[key] = value * 10

print(scores)
scores_dict = {k: v *10 for k,v in my_scores.items()}

nums = [10,2,5,100]
squar_num = [num**2 for num in nums]
print(squar_num)
squar_num2 = []
for num in nums:
    squar_num2.append(num*num)
print(squar_num2)