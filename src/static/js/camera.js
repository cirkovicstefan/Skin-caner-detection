
var hiddenDetektuj = document.getElementsByClassName("hiddenDetektuj")[0];
hiddenDetektuj.style.display = "none";
var hideVideo = document.getElementsByClassName("hideVideo")[0];
hideVideo.style.display = "none";
var hideVideo1 = document.getElementsByClassName("hideVideo1")[0];
hideVideo1.style.display = "none";

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
click_button.style.display = "none";

camera_button.addEventListener('click', async function () {
    hideVideo.style.display = "block";
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    click_button.style.display = "block";

});

click_button.addEventListener('click', function () {
    hideVideo1.style.display = "block";
    hideVideo.style.display = "none";
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
    click_button.style.display = "none";
    hiddenDetektuj.style.display = "block";
    // data url of the image
    console.log(image_data_url);

    // call function from stop camera
    hiddenDetektuj.onclick = async function () {
      await stopStreamedVideo(video)
    }
});


// function for stop camera
function stopStreamedVideo(videoElem) {
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();
  
    tracks.forEach((track) => {
      track.stop();
    });
  
    video.srcObject = null;
  }