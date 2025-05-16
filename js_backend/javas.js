const cameraFeed = document.getElementById('cameraFeed');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream =>{
    cameraFeed.srcoject = stream;
})
.catch(error => {
    console.error('error accessng 📷 ' );

}
)    