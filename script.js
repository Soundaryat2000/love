const hearts = document.querySelectorAll('.heart');
const mediaContainer = document.getElementById('media-container');

let openedCount = 0;

hearts.forEach(heart => {
  heart.addEventListener('click', () => {

    if (!heart.classList.contains('opened')) {
      heart.classList.add('opened');
      openedCount++;
    }

    const mediaFile = heart.dataset.media;
    const ext = mediaFile.split('.').pop();

    heart.classList.add('pop');

    mediaContainer.style.display = 'flex';
    mediaContainer.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.textAlign = 'center';

    if (ext === 'jpg' || ext === 'png') {
      const img = document.createElement('img');
      img.src = mediaFile;
      wrapper.appendChild(img);
    }

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close ❤️';
    closeBtn.style.marginTop = '10px';
    closeBtn.style.padding = '6px 12px';
    closeBtn.style.cursor = 'pointer';

    closeBtn.onclick = () => {
      mediaContainer.style.display = 'none';
      mediaContainer.innerHTML = '';

      if (openedCount === hearts.length) {
        showThankYou();
      }
    };

    wrapper.appendChild(closeBtn);
    mediaContainer.appendChild(wrapper);
  });
});

function showThankYou() {
  const jar = document.querySelector('.jar-container');

  const msg = document.createElement('div');
  msg.className = 'final-message';
  msg.innerHTML = `
    <h2>For You, My Love ❤️</h2>
    <p>
      Without you my heart feels empty like this.<br>
      Every heart you touched carried my feelings.
    </p>
    <p>
      Distance may exist,<br>
      but my love never fades.
    </p>
    <p>— Yours, Always 💗</p>
  `;

  jar.appendChild(msg);
}
