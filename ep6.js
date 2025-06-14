function openGift(index) {
  document.querySelectorAll('.message-box').forEach((box, i) => {
    box.style.display = (i === index) ? 'block' : 'none';
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function revealEasterEgg() {
  const gift = document.getElementById('easterGift');
  gift.classList.remove('hidden');
  gift.scrollIntoView({ behavior: "smooth" });
  gift.style.animation = "pop 0.5s ease";
}

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

/* ---------- CLOSE POPUP ---------- */
document.getElementById('closePopup').addEventListener('click',()=>{
  document.getElementById('popup').style.display='none';
});

/* ---------- REPLY TEXT ---------- */
const saveBtn  = document.getElementById('saveReply');
const replyTxt = document.getElementById('replyText');
const savedMsg = document.getElementById('savedMsg');

saveBtn.addEventListener('click',()=>{
  const val = replyTxt.value.trim();
  if(val){
    localStorage.setItem('hrumReply', val);
    savedMsg.textContent = "✅ Saved locally! (Refresh to see again)";
    replyTxt.value = '';
  }
});

/* ---------- LOAD any saved reply on page load ---------- */
window.addEventListener('load',()=>{
  const stored = localStorage.getItem('hrumReply');
  if(stored) savedMsg.textContent = "📌 Your saved reply: " + stored;
});

/* ---------- VOICE NOTE RECORD ---------- */
const recBtn = document.getElementById('recBtn');
const stopBtn = document.getElementById('stopBtn');
const downloadLink = document.getElementById('downloadLink');
let mediaRecorder, chunks=[];

if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
  recBtn.disabled=true; recBtn.textContent='Mic not supported 😥';
}

recBtn.addEventListener('click', async ()=>{
  const stream = await navigator.mediaDevices.getUserMedia({audio:true});
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start(); chunks=[];
  recBtn.disabled=true; stopBtn.disabled=false; recBtn.textContent='Recording…';
  mediaRecorder.ondataavailable=e=>chunks.push(e.data);
});

stopBtn.addEventListener('click', ()=>{
  mediaRecorder.stop();
  recBtn.disabled=false; stopBtn.disabled=true; recBtn.textContent='🎙️ Record Voice Note';
  mediaRecorder.onstop = ()=>{
    const blob = new Blob(chunks,{type:'audio/webm'});
    const url = URL.createObjectURL(blob);
    downloadLink.href=url;
    downloadLink.download='voice_note.webm';
    downloadLink.textContent='⬇️ Download your note';
    downloadLink.style.display='inline-block';
  };
});


