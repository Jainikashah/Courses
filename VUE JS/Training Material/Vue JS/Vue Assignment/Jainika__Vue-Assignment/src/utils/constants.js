export const messages = {
    USER_ADDED : "User Successfully Added",
    USER_UPDATE : "User Updated Successfully",
    USER_REGISTERED:'User Successfully Resgistered',
    STATUS_UPDATE : "User's Status Updated Sucessfully!",
    PROFILE_UPDATE : "Profile Updated Successfully!",
    USER_DELETE : "User Deleted Successfully",
    PASSWORD_UPDATE : "Password Changed Succesfully",
    INCORRECT_EMAIL : "Entered Email is Incorrect",
    INCORRECT_CREDENTAILS : 'Incorrect Username or Password',
    PAGE_NOT_FOUND_TEXT: 'Move to our Login Page instead:',
    SUCCESS : 'Success!',
    ERROR : 'Error!',
    WELCOME_MSG : (name) => `Welcome ${name}!`,
    LOAD_MORE_MSG : (num, length) => `Showing ${num} out of ${length}. Click here to load more..`
}

export const headings = {
    Add_USER_HEADING : 'Add User',
    ADD_USER_DESC : 'Add a new user instantly!',
    EDIT_PROFILE_HEADING : 'Edit Profile',
    EDIT_PROFILE_DESC : 'Edit your profile instantly!',
    FORGOT_PASSWORD_HEADING : 'Forgot Password',
    FORGOT_PASSWORD_DESC :'Set a new password!',
    LOGIN_HEADING : 'Login Form',
    LOGIN_DESC : 'Login using your stored credentials',
    REGISTRATION_HEADING : 'User Registration Form',
    REGISTRATION_DESC : 'Register a New User! ',
}

export const validations = {
    REQUIRED_FIELD : (field) => `${field} is required`,
    INVALID_FIELD : (field) => `${field} is invalid`,
    PASSWORD_LENGTH_ERROR : `Password should be minimum 6 characters long`,
    NUMBER_LENGTH_ERROR : `Number should be 10 digits long`,
    SAME_AS_PASSWORD : `Confirm password should be same as New Password.`
}

export const ddlData = {
    stateOptions: [
        { value: null, text: "Select State" },
        { value: "Gujarat", text: "Gujarat" },
        { value: "Maharastra", text: "Maharastra" },
        { value: "Bihar", text: "Bihar" },
      ],
      countryOptions: [
        { value: null, text: "Select Country" },
        { value: "India", text: "India" },
        { value: "USA", text: "USA" },
      ],
      userTypeOptions: [
        { value: "FE Trainee", text: "FE Trainee" },
        { value: "Admin", text: "Admin" },
      ],
      userStatusOptions :[
        { value: "Active", text: "Active", },
        { value: "Inactive", text: "Inactive",},
      ],

}

export const labels = {
  PROJECT_NAME : 'FE Training',
  LOGIN :'Login',
  SHOW_PROFILE : 'Show Profile',
  EDIT_PROFILE : 'Edit Profile',
  SHOW_USERS : 'Show Users',
  EDIT_USERS : 'Edit Users',
  ADD_USER : 'Add User',
  SIGN_OUT : 'Sign Out',

  USERNAME : 'Username : ',
  PASSWORD : 'Password : ',
  EMAIL : 'Email : ',
  LOCATION : 'Location : ',
  USER_TYPE :'User Type : ',
  GENDER : 'Gender : ',
  NUMBER :'Contact Number : ',
  NEW_PASSWORD : 'New Password : ',
  CONFIRM_PASSWORD : 'Confirm Password : '
}

export const values = {
  USERS_COUNTER : 0,
  COUNTER_STEP : 5
}