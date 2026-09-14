const tg = window.Telegram.WebApp;
if (tg) { tg.ready(); tg.expand(); }

// ============================================
// ⚠️ НАСТРОЙКА
// ============================================
const TELEGRAM_USERNAME = 'pisdezix';

// ============================================
// ОТКРЫТИЕ TELEGRAM
// ============================================
function openTelegram(service) {
    let text;
    if (service) {
        text = 'Здравствуйте! Хочу заказать: ' + service + '.';
    } else {
        text = 'Здравствуйте! Хочу заказать сайт. Расскажите про цены и сроки.';
    }
    const url = 'https://t.me/' + TELEGRAM_USERNAME + '?text=' + encodeURIComponent(text);
    if (tg) tg.openTelegramLink(url);
    else window.open(url, '_blank');
}

// ============================================
// FAQ АККОРДЕОН
// ============================================
document.querySelectorAll('.faq-item').forEach(function(item) {
    item.querySelector('.faq-q').addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
    });
});
