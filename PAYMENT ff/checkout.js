

function createQR(amt) {
    const QR_CODE = document.getElementById("QR_CODE");
    const link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=9637181890@ibl%26am=${amt}%26tn=PAYMENT FOR LIENZO`;
    QR_CODE.innerHTML = `<img src="${link}" alt="Payment QR Code">`;
}

function makepayment(amt) {
    window.location.href = `upi://pay?pa=9637181890@ibl%26am=${amt}%26tn=PAYMENT FOR LIENZO`;
}