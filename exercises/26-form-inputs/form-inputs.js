(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Display what the user is typing or selecting from a dropdown.
   *
   * When the user types in an email address,
   * display what they are typing inside of the empty <span> tags.
   * When the user selects an option from the dropdown,
   * display what they selected inside of the empty <span> tags.
   * (See the comments in the HTML for what <span> tags to sue.)
   */

  const emailSpan = document.querySelector('#emailSpan');
  const email = document.querySelector('#email');

  email.addEventListener('input', (event) => {
    emailSpan.textContent = event.target.value;
    console.log(emailSpan.textContent);
  });
  const titleSpan = document.querySelector("#titleSpan");
  const title = document.querySelector("#title");

  title.addEventListener("input", (event) => {
    titleSpan.textContent = event.target.value;
    console.log(titleSpan.textContent);
  });



  /**
   * Problem 2: Handle a checkbox
   *
   * A <div> that says "✓ Include promotional offers" is hidden o the screen.
   * When the user checks the "Send promotional offers to my email address" checkbox,
   * show the hidden <div> tag.
   *
   * As a bonus, see if you can hide the <div> tag if they uncheck the checkbox.
   */
  const checkbox = document.querySelector("#shouldSendPromotions");
  const checkboxDiv = document.querySelector("#checkboxDiv");
  checkbox.addEventListener("change", () => {
    checkboxDiv.classList.toggle("hidden");
  });

  // Write your answer here.
  /**
   * Problem 3: Input validation
   *
   * There is a hidden error message "Please enter email address."
   * If the user has not typed in anything in the email address textbox,
   * show this error message.
   * If they have typed something, hide this error message.
   *
   * You can use the "input" or "change" events, but the general UX recommendation
   * is to use "blur" events for these types of error messages (form validation errors).
   */


  email.addEventListener("blur", () => {
    const error = document.querySelector("#emailError");
    if (email.value === "") {
      error.style.display = "block";
    } else {
      error.classList.add = "none";
    }
  });
  
})();