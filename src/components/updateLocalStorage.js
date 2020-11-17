setInterval(()=>{
    localStorage.setItem("fragments-store", document.querySelector(".app").innerHTML);
},300);