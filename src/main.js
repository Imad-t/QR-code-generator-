document.getElementById('generateButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  makeCode();
});

const makeCode = () => {
  let link = document.getElementById('link');
  let qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(link.value);
  
  // Set the QR code data in localStorage
  localStorage.setItem('qrCodeData', qrCode);

  // Redirect to the display.html page
  window.location.href = "display.html";
};
