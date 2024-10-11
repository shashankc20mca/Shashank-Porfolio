import Skillscard from "./Skillscard";

function Skills(){
  return(
    <div className="flex flex-col mt-20  mb-5 px-5  tracking-[0.1rem] text-center items-center gap-3 mx-auto md:max-w-[80rem] " id="skills">
      <div className="font-pop text-3xl font-bold">Skills</div>
      <div className="font-mont text-lg font-medium">Here are some of my skills on which I have Learnt</div>
      <div className="flex flex-col gap-3 md:flex-row">
<Skillscard></Skillscard>
<Skillscard></Skillscard>
<Skillscard></Skillscard>
      </div>

    </div>
  )
}
export default Skills;