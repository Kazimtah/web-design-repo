def validate_args(fn):
    def wrapper(*args,**kargs):
        for arg in args:
            if not isinstance(arg, int):
                raise ValueError("Argument must be integer", f"{arg} is type {type(arg)}")
            return fn(*args,**kargs)
    return wrapper
    
@validate_args
def sum_nume(a,b):
    return a + b
try:
    print(sum_nume(5,2))
    print(sum_nume('5' + 2 ))
except ValueError as e:
    print(e)