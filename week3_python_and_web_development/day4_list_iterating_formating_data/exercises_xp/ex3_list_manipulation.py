# 🌟 Exercise 3: List Manipulation
# Key Python Topics:

# Lists
# List methods: append, remove, insert, count, clear


# Instructions:

# You have a list: 
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)
# Remove "Banana" from the list.
basket.remove("Banana")
print(basket) 
# Remove "Blueberries" from the list.
basket.pop()
print(basket)
# if blueberries were not at the end of the list: basket.remove("Blueberries")
# Add "Kiwi" to the end of the list.
basket.append("Kiwi")
print(basket)
# Add "Apples" to the beginning of the list.
basket.insert(0,"Apples")
print(basket)
# Count how many times "Apples" appear in the list.
count = 0
for fruit in basket:
    if fruit == "Apples":
        count +=1
print(count)
print(basket.count("Apples"))
# Empty the list.
basket.clear()
print(basket)
# Print the final state of the list.
 
