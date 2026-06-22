// ===============================
// TYPING ANIMATION
// ===============================
const typingElement = document.getElementById("typing");
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
    const currentText = roles[roleIndex];
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex++;
            if (roleIndex >= roles.length) { roleIndex = 0; }
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// ===============================
// DARK MODE
// ===============================
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "🌙";
    }
});

// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const target = +counter.dataset.target;
    let current = 0;
    const updateCounter = () => {
        const increment = target / 100;
        if (current < target) {
            current += increment;
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + "+";
        }
    };
    updateCounter();
});

// ===============================
// SCROLL REVEAL
// ===============================
const hiddenElements = document.querySelectorAll(".section, .project-card, .stat-card, .timeline-item");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("show"); }
    });
}, { threshold: 0.15 });

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ===============================
// NAVBAR SHADOW
// ===============================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/* ==========================================================================
   1. DATA KONTEN DETAIL PROJECT (MENDUKUNG MULTIPLE IMAGES / ARRAY)
   ========================================================================== */
const projectData = {
    gic_amikom: {
        title: "Best Research Award - Government Insight Competition (GIC) 2026",
        // TIPS: Masukkan 2 gambar (misal: piagam lomba & screenshot dashboard bento) agar bullet dots & panah otomatis muncul!
        image: ["assets/sertifikat/gic-amikom.jpg", "assets/project/gic/dashboard.png"], 
        tech: "Riset Esai & Komparasi Model Prediktif Nasional",
        desc: `
            <h4>Situation (Latar Belakang Riset)</h4>
            <p>Riset ini diajukan untuk merombak paradigma mitigasi bencana kekeringan pemerintah daerah (pemda) yang selama ini cenderung bersifat reaktif dan berulang. Mengingat anomali curah hujan global menyumbang 22% kerugian ekonomi akibat bencana alam, penelitian ini menawarkan konsep <strong>Smart Eco-Governance</strong> untuk mengubah tata kelola birokrasi menjadi berbasis pencegahan proaktif (predictive governance).</p>
            
            <h4>Action (Metodologi Teknis & Pipa Data)</h4>
            <p>Mengembangkan <i>blueprint</i> sistem pendukung keputusan (SPK) nasional dengan mengintegrasikan empat pilar pipa data otomatis lintas instansi secara real-time: data Klimatologi (BMKG), Hidrologi (Dinas PU), Agraria (Dinas Pertanian/Sensor IoT), dan Sosial (BPS).</p>
            <ul>
                <li><strong>Model ARIMA:</strong> Digunakan untuk menangkap tren proyeksi linear jangka pendek setelah melalui uji stasioneritas data via <i>Augmented Dickey-Fuller</i> (ADF) serta analisis plot ACF/PACF.</li>
                <li><strong>Model LSTM (Deep Learning):</strong> Menggunakan metode <i>sliding window</i> untuk mengeksekusi anomali non-linear jangka panjang melalui gerbang sel (Forget, Input, dan Output Gate).</li>
                <li>Kedua model digabungkan secara hibrida untuk meramalan indeks kekeringan (SPEI) secara presisi dengan evaluasi nilai error otomatis menggunakan metrik <strong>Root Mean Squared Error (RMSE)</strong>.</li>
            </ul>
            
            <h4>Result (Implementasi Kebijakan Publik)</h4>
            <p>Hasil perhitungan matematis diintegrasikan ke dalam prototipe antarmuka <strong>Dashboard Bento Grid</strong> untuk mentranslasikan data rumit AI menjadi tiga output kebijakan praktis bagi pemda:</p>
            <ol>
                <li><strong>Early Warning System Otomatis:</strong> Memicu alarm darurat dini jika prediksi curah hujan berada di bawah 50 mm/bulan dalam durasi tiga bulan berturut-turut.</li>
                <li><strong>Manajemen Pola Tanam Proaktif:</strong> Instruksi otomatis bagi kelompok tani melalui Dinas Pertanian untuk beralih ke tanaman palawija guna memitigasi risiko gagal panen massal.</li>
                <li><strong>Logistik & Anggaran Tanggap Bencana:</strong> Pemetaan rute distribusi armada air bersih ke wilayah zona merah via heatmap, sekaligus landasan taktis pencairan dana Belanja Tidak Terduga (BTT) sebelum fase kritis kekeringan meluas.</li>
            </ol>
        `
    },
    stunting: {
        title: "Predicting Stunting Resilience using XAI",
        image: ["assets/project/stunting/akurasi.png", "assets/project/stunting/xai.png"], 
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
        image: ["assets/project/brimo/wordcloud.png"],
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
        // DISARANKAN: Tambah file gambar ke-2 di sini agar kamu bisa langsung tes fungsionalitas bullet dots & tombol panah samping
        image: ["assets/project/rossman/rossman1.png", "assets/project/rossman/rossman2.png"], 
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
        image: ["assets/project/tomat/matang.png", "assets/project/tomat/mentah.png", "assets/project/tomat/setengah.png"],
        tech: "Convolutional Neural Network (CNN), Random Forest, Streamlit, Python, OpenCV",
        desc: `
            <h4>Situation (Latar Belakang)</h4>
            <p>Membangun aplikasi visi komputer (Computer Vision) pintar terintegrasi untuk mendeteksi dan mengklasifikasikan tingkat kematangan multispesies buah (tomat, jeruk, pisang, apel) secara real-time.</p>
            <h4>Action (Metodologi Teknis)</h4>
            <ul>
                <li>Mengelola pipeline data citra digital mulai dari prapemrosesan gambar (resizing, pencahayaan), ekstraksi fitur warna/tekstur ke format terstruktur (CSV), hingga augmentasi data gambar.</li>
                <li>Melatih model menggunakan kombinasi arsitektur Deep Learning (CNN) dan Machine Learning tradisional (Random Forest).</li>
                <li>Mendeploy model terbaik ke dalam platform antarmuka web interaktif berbasis Streamlit.</li>
            </ul>
            <h4>Result (Hasil Pemodelan)</h4>
            <p>Sistem berhasil melakukan deteksi kualitas dan kematangan buah secara real-time melalui simulasi unggah gambar dengan performa klasifikasi yang tinggi.</p>
        `
    },
    housePrice: {
        title: "Jakarta House Price Prediction App",
        image: ["assets/project/house_price/model.png", "assets/project/house_price/form.png", "assets/project/house_price/result.png"],
        tech: "Random Forest Regressor, XGBoost Regressor, Streamlit, Python, Pandas, Scikit-Learn",
        desc: `
            <h4>Situation (Latar Belakang)</h4>
            <p>Membangun aplikasi web analitik dan prediksi harga properti rumah di wilayah Jakarta yang dinamis untuk membantu calon pembeli atau investor mendapatkan estimasi harga yang akurat berdasarkan spesifikasi bangunan dan lokasi.</p>
            
            <h4>Action (Metodologi Teknis)</h4>
            <ul>
                <li>Mengotomatisasi pipeline akuisisi data dari Kaggle menggunakan <code>kagglehub</code> dan menerapkan pembersihan data (menangani missing values serta mereduksi pencilan/outliers dengan persentil 95).</li>
                <li>Melakukan rekayasa fitur (Feature Engineering) berupa pembuatan rasio luas bangunan terhadap lahan (building ratio) serta melakukan transformasi logaritma (Log Transformation) pada variabel target properti untuk mengatasi data yang skewed.</li>
                <li>Melatih, mengoptimasi, dan membandingkan performa dua algoritma ensemble learning kuat: Random Forest Regressor dan XGBoost Regressor.</li>
                <li>Mendeploy model terbaik ke dalam platform antarmuka web interaktif berbasis Streamlit menggunakan optimasi <code>@st.cache_resource</code> untuk efisiensi waktu pemuatan model.</li>
            </ul>
            
            <h4>Result (Hasil Pemodelan)</h4>
            <p>Aplikasi web berhasil memprediksi estimasi harga rumah secara dinamis berdasarkan input spesifikasi pengguna dengan visualisasi metrik performa model (R² Score, MAE, RMSE) yang transparan.</p>
        `
    },
    hubisintek: {
        title: "Sertifikat Hubisintek",
        image: [], 
        tech: "Penghargaan Jurnal / Sertifikasi Resmi",
        desc: `
            <h4>Pratinjau Sertifikat</h4>
            <div class="pdf-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
                <iframe src="assets/sertifikat-hubisintek.pdf" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" type="application/pdf"></iframe>
            </div>
        `
    },
    senatib: {
        title: "Sertifikat Seminar Nasional SENATIB",
        image: ["assets/sertifikat/senatib-main.jpg", "assets/sertifikat/senatib-dokumentasi.jpg"], 
        tech: "Penghargaan Jurnal / Sertifikasi Resmi",
        desc: `
            <h4>Detail Publikasi Perancangan Sistem</h4>
            <p>Sertifikat penghargaan sebagai pemakalah atas artikel ilmiah berjudul <strong>"Perancangan Sistem E-Recruitment Berbasis Web pada Toko Ganep's Tradisi Solo sebagai Upaya Digitalisasi"</strong> dalam prosiding Seminar Nasional Teknologi Informasi dan Bisnis (SENATIB) 2025.</p>
        `
    },
    tdc_its: {
        title: "Sertifikat Top 5 Technology Development Competition (TDC) ITS",
        image: ["assets/sertifikat/TDC-ITS.jpeg", "assets/project/tdc/poster_heyra.png"], 
        tech: "Penghargaan Kompetisi Tingkat Nasional",
        desc: `
            <h4>Detail Penghargaan</h4>
            <p>Sertifikat resmi atas pencapaian sebagai <strong>Top 5 Finalis</strong> dalam ajang Technology Development Competition (TDC) yang diselenggarakan oleh Institut Teknologi Sepuluh Nopember (ITS) pada tahun 2024.</p>
            <p>Kompetisi ini berfokus pada pengembangan konsep arsitektur aplikasi inovatif bernama <strong>"Heyra"</strong> yang dirancang khusus untuk membantu mempermudah komunikasi bagi penyandang tuna rungu wicara.</p>
        `
    },
    pilmapres: {
        title: "Piagam Penghargaan Mahasiswa Berprestasi (Pilmapres) 2026",
        image: ["assets/sertifikat/pilmapres.jpeg"],
        tech: "Apresiasi Akademik & Non-Akademik",
        desc: `
            <h4>Detail Penghargaan</h4>
            <p>Piagam penghargaan atas pencapaian terpilih sebagai salah satu <strong>Finalis Mahasiswa Berprestasi Utama (Pilmapres) 2026</strong> tingkat Universitas Duta Bangsa Surakarta.</p>
        `
    }
};

/* ==========================================================================
   2. LOGIKA INTERAKSI POP-UP MODAL (DENGAN SLIDER AUTOMATIC)
   ========================================================================== */
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
let currentSlideIndex = 0;
let currentSlideArray = [];

function openProject(id) {
    const project = projectData[id];
    if (project && modal && modalBody) {
        
        let badgeHTML = '';
        if(['hubisintek', 'senatib', 'tdc_its', 'pilmapres', 'gic_amikom'].includes(id)) {
            // Bagian Award / Prestasi: Bersih hanya memunculkan teks kategori
            badgeHTML = `<div class="modal-tech-badge">${project.tech}</div>`;
        } else {
            // Bagian Detail Project: Bersih hanya memunculkan daftar stack teknologi tanpa ikon </>
            badgeHTML = `<div class="modal-tech-badge">${project.tech}</div>`;
        }

        let imageHTML = '';
        if (project.image && project.image.length > 0) {
            currentSlideIndex = 0;
            currentSlideArray = project.image;

            let slides = '';
            let dots = '';
            let arrows = '';

            project.image.forEach((imgSrc, index) => {
                slides += `
                    <div class="mySlides animate-fade" style="display: ${index === 0 ? 'block' : 'none'}; text-align:center;">
                        <img src="${imgSrc}" alt="Dokumentasi ${index + 1}" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000';">
                    </div>
                `;
                // Buat bullet/dot untuk setiap gambar
                dots += `
                    <span class="slide-dot ${index === 0 ? 'active' : ''}" onclick="currentSlide(${index})"></span>
                `;
            });

            // FIX: Mengubah panah string kasar menjadi ikon Font Awesome yang melayang elegan di samping luar foto
            if (project.image.length > 1) {
                arrows = `
                    <button class="nav-slide-btn prev-btn" onclick="moveSlide(-1)" aria-label="Previous">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="nav-slide-btn next-btn" onclick="moveSlide(1)" aria-label="Next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                `;
            }

            // Gabungkan ke dalam struktur baru yang fleksibel
            imageHTML = `
                <div class="modal-carousel-wrapper">
                    <div class="modal-image-container">
                        ${slides}
                        ${arrows}
                    </div>
                    ${project.image.length > 1 ? `<div class="modal-dots-container">${dots}</div>` : ''}
                </div>
            `;
        }

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            ${badgeHTML}
            ${imageHTML}
            <div class="modal-detail-text">
                ${project.desc}
            </div>
        `;
        
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    }
}

// Fungsi kontrol navigasi tombol panah
function moveSlide(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("slide-dot");
    if (slides.length === 0) return;

    slides[currentSlideIndex].style.display = "none";
    if (dots.length > 0) dots[currentSlideIndex].classList.remove("active");

    currentSlideIndex += n;

    if (currentSlideIndex >= slides.length) { currentSlideIndex = 0; }
    if (currentSlideIndex < 0) { currentSlideIndex = slides.length - 1; }

    slides[currentSlideIndex].style.display = "block";
    if (dots.length > 0) dots[currentSlideIndex].classList.add("active");
}

// Fungsi kontrol ketika lingkaran dot diklik langsung
function currentSlide(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("slide-dot");
    if (slides.length === 0) return;

    slides[currentSlideIndex].style.display = "none";
    if (dots.length > 0) dots[currentSlideIndex].classList.remove("active");

    currentSlideIndex = n;

    slides[currentSlideIndex].style.display = "block";
    if (dots.length > 0) dots[currentSlideIndex].classList.add("active");
}

function closeProject() {
    if (modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
}

window.onclick = function(event) {
    if (event.target == modal) { closeProject(); }
};

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { closeProject(); }
});

// ===============================
// PORTFOLIO CATEGORY FILTER BAR
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 30);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => { card.style.display = "none"; }, 200);
                }
            });
        });
    });
});

// ===============================
// HAMBURGER MENU MOBILE (FIXED)
// ===============================
const hamburger = document.querySelector('.hamburger'); // Mengambil class dari tombol hamburger
const navMenu = document.querySelector('.navbar ul');  // Mengambil elemen ul di dalam navbar sesuai CSS

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah event bubbling
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Menutup menu kembali secara otomatis saat salah satu link navigasi diklik
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Opsional: Menutup menu jika pengguna mengklik area di luar menu navbar
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===============================
// AUTOMATIC FOOTER YEAR
// ===============================
const yearElement = document.getElementById("currentYear");
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear > 2026 ? `2026 - ${currentYear}` : "2026";
}