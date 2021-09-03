const clock = document.querySelector("#clock");

function getNow() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `
  ${year}年 ${month}月 ${day}日 
  ${hours < 10 ? String(hours).padStart(2, "0") : hours}h :${
    minutes < 10 ? String(minutes).padStart(2, "0") : minutes
  }m  :${seconds < 10 ? String(seconds).padStart(2, "0") : seconds}s
  `;
}

getNow();
setInterval(() => {
  getNow();
}, 1000);
