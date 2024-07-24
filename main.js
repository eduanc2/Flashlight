const conteDegradado= document.querySelector(".conte-degradado");

conteDegradado.addEventListener("mousemove",(e)=>{
    const x= e.clientX;
    const y=e.clientY;

    conteDegradado.style.background=`radial-gradient(circle at ${x}px ${y}px, transparent 0%, black 200px  )`
})