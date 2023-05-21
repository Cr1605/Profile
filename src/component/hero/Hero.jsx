import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>
            {/* upperElements */}
            <div className="upperElements">
                <span>Hey There, <br/> I'm Ha.</span>
                <span>I design beautiful simple <br /> things, And I love what i do</span>
            </div>
            {/* lowerElements */}
            <div className="lowerElements">
                <div className="experience">
                    <div className="primaryText">10</div>
                    <div className="secondaryText">
                        <div>Year</div>
                        <div>Experience</div>
                    </div>
                </div>
                <div className="certificate">
                    <img src="./certificate.png" alt="" />
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
