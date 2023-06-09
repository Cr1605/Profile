import React from 'react'
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { staggerChildren, textVariant, fadeIn } from '../../utils/motion'

const Portfolio = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="portfolio"></a>

            <div className={`innerWidth flexCenter ${css.container}`}>
                <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">My Project</span>
                        <p style={{ marginTop: "10px" }}>It's simple but I hope you enjoy it</p>
                    </div>
                    <span className="secondaryText">Explore More Works</span>
                </motion.div>
                <div className={`flexCenter ${css.showCase}`}>
                    <a href="https://ecommercehacode.pages.dev/"><motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" className={css.image} /></a>
                    <a href="https://fitclubhacode.pages.dev/"><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" className={css.image} /></a>
                    <a href="https://homyzhacode.pages.dev/"><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" className={css.image} /></a>
                </div>
            </div>


        </motion.section>
    )
}

export default Portfolio
