// 1. LocalStorage (Завдання 1)
localStorage.setItem('userOS', navigator.platform);
localStorage.setItem('userBrowser', navigator.userAgent);
document.getElementById('storage-info').innerHTML = 
    `<strong>Ваша ОС:</strong> ${localStorage.getItem('userOS')} <br> <strong>Ваш браузер:</strong> ${localStorage.getItem('userBrowser')}`;

// 2. API Відгуки українською (Завдання 2 - Варіант 17)
fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
    .then(res => res.json())
    .then(comments => {
        const container = document.getElementById('comments-section');
        container.innerHTML = '';
        const ukrReviews = [
            "Відповідальний студент, відмінні знання Python.",
            "Швидко опановує нові інструменти кібербезпеки.",
            "Рекомендую до стажування, дуже старанний.",
            "Має хороший рівень технічної англійської.",
            "Успішно виконав усі практичні кейси."
        ];
        comments.forEach((c, i) => {
            const div = document.createElement('div');
            div.style.borderBottom = "1px solid #eee";
            div.style.padding = "10px 0";
            div.innerHTML = `<strong>${c.name}</strong><br>${ukrReviews[i] || "Чудовий спеціаліст!"}`;
            container.appendChild(div);
        });
    });

// 3. Модальне вікно (Завдання 3 - таймер 1 хв)
setTimeout(() => { document.getElementById('feedbackModal').style.display = 'block'; }, 60000);
document.getElementById('closeModal').onclick = () => { document.getElementById('feedbackModal').style.display = 'none'; };

// 4. Перемикач теми (Завдання 4)
const btn = document.getElementById('theme-toggle');
btn.onclick = () => {
    document.body.classList.toggle('dark-theme');
    btn.innerText = document.body.classList.contains('dark-theme') ? ' ☀️ Денна тема' : ' 🌙 Нічна тема';
};