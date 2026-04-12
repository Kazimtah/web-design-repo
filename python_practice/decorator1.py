def decorator_fucntion(fn):
    def wrapper_function(*args, **kargs):
        print("Executed befoe function")
    
    fn(*args,**kargs)