//Picture-------------------
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
      }  
}   
ibg();
//--------------------------------------------------------------

//YoutubeAPI--------
let list = document.querySelector('.video-list');
let videobox = document.querySelector('.video');
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=PLsGUcSbWFgXgkljj1CX2kk2M99Nwwqnx3&key=AIzaSyD1HY07fDGE_wXmSVngJdWTOrxYbtdSyxw')
.then((result) => {
  return result.json()
}).then((data) => {
  let videos = data.items
  for (video of videos){
    list.innerHTML += `
    <article class="video-play" data-key="${video.snippet.resourceId.videoId}">
    <img  src="${video.snippet.thumbnails.default.url}" alt="v1" class="video-play__img" data-key="${video.snippet.resourceId.videoId}">
    <div class="video-play__description" data-key="${video.snippet.resourceId.videoId}">
      <h3 class="title" data-key="${video.snippet.resourceId.videoId}">${video.snippet.title}</h3>
      <p class="time" data-key="${video.snippet.resourceId.videoId}">${video.snippet.publishedAt}</p>
    </div>
  </article>
    `
  }
});

list.addEventListener('click', e =>{
  let item = e.target;
  let keyitem = item.getAttribute("data-key");
  // console.log(item);
  // console.log(keyitem);
  mainvideo(keyitem);
});

function mainvideo(keyitem){
  videobox.innerHTML = `
  <iframe width="100%" height="430px" src="https://www.youtube.com/embed/${keyitem}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `
}
//--------------------------------------------------------------

//Menu--------
const iconMenu = document.querySelector('.nav-icon');
const bodyMenu = document.querySelector('.nav-menu');
const navMenu = document.querySelector('.nav');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    bodyMenu.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
  });
}
document.addEventListener('click', function(e) {
  if(e.target.tagName === 'A') {
    bodyMenu.classList.remove('_active');
    iconMenu.classList.remove('_active');
    document.body.classList.remove('_lock');
  }
});
//--------------------------------------------------------------

//Swiper slide next--------
function cent(){
  let center = document.querySelectorAll(".swiper-slide");
  let info = document.querySelectorAll(".info");
  let text_on_pic = document.querySelectorAll(".img-info__place");
  for (var y = 0; y < center.length; y++){
    if(center[y].classList.contains("swiper-slide-next") || ((window.innerWidth < 600) && (center[y].classList.contains("swiper-slide-active")))){
      info[y].classList.add('_anim');
      text_on_pic[y].classList.add('_anim');
    } else{
      info[y].classList.remove('_anim');
      text_on_pic[y].classList.remove('_anim');
    }
  }
}
swiper.on('transitionEnd',function(e) {
  cent();
});
cent();
//--------------------------------------------------------------
