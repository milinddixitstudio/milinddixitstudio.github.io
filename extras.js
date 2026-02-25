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
