var sliderImgs = document.querySelector('.slider_imgs');
var sliderTitles = document.querySelector('.slider_titles');
var sliderDescs = document.querySelector('.slider_descs');
var sliderThumbs = document.querySelector('.slider_thumbs');

sliderThumbs.addEventListener('click', runSlider);

function runSlider(event) 
{
    var index = event
    .target.closest('.slider_thumb')
    .dataset.thumbId;

    // Remove active class (thumbs)
    sliderThumbs
    .querySelector('.slider_thumb_active').classList.remove('slider_thumb_active');
      
    // Add active class (thumbs)
    sliderThumbs
    .querySelector(`[data-thumb-id='${index}']`)
    .classList.add('slider_thumb_active');
}