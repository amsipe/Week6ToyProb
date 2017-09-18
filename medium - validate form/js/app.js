/*
MEDIUM: Using the jQuery validation plug in, validate a form that you create. Must contain full name, address, state, city, zip, email and telephone number.
*/
$().ready(function() {

  $("form").validate({
    rules: {
      formName: "required",
      formAddress: "required",
      formCity: "required",
      formState: {
        required: true,
        minlength: 2
      },
      formZipCode: "required",
      formEmail: {
        required: true,
        email: true
      },
      formPhone: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      formName: "Full name is required.",
      formAddress: "Please enter your street address.",

      formEmail: {
        required: "A valid email address is required.",
        email: "Email must be a valid format. Ex. hello@yahoo.com"
      },
      formPhone: {
        required: "Telephone number is required",
        minlength: "Phone number must be 10 digits including area code. Ex 123-456-7890"
      },
      formCity: {
        required: "Please enter your city."
      },
      formState: {
        required: "Please enter your state."
      },
      formZipCode: {
        required: "Please enter your zipcode."
      }
    }


  });
});
