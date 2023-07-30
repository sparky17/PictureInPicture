const videoElement=document.getElementById('video');
const button=document.getElementById('button');


// prompt to select media strea, pass that to video element then its gonna play

async function selectMediaStream(){
    try{
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = MediaStream;
        videoElement.onloadedMetadata=()=>{
            videoElement.play();
        }
    }
    catch(error){
        console.log('Woops error here ', error );
    }
}
button.addEventListener('click',async ()=>{
    //diable button
    button.disabled=true;
    // start PictureInPicture
    await videoElement.requestPictureInPicture();
    // reset button 
    button.disabled=false;
    videoElement.play();
})
// on load 
selectMediaStream(); 