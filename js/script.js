window.onload = function() {

  
  //var video001 = ;
  var name_001 = "Foo Fighters";
  var description_001 = "A brave boy with Kiss makeup picks up a guitar and juggles dexterously on stage!";
  //var date_001 =;
  var city_001 = "Austin";
  var country_001 = "USA";
  var fan_001 = "Yayo Sanchez";

  document.getElementById('name_001').innerHTML = name_001;
  document.getElementById('description_001').innerHTML = description_001;
  document.getElementById('city_001').innerHTML = city_001;
  document.getElementById('country_001').innerHTML = country_001;
  document.getElementById('fan_001').innerHTML = fan_001;




};


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