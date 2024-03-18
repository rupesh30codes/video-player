const videos = [
    { src: './video/falling in reverse.mp4', name: 'Watch the world burn' },
    { src: './video/parkhaai.mp4', name: 'Parkhaai -Sajjan Raj Vaidya' },
    { src: './video/raftaar.mp4', name: 'Speed se Badho- Raftaar' },
    { src: './video/juice wrld.mp4', name: 'Hate me - Juice Wrld' },
    { src: './video/my boo.mp4', name: 'My boo - Usher' },
    { src: './video/rickroll.mp4', name: 'Never gonna give u up' }
];

let currentVideoIndex = 0;
const videoPlayer = document.querySelector('.video-player');
const videoName = document.querySelector('.video-name');
const playBtn = document.getElementById('paused');
const nextBtn = document.getElementById('forwarded');
const prevBtn = document.getElementById('backwarded');
const startTime = document.getElementById('startt');
const endTime = document.getElementById('endd');
const progressBar = document.querySelector('.lineChild');

function loadVideo(index) {
    videoPlayer.src = videos[index].src;
    videoName.textContent = videos[index].name;
}

function playPauseVideo() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.className = 'fas fa-pause';
    } else {
        videoPlayer.pause();
        playBtn.className = 'fas fa-play';
    }
}

function playNextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }
    loadVideo(currentVideoIndex);
    playPauseVideo();
}

function playPrevVideo() {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    }
    loadVideo(currentVideoIndex);
    playPauseVideo();
}

function updateTimeDisplay() {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    startTime.textContent = formatTime(currentTime);
    endTime.textContent = formatTime(duration);
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

videoPlayer.addEventListener('timeupdate', updateTimeDisplay);
videoPlayer.addEventListener('ended', playNextVideo);

playBtn.addEventListener('click', playPauseVideo);
nextBtn.addEventListener('click', playNextVideo);
prevBtn.addEventListener('click', playPrevVideo);

// Initialize the first video
loadVideo(currentVideoIndex);
