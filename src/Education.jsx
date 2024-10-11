import Educationcard from "./Educationcard";

function Education(){
  return (
    <div className="flex flex-col px-5 py-5 tracking-[0.12rem] mx-auto mt-10 mb-5 gap-5 items-center md:max-w-[50rem]  " id="education">
<div className="font-pop text-3xl font-bold">Education</div>
<div className="text-center font-mont text-lg font-medium">My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
<div className="flex flex-col items-center">
  <Educationcard></Educationcard>
  <Educationcard></Educationcard>
  <Educationcard></Educationcard>
  <Educationcard></Educationcard>
</div>
    </div>
  )
}
export default Education;