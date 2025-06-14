/* Theme toggle / starry easter‑egg */
let toggleCount=0;
document.getElementById('themeBtn').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');
  toggleCount++;
  if(toggleCount===2){
    document.body.classList.toggle('starry');
    document.documentElement.classList.toggle('starry');
    toggleCount=0;
  }
});
