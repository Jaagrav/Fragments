const checkNeutral = () => {
    if(document.querySelector(".treeview div") && document.querySelectorAll(".treeview div").length > 0)
        document.querySelector(".no-content-text").style.display = "none";
    else
        document.querySelector(".no-content-text").style.display = "block";
    if(document.querySelector('.tab') && document.querySelectorAll('.tab').length > 0){
        document.querySelector(".workarea").classList.add("open");
        document.querySelector(".workarea-preview").classList.remove("open");
    }else{
        document.querySelector(".workarea").classList.remove("open");
        document.querySelector(".workarea-preview").classList.add("open");    
    }
}