import logo from "../assets/white s logo.png";
import Footericons from "./Footericons";


function Footer(){
  return (
    <div className=" flex flex-col font-mont text-lg font-medium  px-5  py-5  tracking-[0.1rem] mx-auto mt-6  gap-3 items-center md:max-w-[50rem]">
<div>Shashank c</div>
<img src={logo} className="size-8 dark:bg-black"></img>
<div className="flex gap-2 justify-center items-center">
<Footericons></Footericons>
  
</div>
<div className="text-center">Elevating the Digital Experience!</div>
    </div>
  )
}
export default Footer;