import { motion } from "motion/react"
import HeavysLogo from "../assets/img/heavys-logo.png"

const Hero = () => {
    return (
        <div className="hero-section h-full relative">
            <div className="container py-6 px-6 mx-auto">
                <div className="max-md:mt-40 mt-14 text-center">
                    <motion.h1
                        initial={{y:70, opacity:0,}}
                        animate={{ y:0, opacity: 1, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-8xl max-w-3xl max-md:text-5xl mx-auto font-TitlingGothicFB text-white tracking-wider leading-none uppercase">Feel Every Riff. Hear Every Roar.
                    </motion.h1>
                    <motion.p
                        initial={{y:70, opacity:0,}}
                        animate={{ y:0, opacity: 1, }}
                        transition={{ duration: 0.5, delay:0.3 }}
                        className="mt-4 font-Poppins-Regular text-center tracking-normal leading-[32px] max-md:text-[16px] max-md:leading-[28px] text-xl max-w-[420px] mx-auto text-black-50">
                        <span className="text-Orange-200 font-Poppins-Bold">HEAVYS x ROKK</span>   — The Ultimate Rock & Metal Audio Experience
                    </motion.p>
                    <br/>
                    <motion.p
                        initial={{y:70, opacity:0,}}
                        animate={{ y:0, opacity: 1, }}
                        transition={{ duration: 0.5, delay:0.3 }}
                        className="mt-2 font-TitlingGothicFB uppercase text-center tracking-wide leading-[32px] max-md:text-[24px] max-md:leading-[28px] text-3xl max-w-[240px] max-md:max-w-[180px] mx-auto text-black-50">
                        Get <span className="text-Orange-200 "> 3 Months Free</span>  of ROKK HIFI
                    </motion.p>
                    <motion.div
                        initial={{y:30, opacity:0,}}
                        animate={{ y:0, opacity: 1, }}
                        transition={{ duration: 0.5, delay:0.7 }}
                        className="mt-16 max-md:mt-10 relative">
                        <div className="relative text-center">
                            <a href="https://services.rokk-api.com/"
                               className=" shadow-xl shadow-Orange-200/20 hover:shadow-Orange-200/30 font-Poppins-Bold  max-md:py-4 max-md:px-8 max-md:text-sm py-6 px-12 rounded-full bg-Orange-200  text-white tracking-[1px] uppercase text-lg hover:text-black-400 hover:bg-gradient-to-r hover:from-Orange-200 hover:to-Orange-100 transition-all">
                                START YOUR 90 DAYS FREE TRIAL
                            </a>
                        </div>


                        <div className="flex items-center justify-center">
                            <p className="relative mt-16 max-md:mt-8 max-md:text-sm font-Poppins-Regular text-white text-lg text-center">Exclusively for <img
                                src={HeavysLogo} className="p-2" alt=""/>Customers</p>

                        </div>
                    </motion.div>


                </div>
            </div>
        </div>
    )
}
export default Hero
