# 🌟 Exercise 8: Pizza Toppings
# Key Python Topics:

# Loops
# Lists
# String formatting


# Instructions:

# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.

toppings = []
price = 10
active = True
while active:
    topping = input("Enter a pizza topping or 'quit' to finish: ")
    if topping.lower() == "quit":
        active = False
    
    toppings.append(topping)
    price += 2.50
    print(f"Adding {topping} to your pizza")

print(f"\n Your pizza toppings:")
for topping in toppings:
    print(topping)

print(f"Total cost of your pizza: ${price:.2f}")