  const card = document.getElementById('content-box');
  const card2 = document.getElementById('content-box2');
  const maxTilt = 5; // degrees — tweak this for a stronger/weaker lean
 
  function resetTilt() {
     card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
  }

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
 
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
 
    const rotateX = (-y * maxTilt).toFixed(2);
    const rotateY = (x * maxTilt).toFixed(2);
 
    card.style.transform =
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', resetTilt);
 
  card2.addEventListener('mouseleave', () => {
    card2.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
  });

    card2.addEventListener('mousemove', (e) => {
    const rect = card2.getBoundingClientRect();
 
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
 
    const rotateX = (-y * maxTilt).toFixed(2);
    const rotateY = (x * maxTilt).toFixed(2);
 
    card2.style.transform =
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card2.addEventListener('mouseleave', resetTilt);

  window.addEventListener('blur', resetTilt);

card.addEventListener('click', () => {
  if (document.getElementById('CB1-front').style.display === 'none') {
    document.getElementById('CB1-front').style.display = 'flex';
    document.getElementById('CB1-back').style.display = 'none';
  } else {
    document.getElementById('CB1-front').style.display = 'none';
    document.getElementById('CB1-back').style.display = 'flex';
  }
});  
card2.addEventListener('click', () => {
  if (document.getElementById('CB2-front').style.display === 'none') {
    document.getElementById('CB2-front').style.display = 'flex';
    document.getElementById('CB2-back').style.display = 'none';
  } else {
    document.getElementById('CB2-front').style.display = 'none';
    document.getElementById('CB2-back').style.display = 'flex';
  }
});  
