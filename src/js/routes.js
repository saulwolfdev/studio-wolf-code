
// import "rellax";
import tplHome from "../html/Home.tpl.html";
import tplContant from "../html/Contact.tpl.html";
const routes=()=>{

    const data =document,
    main=data.querySelector(".Main")
    data.addEventListener("DOMContentLoaded",e=>{
        e.preventDefault()
        main.innerHTML=tplHome;
    })
    data.addEventListener("click",e=>{
        if(e.target.matches('a[href="#"]')){
            e.preventDefault()
        }
        if(e.target.matches(".home")){
            main.innerHTML=tplHome
        }
        else if(e.target.matches(".contact")){
            let fondo=document.querySelector(".background")
            fondo.remove()
            main.innerHTML=tplContant
        }
    })
}
export default routes;
