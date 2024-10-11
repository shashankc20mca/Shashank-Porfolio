function Educationcard(){
  return (
    <div className="flex flex-row gap-2   px-2 py-2 hover:scale-105">
    <div className="flex flex-col px-5 py-5 gap-2 bord font-mont text-sm  font-medium">

      <div className="flex flex-col px-3 py-1 font-pop text-sm font-semibold ">
        <div>Besant Technologies</div>
      <div>Front End Development Mastery along with react-js</div>
      <div>2024</div>
      </div>

      <div>
        Grade:90%
      </div>
      <div >
      With a comprehensive front-end development course under my belt, I've cultivated expertise in HTML, CSS, and JavaScript. This educational journey has empowered me to craft visually captivating, responsive websites and dynamic web applications. Complementing this, I've refined my abilities through hands-on projects using React.js, a powerful tool for contemporary web development. These experiences have enriched my understanding of front-end development, igniting my passion to design user-centric and captivating digital solutions.
      </div>

    </div>
    <div className="flex flex-col gap-2 ">
<div className="size-3 rounded-full bord2"></div>
<div className="bord2 h-full"></div>
<div className="size-3 rounded-full bord2"></div>
    </div>
    </div>
  )
}
export default Educationcard;