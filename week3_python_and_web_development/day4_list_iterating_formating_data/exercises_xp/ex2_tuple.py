# "" 
# 🌟 Exercise 2: Tuple
# Key Python Topics:

# Tuples (immutability)


# Instructions:

# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.
numbers = (1, 2, 3, 4, 5)


# numbers.append(6) #attr error
# A tuple is immutable, meaning that once created, its elements cannot be modified, added or removed.

# Unlike lists, tuples do not support methods such as .append() or .remove().

numbers = numbers + (6, 7, 8)

print(numbers) #(1, 2, 3, 4, 5, 6, 7, 8)