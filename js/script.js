// Img caption
// Define Elements:
const wideImg = document.querySelector('.full-width-image-atf img'),
  captionText = wideImg.getAttribute('alt'),
  captionInnerHTML = '<span class="image-caption">' + captionText + '</span>',
  caption = document.createElement('div');
// Edit:
  caption.setAttribute('class', 'image-caption-wrap');
  caption.style.cssText = 'background: none;';
  caption.innerHTML = captionInnerHTML;
// Insert on page:
  wideImg.parentNode.appendChild(caption);

  //alert on rating
  function alertRating() {
    alert("The rating service is temporarily unavailable");
  }