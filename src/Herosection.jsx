import photo from "../assets/my_image.png";
import Footericons from "./Footericons";
import {useTypewriter,cursor} from 'react-simple-typewriter';



function Herosection(){


  const [typeffect2]=useTypewriter({
    words:['MERN Developer','Full stack Developer'],
    loop:{},
typeSpeed:200,
delaySpeed:400,

  })


return(
  <div className=" flex flex-col items-center text-center  tracking-[0.1rem] mx-auto   lg:flex-row-reverse mt-20   mb-11 lg:justify-between lg:max-w-[90rem] lg:text-start" id="about">
    <div className=" hidden lg:flex md:flex  md:flex-row  md:px-2 md:py-2  lg:flex-col lg:px-2 gap-14 lg:py-14  lg:self-start">
<Footericons></Footericons>
    </div>
    <div className=" px-5 mt-5 mb-5 flex justify-center  lg:items-center">
    <img src={photo} className="size-56 rounded-full  lg:size-96 bord1"></img>
    </div>
    
    <div className=" text-xl flex flex-col gap-5 mt-5 mb-5 px-5  font-sha sm:max-w-[40rem]   items-center lg:gap-10 lg:items-start sm:text-2xl">
     <div className="font-pop text-4xl font-bold"> Hi,I am </div>
      <div className="font-pop text-4xl font-bold first-letter:text-red-700 first-letter:text-5xl">Shashank c</div>
      <div className="font-pop text-2xl font-bold ">I am <span className="text-[#854ce6]" >{typeffect2}</span></div>
      <div className="font-mont text-lg font-medium">A skilled React developer with a strong portfolio, passionate about staying updated on frontend tech. Collaborative and committed to quality, you thrive in dynamic teams. Eager to contribute creativity and bring innovative ideas to life.</div>
      <button className="text-2xl  font-semibold hover:scale-110   border-[0.1rem] px-2 py-2 rounded-md border-[#854ce6] shadow shadow-[#175ce6] font-ovo   w-36 lg:text-3xl ">Resume</button>
    </div>

    
  </div>
)
}
export default Herosection;