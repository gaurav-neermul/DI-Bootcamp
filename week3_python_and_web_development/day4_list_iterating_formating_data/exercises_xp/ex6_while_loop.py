# 🌟 Exercise 6: While Loop
# Key Python Topics:

# Loops (while)
# Conditionals


# Instructions:

# Use an input to ask the user to enter their name.
# Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
# hint: check for the method isdigit()
# if the input is incorrect, keep asking for the correct input until it is correct
# if the input is correct print “thank you” and break the loop
# example:
# enter your name: 1234
# give the correct name: hi
# give the correct name: Ana
# thank you

name = input("Enter your name: ")
while True:
    if name.isdigit() or len(name) < 4:
        name = input("Enter your name: ")
    else:
        print("Thank you")
        break