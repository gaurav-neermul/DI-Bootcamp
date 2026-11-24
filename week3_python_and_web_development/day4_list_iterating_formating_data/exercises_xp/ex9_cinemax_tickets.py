# 🌟 Exercise 9: Cinemax Tickets
# Key Python Topics:

# Conditionals
# Lists
# Loops


# Instructions:

# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.


# Bonus:

# Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
# Write a program to:
# Ask for each person’s age.
# Remove anyone who isn’t allowed to watch.
# Print the final list of attendees.




total = 0

family_size = int(input("How many people are in your family? "))

for i in range(family_size):
    age = int(input(f"Enter age of person {i + 1}: "))

    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    total += ticket_price

print(f"\nTotal ticket cost: ${total}")

attendees = []

group_size = int(input("How many people are in the group? "))

for i in range(group_size):
    age = int(input(f"Enter age of person {i + 1}: "))

    if 16 <= age <= 21:
        attendees.append(age)

print("\nFinal list of attendees:", attendees)
