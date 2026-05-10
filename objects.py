'''
    OBJECTS
(1) What is object
(2) Iterable objects & RANGE
(3) DICTIONARY
(4) Error handling system
'''

import array  # package/modul
import math  # package
from math import ceil, asin
print("===== What is object =====")
# An object has state and method properties.
# Eerything is object in Python

print(type('HELLO WORLD!'))
print(type(100))
print(type(True))
print(type(array))
print(type(math))

# Paradigm > Functional Programming & OOP
# OOP 4 CONCEPTS > Abstraction | Encapsulation | Inheritence | Polimorphism
result1 = math.ceil(97.7)  # CALL
print("result1:", result1)

result2 = ceil(98.7)
print(" result2:", result2)

print("===== Error handling system =====")
car_dict = dict(name="Tayota", year=2026, electric=True)

try:
    print("passed here")
    a = car_dict.speed
    result = car_dict["origin"]
    print("result:", result)
except KeyError as err:
    print("No origin state priperty fount:", err)
except AttributeError as err:
    print("No speed fount:", err)
else:
    print("Execute successfully without errors")
finally:
    print("Final closing logic")
