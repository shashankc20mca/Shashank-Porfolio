import logo from "../assets/white s logo.png";
import Footericons from "./Footericons";

function Navbar(){

function slidemenu(){
let s=document.querySelector("#menulist");
s.classList.toggle("hidden");
}

function switchmytheme(){
  
let s=document.querySelector("#themeicon");

if(s.innerHTML=='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red" class="size-8"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"></path></svg>'){
  document.documentElement.classList.toggle("dark");
return(s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red" class="size-8"><path d="M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Zm.04-72q82 0 148.78-47.07Q695.55-310.15 727-386q-20 5-39.67 8.5Q667.67-374 648-374q-113.86 0-193.93-80.07Q374-534.14 374-648q0-19.67 3.5-39.33Q381-707 386-727q-75.85 31.45-122.93 98.22Q216-562 216-480q0 110 77 187t187 77Zm-14-250Z"></path></svg>');
}
else{
  s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red" class="size-8"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"></path></svg>';
  document.documentElement.classList.toggle("dark");
}


}



document.addEventListener("scroll", (event) => {

  const scrolltop=document.documentElement.scrollTop;
  const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  const percent=Math.round(scrolltop*100/height);
  console.log(percent);
  let s=document.querySelector("#scl");
  s.innerHTML=`${percent}%`;
});










  return(

    <nav className="flex justify-between  tracking-[0.15rem] items-center px-3 py-3 bg-[#191923] dark:bg-white mx-auto  fixed top-0 right-0 left-0 ">
<img src={logo} className="size-16 hover:scale-110   hover:border-[0.1rem] dark:bg-black rounded-2xl hover:border-[#854ce6] hover:shadow hover:shadow-[#175ce6]"></img>

<div className="hidden lg:block md:font-sha md:font-bold md:text-lg">
  <ul className="flex gap-9">
<li className="hover:scale-110   hover:border-[0.1rem] px-1 py-1 rounded-md border-[#854ce6] hover:shadow hover:shadow-[#175ce6]"> <a href="#about" >About</a></li>
<li className="hover:scale-110   hover:border-[0.1rem] px-1 py-1 rounded-md border-[#854ce6] hover:shadow hover:shadow-[#175ce6]"><a href="#skills">skills</a></li>
<li className="hover:scale-110   hover:border-[0.1rem] px-1 py-1 rounded-md border-[#854ce6] hover:shadow hover:shadow-[#175ce6]">  <a href="#experience">Experience</a></li>
<li className="hover:scale-110   hover:border-[0.1rem] px-1 py-1 rounded-md border-[#854ce6] hover:shadow hover:shadow-[#175ce6]">  <a href="#projects">Projects</a></li>
<li className="hover:scale-110   hover:border-[0.1rem] px-1 py-1 rounded-md border-[#854ce6] hover:shadow hover:shadow-[#175ce6]">  <a href="#education">Education</a></li>

  </ul>
 
  



</div>



<div className="flex gap-2 items-center sm:gap-4 ">
<div className=" border-2 text-xl px-2 py-2 bord " id="scl">1%</div>
  {/* theme-switcher svg */}
<button onClick={switchmytheme} id="themeicon">


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red" className="size-8"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"></path></svg>


</button>
  









  {/* theme-switcher svg */}
<button className="  text-2xl  font-semibold font-ovo hover:scale-110   border-[0.1rem] px-2 py-2 rounded-md border-[#854ce6] shadow shadow-[#175ce6] ">Github</button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-8 lg:hidden" onClick={slidemenu}><path fill="currentcolor" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
</div>

{/* when you press hamburger this displayed */}
<div className="  hidden font-mont text-lg font-medium  fixed inset-0  bg-inherit lg:hidden " id="menulist">
  <nav className="flex justify-between items-center px-3 py-3 ">
  <img src={logo} className="size-16 dark:bg-black rounded-2xl"></img>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="size-8" onClick={slidemenu}><path fill="currentcolor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
  </nav>
  <ul className="flex flex-col gap-9 px-3 py-3 ">
<li> <a href="#about">About</a></li>
<li><a href="#skills" onClick={slidemenu}>skills</a></li>
<li>  <a href="#experience" onClick={slidemenu}>Experience</a></li>
<li>  <a href="#projects" onClick={slidemenu}>Projects</a></li>
<li>  <a href="#education" onClick={slidemenu}>Education</a></li>

  </ul>
  <div className="flex gap-5 px-3 py-3 justify-center">
    <Footericons></Footericons>
  </div>
</div>



    </nav>
  )
}
export default Navbar;