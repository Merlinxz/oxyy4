// hugBtn
document.getElementById('hugBtn').addEventListener('click', () => {
    const gif = document.getElementById('gif');
    gif.src = 'https://media.giphy.com/media/saTZnyc5qqEn8Uaj7r/giphy.gif';
    document.querySelector('h2').innerText = 'กอดแน่นๆ ไม่ปล่อยเลยนะ 💞';
    document.getElementById('message1').innerText = 'ไม่เป็นไรแล้วน้า เค้าอยู่ตรงนี้เสมอ 💗';
    document.getElementById('message2').innerText = 'เค้าจะกอดเธอไว้ตลอดไปเรยน้ะะ 😘';
});

// cheerBtn
document.getElementById('cheerBtn').addEventListener('click', () => {
    const gif = document.getElementById('gif');
    gif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFrM2tzbTliZ3B4N3BnY3podGdxb3hjZ21nZWx2aGZvZWJiMWs0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/bLNK308DJDieOC0P9o/giphy.gif';
    document.querySelector('h2').innerText = 'เห็นมั้ย! แฟนเค้ายิ้มแล้ว 😊✨';
    document.getElementById('message1').innerText = 'ชอบเวลาเธอยิ้มม 💖';
    document.getElementById('message2').innerText = 'ยิ้มแร้วน่ารักที่สุดเรยย แต่ก็น่ารักตลอดอยู่แร้วว 😍';
});