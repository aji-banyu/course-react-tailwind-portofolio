import CardMedium from "../../atoms/CardMedium"
import DoubleCurvedText from "../../atoms/DoubleCurvedText"

const HeroBanner = () => {
  const viewText = (type) => {
    return <div className="absolute top-1 left-1/2 transform -translate-x-1/2 h-27 w-27 flex flex-col gap-2 items-center justify-center rounded-full"> <DoubleCurvedText type={type}/> </div>
  }
  
  return (
    <section className="relative h-[460px] w-full rounded-b-4xl">
      <img src="/images/bg-1.jpg" className="h-full w-full rounded-4xl object-cover shadow-md" />
      <div className="absolute bg-(--bg-primary-cray) h-32 w-32 rounded-full -bottom-18 -translate-x-1/2 transform left-1/2"/>
      <div className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center  justify-center gap-2 rounded-full bg-(--bg-secondary-cray) shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
        {viewText("top")}
        <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>
        {viewText("bottom")}
      </div>

      <div className="absolute right-4 bottom-4 flex flex-col gap-4 max-md:bottom-14">
        <CardMedium
          bgimg={'/images/dea-afrizal-about.png'}
          title="About"
          onClick={() => console.log('actived card')}
        />

          <CardMedium
          bgimg={'/images/dea-afrizal-skills.png'}
          title="Skill"
          onClick={() => console.log('actived card')}
        />
      </div>
    </section>
  )
}

export default HeroBanner