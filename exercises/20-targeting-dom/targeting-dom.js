/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  const item = document.querySelector("li");
  console.log(item);
  const iden = document.querySelector("#myId");
  console.log(iden);
  const target = document.querySelector("#target_me");
  console.log(target);
  const warning = document.querySelectorAll(".bg-warning");
  warning.forEach(bg => console.log(bg));
  const socialLinks = document.querySelectorAll(".social");
  socialLinks.forEach(link => console.log(link));
  const rowCells = document.querySelectorAll("#myRow .col");
  rowCells.forEach(cell => console.log(cell));
})();
