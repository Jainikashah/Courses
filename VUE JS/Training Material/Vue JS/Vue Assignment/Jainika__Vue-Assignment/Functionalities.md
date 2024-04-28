App functionalities:

Registration Page: 
  - Added validations using Vuelidate library:-
    - Fields required, including select boxes.
    - Password length should be greated than 6.
    - Contact no. should be exactly 10 digits long and no aplhabets, special characters, not even decimal   points (.) can be entered.
    - Valid email address.
  - A success message box appears, on successful registration.

Login Page:
  - Checks user's credentails matches with the stored data.
  - An error message box appears, on wrong credentials.

Forgot Password:
  - Asks for stored email, and on correct email, sets new password.
  - validations:
    - Fields required.
    - New password should match confirm password with a minimum of 6 digits.
  - A success message box appears, if details are valid.

On invalid routes:
  - Will open a PageNotFound Component.

For admin and users both:
  - can view their profile, edit it and view all other users. 
  - a sign out button too.

For admin only:
  - can edit and delete other users.
  - can add new users also.

