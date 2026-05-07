'''FUNCTIONS
(1) DEFINE vs CALL
(2) Parametr vs Argument
(3) Keyword & default arguments
(4) Scope
'''

print("===== DEFINE (parametr) vs CALL (argument)")
# build in function > print() type()
# Function - reusable block of code!
# Instead of block {} in JAVA, Python uses indentation!

# DEFINE = bu function qurish jarayoni / parametr


def greet(a):
    print(f"How do you do, {a}")


def greeting(b):
    print("greeting is executed")
    return f"Hi {b}"


# CALL - execute / argument
result1 = greet('LEO')
print("result1:", result1)

result2 = greeting("Justing")
print("result2:", result2)
