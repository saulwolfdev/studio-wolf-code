
// import "rellax";
import tplHome from "../html/Home.tpl.html";
import tplContant from "../html/Contact.tpl.html";


const routes=()=>{

    const data =document,
    main=data.querySelector(".Main")
    data.addEventListener("DOMContentLoaded",e=>{
        e.preventDefault()
        main.innerHTML=tplHome;
        showPhotos()
    })
    data.addEventListener("click",e=>{
        if(e.target.matches('a[href="#"]')){
            e.preventDefault()
        }
        if(e.target.matches(".home")){
            main.innerHTML=tplHome
            showPhotos()
        }
        else if(e.target.matches(".contact")){
            main.innerHTML=tplContant
        }
    })
}
export default routes;