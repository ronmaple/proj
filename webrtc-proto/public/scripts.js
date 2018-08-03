const video = document.querySelector('.player');

function getVideo() {
    navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: false
    })
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
    })
    .catch(e => console.error(e));
}

getVideo();

/*
    Notes:
        navigator.mediaDevices.getUserMedia()

        window.URL => 
            returns an object that provides static methods used for 
            creating and managing project URLS

*/