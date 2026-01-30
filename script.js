function generateQR() {
    const input = document.getElementById("qr-input").value;
    const qrDiv = document.getElementById("qrcode");
    const panel = document.getElementById("result-panel");

    if (!input) { alert("من فضلك ضع رابطاً"); return; }

    qrDiv.innerHTML = ""; // مسح القديم
    new QRCode(qrDiv, {
        text: input,
        width: 250,
        height: 250,
        correctLevel: QRCode.CorrectLevel.H // لضمان عمل اللوغو
    });

    panel.style.display = "block";
}

function applyStyle() {
    const frame = document.getElementById("frame-type").value;
    const color = document.getElementById("frame-color").value;
    const wrapper = document.getElementById("qr-wrapper");

    wrapper.className = ""; 
    wrapper.style.borderColor = "transparent";
    document.documentElement.style.setProperty('--main', color);

    if (frame !== "none") {
        wrapper.classList.add(frame);
        wrapper.style.borderColor = color;
    }
}

function downloadQR() {
    const canvas = document.querySelector("#qrcode canvas");
    const logo = document.getElementById("qr-center-logo"); // سأستخدم صورة اللوغو الظاهرة
    
    // إنشاء صورة مدمجة للتحميل
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "Ntlas-QR.png";
    link.click();
}

