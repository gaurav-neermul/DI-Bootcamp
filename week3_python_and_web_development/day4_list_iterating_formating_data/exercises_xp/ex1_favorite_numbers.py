# 🌟 Exercise 1: Favorite Numbers
# Key Python Topics:

# Sets
# Adding/removing items in a set
# Set concatenation (using union)


# Instructions:

# Create a set called my_fav_numbers and populate it with your favorite numbers.
my_fav_numbers = {7,10,21,20,5,11}
# Add two new numbers to the set.
my_fav_numbers.add(2)
my_fav_numbers.add(26)
# Remove the last number you added to the set.
my_fav_numbers.remove(26)
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
friend_fav_numbers = {5,10,15,20,25,30}
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.
print("My favourite numbers:", my_fav_numbers)
print("Friend's favourite numbers:", friend_fav_numbers)
print("Our favourite numbers:", our_fav_numbers)