// let hiruja = "smart"

function updateAge() {
  //const dob = new Date('2010-10-02T18:19:00Z') Commented becuz the time is local and not UTC 0
  const dob = new Date('2010-10-02T12:49:00Z'); // So if +5.30, you actually subtract it
  
  const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });
  const now = new Date(currentDate);

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  let hours = now.getHours() - dob.getHours();
  let minutes = now.getMinutes() - dob.getMinutes();
  let seconds = now.getSeconds() - dob.getSeconds();


  if (seconds < 0) {
      seconds += 60;
      minutes--;
  }
  if (minutes < 0) {
      minutes += 60;
      hours--;
  }
  if (hours < 0) {
      hours += 24;
      days--;
  }
  if (days < 0) {
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += lastMonth;
      months--;
  }
  if (months < 0) {
      months += 12;
      years--;
  }

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (years > 0 && months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    triggerConfetti();
  }
}

function triggerConfetti() {
  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Random fall duration
      confetti.style.opacity = Math.random(); // Random opacity
      document.getElementById('ageSJ').appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
          confetti.remove();
      }, 5000);
  }
}

updateAge();

setInterval(updateAge, 1000);
