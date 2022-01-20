function logCurrentTime() {
  console.log(new Date().toISOString());
}

const myInterval = setInterval(logCurrentTime, 1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 5000);
