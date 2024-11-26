/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  const newImg = document.querySelector('img');
  newImg.src = 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif';
  newImg.alt = 'A gif of a cat coding on a laptop';
  const newLink = document.querySelector('#js');
  newLink.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
  const newPara = document.querySelector('div.alert.alert-success');
  newPara.textContent = 'I am victorious!';

})();
