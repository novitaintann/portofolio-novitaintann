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


// ===============================
// MODAL PROJECT
// ===============================

const modal =
document.getElementById(
    "projectModal"
);

const modalBody =
document.getElementById(
    "modalBody"
);

function openProject(project){

let content = "";


// ===============================
// BRIMO
// ===============================

if(project === "brimo"){

content = `

<h2>📊 Analisis Sentimen BRImo</h2>

<img src="assets/brimo1.jpg">

<br><br>

<h3>Latar Belakang</h3>

<p>
Proyek ini bertujuan menganalisis
sentimen ulasan pengguna aplikasi
BRImo dari Google Play Store.
</p>

<br>

<h3>Tujuan</h3>

<p>
Mengelompokkan ulasan pengguna
ke dalam sentimen positif dan
negatif menggunakan NLP.
</p>

<br>

<h3>Tools</h3>

<ul>

<li>Python</li>

<li>Pandas</li>

<li>NLTK</li>

<li>Scikit-Learn</li>

<li>Matplotlib</li>

</ul>

<br>

<h3>Pembelajaran</h3>

<p>
Memahami preprocessing teks,
TF-IDF,
dan evaluasi model klasifikasi.
</p>

`;

}


// ===============================
// ROSSMANN
// ===============================

else if(project === "rossmann"){

content = `

<h2>📈 Rossmann Forecasting</h2>

<img src="assets/rossmann1.jpg">

<br><br>

<h3>Latar Belakang</h3>

<p>
Memprediksi penjualan harian
Rossmann Store menggunakan
metode statistik dan deep learning.
</p>

<br>

<h3>Metode</h3>

<ul>

<li>SARIMA</li>

<li>RNN</li>

<li>LSTM</li>

<li>GRU</li>

</ul>

<br>

<h3>Pembelajaran</h3>

<p>
Memahami forecasting
dan perbandingan performa model.
</p>

`;

}


// ===============================
// TOMATO
// ===============================

else if(project === "tomato"){

content = `

<h2>🍅 Tomato Classification</h2>

<img src="assets/tomato1.jpg">

<br><br>

<h3>Latar Belakang</h3>

<p>
Klasifikasi tomat matang
dan mentah menggunakan
Computer Vision.
</p>

<br>

<h3>Tools</h3>

<ul>

<li>TensorFlow</li>

<li>Keras</li>

<li>OpenCV</li>

</ul>

<br>

<h3>Pembelajaran</h3>

<p>
Mempelajari CNN,
image preprocessing,
dan klasifikasi citra.
</p>

`;

}


// ===============================
// FRUIT
// ===============================

else if(project === "fruit"){

content = `

<h2>🍎 Fruit Freshness Classification</h2>

<img src="assets/fruit1.jpg">

<br><br>

<h3>Latar Belakang</h3>

<p>
Mendeteksi buah segar
dan busuk menggunakan
Deep Learning.
</p>

<br>

<h3>Tools</h3>

<ul>

<li>TensorFlow</li>

<li>Keras</li>

<li>Python</li>

</ul>

<br>

<h3>Pembelajaran</h3>

<p>
Menerapkan image classification
pada studi kasus nyata.
</p>

`;

}

modalBody.innerHTML =
content;

modal.style.display =
"block";

}


// ===============================
// CLOSE MODAL
// ===============================

function closeProject(){

modal.style.display =
"none";

}


// ===============================
// CLOSE MODAL OUTSIDE
// ===============================

window.onclick = function(event){

if(event.target == modal){

modal.style.display =
"none";

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

modal.style.display =
"none";

}

}
);