import mockup from "../assets/white mackbook.png";



function Projectcards(){
  return (
<div className="flex flex-col bord px-3 pt-3 pb-20 gap-3 hover:scale-105 ">
  <img src={mockup} className="h-[15rem] w-[25rem]"></img>
  <div className="flex font-mont text-lg font-medium gap-4 ">
    <div className="px-2 py-2 bord2">HTML</div>
    <div className="px-2 py-2 bord2">css</div>
    <div className="px-2 py-2 bord2">javascript</div>
  </div>
<div className="font-pop text-lg font-bold">
  Project Title
</div>
<div className="font-mont text-sm  font-medium">
  Project description
</div>
</div>
  );
}
export default Projectcards;