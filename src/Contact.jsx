function contact(){
  return(
<div className="flex flex-col px-5  py-5 tracking-[0.1rem] mx-auto mt-10 mb-5 gap-5 items-center md:max-w-[50rem]">
<div className="font-pop text-3xl font-bold">Contact</div>
<div className="text-center font-mont text-lg font-medium ">Feel Free to reach out to me for any questions or opportunities!</div>
<div className="flex flex-col gap-3 px-4 py-4 items-center bord  w-full sm:max-w-[70%]">
<div className="font-pop text-lg font-bold">Email Me 🚀</div>
<input type="text" placeholder="Your Email" className="bord2 w-full px-2 py-2 text-white font-mont text-lg  font-semibold bg-inherit outline-none"></input>
<input type="text" placeholder="Your Name " className="bord2 w-full px-2 py-2 text-white font-mont text-lg  font-semibold bg-inherit outline-none"></input>
<input type="text" placeholder="Your subject" className="bord2 w-full px-2 py-2 text-white font-mont text-lg  font-semibold bg-inherit outline-none"></input>
<textarea  rows="5" placeholder="Message" className="bord2 w-full px-2 py-2  text-white font-mont text-lg  font-semibold bg-inherit outline-none"></textarea>
<button className="bord2 w-full px-2 py-2 font-pop text-lg font-bold"> send</button> 

</div>
</div>
  )
}
export default contact;