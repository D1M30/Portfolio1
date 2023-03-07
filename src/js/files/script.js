// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



let rotate = document.querySelector('.picture-2');
    
//вешаем на него событие
rotate.onclick = function(){
   this.classList.toggle('picture-animate');
}