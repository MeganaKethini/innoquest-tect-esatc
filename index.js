const videoElement = document.getElementById('webcam');
const btn = document.getElementById('stopButton');
const btn1 = document.getElementById('startButton');
let mediaStream = null;

    async function startWebcam() {
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = mediaStream;
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    }

    function stopWebcam() {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            videoElement.srcObject = null;
        }
    }

    btn1.addEventListener('click',startWebcam)
    btn.addEventListener('click', stopWebcam)