const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const audio = document.getElementById('bg-audio');
const playBtn = document.getElementById('play-pause');
const albumArt = document.getElementById('album-rotate');

// Dark/Light Mode Logic
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.replace('dark-theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
    }
});

// Music Player Logic
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        albumArt.classList.remove('rotate');
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        albumArt.classList.add('rotate');
    }
    isPlaying = !isPlaying;
});