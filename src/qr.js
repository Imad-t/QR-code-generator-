window.addEventListener("DOMContentLoaded", (event) => {
  const qrCodeData = localStorage.getItem("qrCodeData");
  let display = document.getElementById("displayQR");
  display.style.backgroundImage = `url('${qrCodeData}')`;
  display.style.backgroundSize = "90%";
  display.style.backgroundRepeat = "no-repeat";
  display.style.backgroundPosition = "center";
});

const message = document.getElementById("message");

//generate image for qrcode and download it
const downloadQRCode = () => {
  const qrCodeData = localStorage.getItem("qrCodeData");

  fetch(qrCodeData)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);

      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      //message
      message.innerText = "Downloading QR code...";
      message.classList.add("bg-primary");
      setTimeout(() => {
        message.innerText = "";
        message.classList.remove("bg-primary");
      }, 3000);
    });
};

const copyQRCodeLink = () => {
  const qrCodeData = localStorage.getItem("qrCodeData");

  navigator.clipboard.writeText(qrCodeData);

  //display message
  message.innerText = "URL copied to clipboard";
  message.classList.add("bg-primary");
  setTimeout(() => {
    message.innerText = "";
    message.classList.remove("bg-primary");
  }, 3000);
};

document.getElementById("share").addEventListener("click", copyQRCodeLink);
document.getElementById("download").addEventListener("click", downloadQRCode);
