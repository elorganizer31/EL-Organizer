// Efek header saat di-scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.padding = "12px 8%";
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";
    } else {
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }
});

// Scroll halus saat klik menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });
    });
});

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const wa = document.getElementById("wa").value;
    const tanggal = document.getElementById("tanggal").value;
    const lokasi = document.getElementById("lokasi").value;
    const paket = document.getElementById("paket").value;
    const catatan = document.getElementById("catatan").value;

    const pesan =
`Halo EL Organizer.

Saya ingin booking.

Nama: ${nama}
WhatsApp: ${wa}
Tanggal: ${tanggal}
Lokasi: ${lokasi}
Paket: ${paket}

Catatan:
${catatan}`;

    window.open(
        `https://wa.me/6282269544889?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );
});
