const screen = document.getElementById("screen");

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

            <div class="device-preview">
                Camera Preview Unavailable
            </div>

            <div class="device-options">

                <div class="device-item">
                     <img src="mic.svg" class="device-icon">
                    Microphone: Internal Microphone
                </div>

                <div class="device-item">
                    <img src="speaker.svg" class="device-icon">
                    Speaker: Default Speakers
                </div>

            </div>

            <button id="joinBtn">Join Meeting</button>

        </div>
    `;

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
    }, 1500);

    setTimeout(() => {
        document.getElementById("count").innerText =
            "3 out of 5 participants joined";
    }, 3000);

    setTimeout(() => {
        document.getElementById("count").innerText =
            "4 out of 5 participants joined";
    }, 4500);

    setTimeout(() => {
        document.getElementById("count").innerText =
            "5 out of 5 participants joined";
    }, 6000);

    // CONNECTING
    setTimeout(() => {
        screen.innerHTML = `
            ${addLogo()}
            <div class="center">
                <h2>Connecting to meeting...</h2>
            </div>
        `;
    }, 8000);

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
                    </div>

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p2.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p3.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="video-box">
                        <video autoplay loop playsinline>
                            <source src="p4.mp4" type="video/mp4">
                        </video>
                    </div>

                </div>

                <!-- BOTTOM BAR -->
                <div class="bottom-ui">

                    <div class="control">
                        <img src="mic.svg" class="icon">
                        <span>Mute</span>
                    </div>

                    <div class="control">
                        <img src="users.svg" class="icon">
                        <span>Participants (5)</span>
                    </div>

                    <div class="control" id="chatButton">
                        <img src="chat.svg" class="icon">
                        <span>Chat</span>
                    </div>

                    <div class="control leave">
                        Leave
                    </div>

                </div>
                
                <!-- CHAT PANEL -->
                <div id="chatPanel">

                    <div id="chatHeader">
                        Meeting Chat
                    </div>

                    <div id="chatMessages"></div>

                    <div id="chatInputArea">
                        <input type="text" id="chatInput" placeholder="Type a message...">
                        <button id="sendBtn">Send</button>
                    </div>

            </div>
        `;

        // CHAT OPEN/CLOSE
        const chatButton = document.getElementById("chatButton");
        const chatPanel = document.getElementById("chatPanel");

        chatButton.onclick = () => {

            if (chatPanel.style.display === "flex") {
                chatPanel.style.display = "none";
        } else {
            chatPanel.style.display = "flex";
        }

};

// SEND MESSAGE
const sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = () => {

    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");

    if (input.value.trim() !== "") {

        const msg = document.createElement("div");
        msg.className = "message";
        msg.innerText = input.value;

        messages.appendChild(msg);

        input.value = "";

        messages.scrollTop = messages.scrollHeight;
    }

};

    }, 9000);
}
renderIntro();