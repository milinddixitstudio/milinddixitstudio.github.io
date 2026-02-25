window.addEventListener("load",function(){

  const originalContact=document.querySelector("#collabForm");
  if(!originalContact) return;

  const bubble=document.createElement("div");
  bubble.id="contactBubble";
  bubble.innerHTML="✉";
  bubble.style.opacity="0";
  bubble.style.pointerEvents="none";
  document.body.appendChild(bubble);

  const panel=document.createElement("div");
  panel.id="contactPanel";
  document.body.appendChild(panel);

  panel.appendChild(originalContact);
  originalContact.style.margin="0";

  setTimeout(()=>{
    bubble.style.opacity="1";
    bubble.style.pointerEvents="auto";
  },1800);

  bubble.addEventListener("click",e=>{
    e.stopPropagation();
    panel.classList.toggle("show");
  });

  document.addEventListener("click",e=>{
    if(!panel.contains(e.target)&&!bubble.contains(e.target)){
      panel.classList.remove("show");
    }
  });

});
document.addEventListener("DOMContentLoaded", function(){

// Gallery Lightbox with Back Button Fix
const lightboxOverlay=document.getElementById('lightboxOverlay');
const lightboxContent=document.getElementById('lightboxContent');

document.querySelectorAll('#gallery .grid img').forEach(img=>{
  img.addEventListener('click', ()=>{
    const links=JSON.parse(img.dataset.links);
    lightboxContent.innerHTML='';

    links.forEach((link,i)=>{
      const a=document.createElement('a');
      a.href=link;
      a.target="_blank";
      a.innerText=i===0?'Spotify':i===1?'Amazon Music':'YouTube';
      a.className=i===0?'spotify2':i===1?'amazon2':'youtube2';
      lightboxContent.appendChild(a);
    });

    lightboxOverlay.style.display='flex';

    // ADD HISTORY STATE
    history.pushState({lightbox:true}, "");
  });
});

// Close overlay
function closeLightbox(){
  lightboxOverlay.style.display='none';
}

// Click outside closes
lightboxOverlay.addEventListener('click', (e)=>{
  if(e.target===lightboxOverlay){
    history.back(); // triggers popstate
  }
});

// BACK BUTTON FIX
window.addEventListener('popstate', function(event){
  if(lightboxOverlay.style.display==='flex'){
    closeLightbox();
  }
});

});
