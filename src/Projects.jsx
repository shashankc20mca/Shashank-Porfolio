import Projectcards from "./Projectcards";

function Projects(){
  return (
<div className="flex flex-col mx-auto px-5 py-5 tracking-[0.1rem] lg:max-w-[90rem] mt-10 lg:mt-52 mb-5 gap-5 items-center  " id="projects">
<div className="font-pop text-3xl font-bold">
Projects
</div>
<div className="max-w-3xl text-center font-mont text-lg font-medium">
I have worked on a wide range of projects. From websites to web apps. Here are some of my projects.
</div>
<div className="flex flex-col  gap-5 md:flex-row flex-wrap md:justify-center">
<Projectcards></Projectcards>
<Projectcards></Projectcards>
<Projectcards></Projectcards>
<Projectcards></Projectcards>
<Projectcards></Projectcards>
</div>
</div>
  )
}
export default Projects;