const correctPassword = "2010/8/24";
const audio = document.getElementById('bgMusic');

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const errorMsg = document.getElementById('errorMsg');
  if (input === correctPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';

    audio.play().catch(err => {
      console.warn("自动播放失败（可能是浏览器限制）:", err);
    });
  } else {
    errorMsg.style.display = 'block';
  }
}

function showAlbum() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('albumPage').style.display = 'block';
  typeText();
}

function typeText() {
  const text = "❤️ 亲爱的你，每一张照片里都是我对你的喜欢。从遇见你开始，生活变得有了颜色。我愿意陪你走过每一个春夏秋冬。如果你愿意，请牵起我的手，一起走向未来。";
  const container = document.getElementById("typingText");
  let i = 0;
  container.textContent = "";
  const interval = setInterval(() => {
    container.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 100);
}

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createFloatingHeart, 300);

function showExtraPhoto(choice) {
  const agreePhoto = document.getElementById('agreePhoto');
  const disagreePhoto = document.getElementById('disagreePhoto');

  if (choice === 'agree') {
    agreePhoto.style.display = 'block';
    disagreePhoto.style.display = 'none';
    agreePhoto.scrollIntoView({behavior: 'smooth', block: 'center'});
  } else if (choice === 'disagree') {
    disagreePhoto.style.display = 'block';
    agreePhoto.style.display = 'none';
    disagreePhoto.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}
