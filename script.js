function generateQRCode() {
	const qrCodeInput = document.getElementById("qr-code-input");
	const qrCodeValue = qrCodeInput.value;
	const qrCodeImage = document.getElementById("qr-code-image");
	const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeValue}`;
	qrCodeImage.src = qrCodeUrl;
}