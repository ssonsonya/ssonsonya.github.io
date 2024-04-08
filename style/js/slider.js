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

    // Remove active class
    sliderThumbs
    .querySelector('.slider_thumb_active').classList.remove('slider_thumb_active');
    sliderImgs
    .querySelector('.slider_img_active').classList.remove('slider_img_active');
    sliderTitles
    .querySelector('.slider_info_active').classList.remove('slider_info_active');
    sliderDescs
    .querySelector('.slider_info_active').classList.remove('slider_info_active');
      
    // Add active class
    sliderThumbs
    .querySelector(`[data-thumb-id='${index}']`).classList.add('slider_thumb_active');
    sliderImgs
    .querySelector(`[data-img-id='${index}']`).classList.add('slider_img_active');
    sliderTitles
    .querySelector(`[data-title-id='${index}']`).classList.add('slider_info_active');
    sliderDescs
    .querySelector(`[data-desc-id='${index}']`).classList.add('slider_info_active');
}