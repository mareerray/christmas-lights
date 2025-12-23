const audio = document.getElementById('bg-music');
const button = document.getElementById('music-toggle');
const icon = button.querySelector('i');

let isPlaying = false;

button.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    } else {
        audio.pause();
        isPlaying = false;
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
});
