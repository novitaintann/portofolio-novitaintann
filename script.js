// ===============================
// TYPING ANIMATION
// ===============================

const typingElement =
document.getElementById("typing");

const roles = [

    "Data Science Enthusiast",

    "Content Creator",

    "Creative Communicator",

    "Machine Learning Learner",

    "NLP & Time Series Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText =
    roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
        currentText.substring(
            0,
            charIndex++
        );

        if (
            charIndex >
            currentText.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }

    } else {

        typingElement.textContent =
        currentText.substring(
            0,
            charIndex--
        );

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// ===============================
// DARK MODE
// ===============================

const themeToggle =
document.getElementById(
    "themeToggle"
);

const savedTheme =
localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

    themeToggle.innerHTML =
    "☀️";
}

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.innerHTML =
            "☀️";

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.innerHTML =
            "🌙";
        }
    }
);


// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
document.querySelectorAll(
    ".counter"
);

counters.forEach(counter => {

    const target =
    +counter.dataset.target;

    let current = 0;

    const updateCounter = () => {

        const increment =
        target / 100;

        if (
            current < target
        ) {

            current += increment;

            counter.innerText =
            Math.ceil(current);

            requestAnimationFrame(
                updateCounter
            );

        } else {

            counter.innerText =
            target + "+";
        }
    };

    updateCounter();

});


// ===============================
// SCROLL REVEAL
// ===============================

const hiddenElements =
document.querySelectorAll(
    ".section, .project-card, .stat-card, .timeline-item"
);

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (
            entry.isIntersecting
        ) {

            entry.target.classList.add(
                "show"
            );
        }

    });

},

{
    threshold: 0.15
}

);

hiddenElements.forEach(el => {

    el.classList.add(
        "hidden"
    );

    observer.observe(el);

});


// ===============================
// NAVBAR SHADOW
// ===============================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
        document.querySelector(
            ".navbar"
        );

        if (
            window.scrollY > 50
        ) {

            navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.08)";

        } else {

            navbar.style.boxShadow =
            "none";
        }
    }
);


/* ==========================================================================
   1. DATA KONTEN DETAIL PROJECT (METODOLOGI STAR & DATA-DRIVEN)
   ========================================================================== */
const projectData = {
    stunting: {
        title: "Predicting Stunting Resilience using XAI",
        image: "assets/project-stunting.png", 
        tech: "TabNet, TabPFN, Python, Scikit-Learn, SHAP (Explainable AI)",
        desc: `
            <h4>Situation (Latar Belakang)</h4>
            <p>Proyek riset ini dirancang untuk memprediksi tingkat resiliensi risiko stunting pada anak menggunakan dataset kesehatan masyarakat. Fokus utamanya adalah memecahkan masalah 'black-box' pada model AI di bidang medis agar keputusan model dapat dipertanggungjawabkan.</p>
            
            <h4>Action (Metodologi Teknis)</h4>
            <ul>
                <li>Mengimplementasikan pipeline pengolahan data tabular tingkat lanjut untuk membandingkan performa arsitektur modern <strong>TabNet</strong> dan <strong>TabPFN</strong>.</li>
                <li>Menerapkan pendekatan <strong>Explainable AI (XAI)</strong> menggunakan visualisasi kontribusi fitur untuk membongkar variabel kesehatan utama yang paling memengaruhi indikasi stunting pada anak.</li>
            </ul>
            
            <h4>Result (Hasil Pemodelan)</h4>
            <p>Studi komparatif berhasil mengevaluasi akurasi serta efisiensi waktu komputasi antar model secara presisi, sekaligus memberikan interpretasi klinis yang transparan dan etis bagi tenaga kesehatan.</p>
        `
    },
    brimo: {
        title: "Sentiment Analysis BRImo Reviews",
        image: "assets/project-brimo.png", 
        tech: "Python, NLP, NLTK, Scikit-Learn, Pandas, Web Scraping",
        desc: `
            <h4>Situation (Latar Belakang)</h4>
            <p>Melakukan analisis sentimen berskala besar terhadap ribuan ulasan pengguna aplikasi perbankan digital BRImo di Google Play Store untuk mengidentifikasi tingkat kepuasan pelanggan secara otomatis.</p>
            
            <h4>Action (Metodologi Teknis)</h4>
            <ul>
                <li>Melakukan prapemrosesan teks (Natural Language Processing) secara end-to-end: tokenization, stopword removal, stemming bahasa Indonesia, hingga pembobotan TF-IDF.</li>
                <li>Melatih model klasifikasi menggunakan algoritma Machine Learning untuk memisahkan ulasan ke dalam kategori sentimen positif, netral, dan negatif.</li>
            </ul>
            
            <h4>Result (Hasil Pemodelan)</h4>
            <p>Model mampu mengklasifikasikan sentimen ulasan dengan akurasi yang optimal, memberikan rekomendasi perbaikan fitur yang konkret untuk tim pengembang aplikasi berdasarkan kluster keluhan utama pengguna.</p>
        `
    },
    rossmann: {
        title: "Retail Sales Forecasting (SARIMA vs LSTM)",
        image: "assets/project-rossmann.png", 
        tech: "Python, TensorFlow, Keras, SARIMA, RNN, LSTM, GRU, Statsmodels",
        desc: `
            <h4>Situation (Latar Belakang)</h4>
            <p>Membangun sistem peramalan (forecasting) omzet harian menggunakan dataset historis kompetisi Rossmann Store Sales untuk mendukung manajemen stok dan strategi bisnis ritel multi-cabang.</p>
            
            <h4>Action (Metodologi Teknis)</h4>
            <ul>
                <li>Melakukan Exploratory Data Analysis (EDA) mendalam untuk mengidentifikasi pola musiman (seasonality) dan tren promosi ritel.</li>
                <li>Melakukan uji stasioneritas data menggunakan ADF Test, dilanjutkan dengan tahap feature scaling.</li>
                <li>Mengeksperimen dan membandingkan performa model statistik tradisional (SARIMA) dengan variasi arsitektur jaringan saraf tiruan Deep Learning (RNN, LSTM, dan GRU).</li>
            </ul>
            
            <h4>Result (Hasil Pemodelan)</h4>
            <p>Model Deep Learning berhasil mengejar volatilitas tren penjualan dengan akurasi tinggi. Evaluasi performa divalidasi secara ketat menggunakan kombinasi metrik MAE, RMSE, MAPE, dan R2 Score.</p>
        `
    },
    tomato: {
        title: "Fruit Maturity Detection App",
        image: "assets/project-fruit.png", 
        tech: "Convolutional Neural Network (CNN), Random Forest, Streamlit, Python, OpenCV",
        desc: `
            <h4>Situation (Latar Belakang)</h4>
            <p>Membangun aplikasi visi komputer (Computer Vision) pintar terintegrasi untuk mendeteksi dan mengklasifikasikan tingkat kematangan multispesies buah (tomat, jeruk, pisang, apel) secara real-time.</p>
            
            <h4>Action (Metodologi Teknis)</h4>
            <ul>
                <li>Mengelola pipeline data citra digital mulai dari prapemrosesan gambar (resizing, pencahayaan), ekstraksi fitur warna/tekstur ke format terstructured (CSV), hingga augmentasi data gambar.</li>
                <li>Melatih model menggunakan kombinasi arsitektur Deep Learning (CNN) dan Machine Learning tradisional (Random Forest).</li>
                <li>Mendeploy model terbaik ke dalam platform antarmuka web interaktif berbasis Streamlit.</li>
            </ul>
            
            <h4>Result (Hasil Pemodelan)</h4>
            <p>Sistem berhasil melakukan deteksi kualitas dan kematangan buah secara real-time melalui simulasi unggah gambar dengan performa klasifikasi yang tinggi.</p>
        `
    },
    hubisintek: {
        title: "Sertifikat Hubisintek",
        image: "", 
        tech: "Penghargaan / Sertifikasi Resmi",
        desc: `
            <h4>Pratinjau Sertifikat</h4>
            <div class="pdf-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
                <iframe src="assets/sertifikat-hubisintek.pdf" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" type="application/pdf"></iframe>
            </div>
            <p style="margin-top: 15px; text-align: center;">
                <a href="assets/sertifikat-hubisintek.pdf" target="_blank" style="text-decoration: none; display: inline-block; padding: 10px 20px; background-color: #e68523; color: white; border-radius: 6px; font-weight: 500;">
                    <i class="fa-solid fa-download"></i> Buka Penuh / Download PDF
                </a>
            </p>
        `
    },
    tdc_its: {
        title: "Sertifikat Top 5 Technology Development Competition (TDC) ITS",
        image: "assets/sertifikat/TDC-ITS.jpeg",
        tech: "Penghargaan Kompetisi Tingkat Nasional",
        desc: `
            <h4>Detail Penghargaan</h4>
            <p>Sertifikat resmi atas pencapaian sebagai <strong>Top 5 Finalis</strong> dalam ajang Technology Development Competition (TDC) yang diselenggarakan oleh Institut Teknologi Sepuluh Nopember (ITS) pada tahun 2024.</p>
            <p>Kompetisi ini berfokus pada pengembangan konsep arsitektur aplikasi inovatif bernama <strong>"Heyra"</strong> yang dirancang khusus untuk membantu mempermudah komunikasi bagi penyandang tuna rungu wicara.</p>
        `
    },
    pilmapres: {
        title: "Piagam Penghargaan Mahasiswa Berprestasi (Pilmapres) 2026",
        image: "assets/sertifikat/pilmapres.jpeg",
        tech: "Apresiasi Akademik & Non-Akademik",
        desc: `
            <h4>Detail Penghargaan</h4>
            <p>Piagam penghargaan atas pencapaian terpilih sebagai salah satu <strong>Finalis Mahasiswa Berprestasi Utama (Pilmapres) 2026</strong> tingkat Universitas Duta Bangsa Surakarta.</p>
            <p>Penghargaan ini diberikan berdasarkan penilaian akumulatif terhadap capaian unggulan, kemampuan bahasa asing, keaktifan organisasi, serta presentasi gagasan kreatif berbasis teknologi digital.</p>
        `
    }
};

/* ==========================================================================
   2. LOGIKA KONTROL INTERAKSI POP-UP MODAL
   ========================================================================== */
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openProject(id) {
    const project = projectData[id];
    if (project && modal && modalBody) {
        
        // Cek jika project memiliki file path gambar, tampilkan kontainer gambar modal
        const imageHTML = project.image ? `
            <div class="modal-image-container">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000';">
                <p class="img-caption">*Gambar Dokumentasi / Sertifikat Terkait</p>
            </div>
        ` : '';

        // Menyusun kerangka visual di dalam boks pop-up
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <div class="modal-tech-badge"><i class="fa-solid fa-code"></i> Kategori: ${project.tech}</div>
            ${imageHTML}
            <div class="modal-detail-text">
                ${project.desc}
            </div>
        `;
        // Tampilkan modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Mengunci scroll layar utama saat pop-up aktif
    }
}

function closeProject() {
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll layar utama
    }
}

// Menutup modal otomatis jika area luar kotak pop-up di-klik
window.onclick = function(event) {
    if (event.target == modal) {
        closeProject();
    }
};

// ===============================
// ESC KEY CLOSE MODAL
// ===============================

document.addEventListener(
"keydown",
function(event){

if(
event.key === "Escape"
){
    closeProject();
}

}
);

// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

// Fungsi Klik Hamburger Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Menutup menu drop-down secara otomatis jika salah satu menu tautan diklik
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}