console.log("Welcome to Spotify");

//Initialize the  Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Namastute", filepath: "songs/1.mp3", coverPath: "f89691712e7b01c1ac87b185c1efa724.1000x1000x1.jpg"},
    {songName: "MMM", filepath: "songs/2.mp3", coverPath: "ab67616d0000b2733d8355e9316ac23d60c1a338.jpeg"},
    {songName: "Kohra", filepath: "songs/3.mp3", coverPath: "tsa2u4vu.png"},
    {songName: "Hoshiyaar", filepath: "songs/4.mp3", coverPath: "tsa2u4vu.png"},
    {songName: "Khoj", filepath: "songs/5.mp3", coverPath: "tsa2u4vu.png"},
    {songName: "Na jaaye", filepath: "songs/6.mp3", coverPath: "855b187ebe6410db091f94806b605d67.1000x1000x1.jpg"},
    {songName: "Pankh", filepath: "songs/7.mp3", coverPath: "Bayaan-Hindi-2018-20210519113442-500x500.jpg"},
    {songName: "Luka chippi", filepath: "songs/8.mp3", coverPath: "364297297_833109065065122_5948666422515426370_n.jpg"},
   // {songName: "Namastute", filepath: "1.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})



// audioElement.play();

// Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
    
    }
   else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
   } 
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
// Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
       
})
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
