let qrcode;

function generateQR() {
    const input = document.getElementById("qr-input").value;
    const container = document.getElementById("qrcode");
    const downloadBtn = document.getElementById("download-btn");

    if (!input) {
        alert("يرجى إدخال رابط أولاً!");
        return;
    }

    // تنظيف الحاوية قبل التوليد الجديد
    container.innerHTML = "";
    
    qrcode = new QRCode(container, {
        text: input,
        width: 256,
        height: 256,
        colorDark: "#050a10",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // إظهار زر التحميل
    downloadBtn.style.display = "inline-block";
}

function downloadQR() {
    const img = document.querySelector("#qrcode img");
    if (img) {
        const link = document.createElement("a");
        link.href = img.src;
        link.download = "Ntlas-QR.png";
        link.click();
    }
}

