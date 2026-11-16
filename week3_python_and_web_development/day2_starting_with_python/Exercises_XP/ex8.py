#  Exercise 8: What’s your name?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.

my_name = "Gaurav"
name = input("enter your name: ")

if name.lower() == my_name.lower():
    print("we have the same name")
else:
    print(f"nice to meet you {name}")