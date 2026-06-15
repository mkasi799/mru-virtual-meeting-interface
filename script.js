const screen = document.getElementById("screen");

let userStream = null;

function addLogo() {
    return `<img id="logo" src="mru-logo.png">`;
}

/* =========================
   INTRO SUMMARY
========================= */

function renderIntro() {
    screen.innerHTML = `
        ${addLogo()}
        <div class="center">
            <h1>we can add a brief description here</h1>
            <button id="proceedBtn">Proceed</button>
        </div>
    `;

    document.getElementById("proceedBtn").onclick = renderDeviceCheck;
}

/* =========================
   CAMERA/MIC CHECK
========================= */

function renderDeviceCheck() {

    screen.innerHTML = `
        ${addLogo()}

        <div class="device-check">

            <h1>Device Check</h1>

            <video 
                id="previewVideo"
                class="device-preview"
                autoplay
                muted
                playsinline>
            </video>

            <div class="device-instructions">
                <p>Ensure you are centered in the camera view, as your self-view will not be visible during the meeting.</p>

                 <p>Ensure your device volume is unmuted and set to an audible level before joining.</p>
            </div>

            <button id="joinBtn">Join Meeting</button>

        </div>
    `;

    navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(stream => {

    userStream = stream;

    const previewVideo =
        document.getElementById("previewVideo");

    previewVideo.srcObject = stream;

})
.catch(err => {

    console.error(err);

});

document.getElementById("joinBtn").onclick = startStudy;
}

/* =========================
   MATCHMAKING & LOADING
========================= */

function startStudy() {

    // WAITING ROOM
    screen.innerHTML = `
        ${addLogo()}
        <div class="center">
            <h2>Waiting for participants to join</h2>
            <p id="count">1 out of 5 participants joined</p>
        </div>
    `;

    setTimeout(() => {
        document.getElementById("count").innerText =
            "2 out of 5 participants joined";
    }, 10000);

    setTimeout(() => {
        document.getElementById("count").innerText =
            "3 out of 5 participants joined";
    }, 23000);

    setTimeout(() => {
        document.getElementById("count").innerText =
            "4 out of 5 participants joined";
    }, 30000);

    setTimeout(() => {
        document.getElementById("count").innerText =
            "5 out of 5 participants joined";
    }, 34000);

    // CONNECTING
    setTimeout(() => {
        screen.innerHTML = `
            ${addLogo()}
            <div class="center">
                <h2>Connecting to meeting...</h2>
            </div>
        `;
    }, 37000);

/* =========================
   MEETING ROOM
========================= */

    // MEETING ROOM
    setTimeout(() => {

        screen.innerHTML = `
            <div class="meeting-interface">

                <!-- TOP BAR -->
                <div class="top-ui">
                    Virtual Meeting Room
                </div>

                <!-- VIDEO GRID -->
                <div class="meeting-room">

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p1.mp4" type="video/mp4">
                        </video>

                         <div class="mic-overlay">
                             <img src="mic-muted.svg">
                        </div>
                    </div>

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p2.mp4" type="video/mp4">
                        </video>

                         <div class="mic-overlay"  id="speakerMic">
                             <img src="mic-muted.svg">
                        </div>
                    </div>

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p3.mp4" type="video/mp4">
                        </video>

                         <div class="mic-overlay">
                             <img src="mic-muted.svg">
                        </div>
                    </div>

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p4.mp4" type="video/mp4">
                        </video>

                         <div class="mic-overlay">
                             <img src="mic-muted.svg">
                        </div>
                    </div>

                </div>

                <!-- BOTTOM BAR -->
                <div class="bottom-ui">

                    <div class="control" id="muteButton">
                        <img src="mic.svg" class="icon" id="muteIcon">
                        <span>Mute</span>
                    </div>

                    <div class="control">
                        <img src="users.svg" class="icon">
                        <span>Participants (5)</span>
                    </div>

                    <div class="control leave">
                        Leave
                    </div>

                </div>

            </div>
        `;
    
// MIC TOGGLE FUNCTIONALITY
const muteButton =
document.getElementById("muteButton");

const muteIcon =
    document.getElementById("muteIcon");

let isMuted = false;

muteButton.onclick = () => {

    isMuted = !isMuted;

    if (isMuted) {

        muteIcon.src = "mic-muted.svg";

        if (userStream) {
            userStream.getAudioTracks().forEach(track => {
                track.enabled = false;
            });
        }

    } else {

        muteIcon.src = "mic.svg";

        if (userStream) {
            userStream.getAudioTracks().forEach(track => {
                track.enabled = true;
            });
        }

    }

};

    // HIDE MIC FOR SPEAKER AT 40 SECONDS
    setTimeout(() => {

        const speakerMic =
            document.getElementById("speakerMic");

        if (speakerMic) {
            speakerMic.style.display = "none";
        }

    }, 40000);

    // SHOW MIC AGAIN AT 55 SECS
    setTimeout(() => {

        const speakerMic =
            document.getElementById("speakerMic");

        if (speakerMic) {
            speakerMic.style.display = "block";
        }

    }, 55000);

    // REDIRECT TEST
    setTimeout(() => {

    window.location.href =
        "https://mtroyal.ca1.qualtrics.com/jfe/form/SV_2gALFMRats3XuBw";

    }, 5000);

}, 42000);

}

renderIntro();