//ganti nama user
function replaceName() {
    let name = prompt("Enter your name here!", "User");
    document.getElementById("name").innerHTML = name;
}

replaceName();


//banner slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("photo-banner");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

// Ambil elemen form dan panel
const form = document.getElementById('messageForm');
const panel = document.getElementById('message-submit');
const panelContent = document.getElementById('submit-content');

// Fungsi untuk menangani submit form
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // get nilai dari form
    const name = document.getElementById('nama').value;
    const birthdate = document.getElementById('TTL').value;
    const gender = document.querySelector('input[name="JK"]:checked').value;
    const message = document.getElementById('pesan').value;

    // get currentTime
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();

    // Isi panel dengan data yang diisi
    panelContent.innerHTML = `
        <strong>Current Time:</strong> ${formattedTime} <br> <br>
        <strong>Nama:</strong> ${name} <br>
        <strong>Tanggal Lahir:</strong> ${birthdate} <br>
        <strong>Jenis Kelamin:</strong> ${gender} <br>
        <strong>Pesan:</strong> ${message}
    `;

    // Tampilkan hasil submit di panel
    panel.style.display = 'block';
});