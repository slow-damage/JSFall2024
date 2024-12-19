(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what Ron Swanson's opinions are.
   *
   * Please use async & await to solve this problem.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
  const button = document.querySelector("#quoteBtn");
  button.addEventListener("click", async () => {
  try {
    const response = await axios.get(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    const quote = response.data[0]; 
    document.querySelector("#quote").textContent = quote;
  } catch (error) {
   document.querySelector(
     "#quote"
   ).textContent = `Oops! We wrote bad code :-( Here's your error: ${error}`;

  }
});

})();
