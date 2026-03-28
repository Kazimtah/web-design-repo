def get_letter_grade(grade):
    if grade >= 90:
        letter_grade = 'A'
    elif grade >=80:
        letter_grade = 'B'
    elif grade >=70:
        letter_grade = 'C'
    elif grade >= 60:
        letter_grade = "D"

    else: 
        letter_grade = 'F'
        
    return letter_grade

    