/* Saat */
function updateClock() {
    const clock = document.getElementById('clock');
    if (clock) { // Elementin mevcut olup olmadığını kontrol edin
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(updateClock, 1000);
updateClock();

/* Proje filtreleme */
const filterItems = document.querySelectorAll('.projects__item');
const projectCards = document.querySelectorAll('.projects__card');

if (filterItems && projectCards) {
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(i => i.classList.remove('active-projects'));
            item.classList.add('active-projects');

            const filter = item.textContent.toLowerCase();

            projectCards.forEach(card => {
                if (filter === 'tümü' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* Proje PopUp */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("projects__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    const popup = document.querySelector(".portfolio__popup");
    if (popup) { // Popup elementinin varlığını kontrol edin
        popup.classList.toggle("open");
    }
}

const closePopupButton = document.querySelector(".portfolio__popup-close");
if (closePopupButton) {
    closePopupButton.addEventListener("click", togglePortfolioPopup);
}

function portfolioItemDetails(portfolioItem) {
    const thumbnail = document.querySelector(".pp__thumbnail img");
    const subtitle = document.querySelector(".portfolio__popup-subtitle span");
    const body = document.querySelector(".portfolio__popup-body");

    if (thumbnail && subtitle && body) { // Elementlerin varlığını kontrol edin
        thumbnail.src = portfolioItem.querySelector(".projects__img").src;
        subtitle.innerHTML = portfolioItem.querySelector(".projects__title").innerHTML;
        body.innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
    }
}

/* Daha fazla gör butonu */
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const bioIntro = document.getElementById('about__bioIntro');
    const bioDetails = document.getElementById('about__bioDetails');

    if (toggleButton && bioIntro && bioDetails) {
        toggleButton.addEventListener('click', function () {
            if (bioDetails.style.display === 'none') {
                bioDetails.style.display = 'block';
                toggleButton.textContent = 'Daha Az Gör';
            } else {
                bioDetails.style.display = 'none';
                toggleButton.textContent = 'Daha Fazla Gör';
            }
        });
    }
});

/* İletişim kontrolü */
function contactControl() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nameRegex = /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/; // İsim doğrulama için eksik olan regex eklendi

    if (!name || !email || !message) {
        alert("Lütfen tüm alanları doldurun.");
        return false;
    }

    if (!nameRegex.test(name)) {
        alert("İsim yalnızca harflerden oluşmalıdır.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return false;
    }

    if (message.length < 10) {
        alert("Mesajınız en az 10 karakter olmalıdır.");
        return false;
    }

    alert("Mesajınız başarıyla gönderildi!");
    return true;
}
