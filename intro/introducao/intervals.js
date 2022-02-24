const interval = setInterval(() => {
  console.log(new Date(), "Interval");
}, 2000);

setTimeout(() => {
  console.log(new Date(), "Timeout");

  clearInterval(interval);
}, 10000);
