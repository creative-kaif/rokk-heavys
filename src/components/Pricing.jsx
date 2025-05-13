import Check from "../assets/img/check.png";
import Info from "../assets/img/info-icon.svg";
import HeavyIcon from "../assets/img/heavyicon.svg";
import {motion} from "motion/react";

import React from "react";


const Pricing = () => {
    let features = [
        {
            id:1,
            title: "All your favourite bands & Genre",
        },
        {
            id:2,
            title: "Including every other style of Music",
        },
        {
            id:3,
            title: "HiFi Sound Quality",
        },
        {
            id:4,
            title: "Background information on all artists",
        },
        {
            id:5,
            title: "Up to 10% Direct Artist Support",
        },
        {
            id:6,
            title: "More money for bands and artists",
        },

    ];






    return (

        <div className="pricing-section bg-black-400 bg-gradient-to-t from-black-300 from-0% to-black-400 to-25% text-Orange-200">
            <div className="container mx-auto max-md:px-6">
                <div
                            className="pricing-plans max-w-4xl pb-32 max-md:pb-24 mx-auto">
                    <motion.div
                        initial={{y:0, opacity:0,}}
                        animate={{ y:50, }}
                        whileInView={{opacity:1, y:-20}}
                        viewport={{ once: true}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="content-head text-center">
                        {/*<h1 className=" text-center text-6xl max-w-7xl max-md:text-4xl mx-auto font-TitlingGothicFB text-white tracking-wide leading-none uppercase">*/}
                        {/*    Exclusively for <span><img src={HeavysIcon} className="" alt=""/></span> customers*/}
                        {/*</h1>*/}
                        <h1 className="ml-3 text-6xl max-md:text-4xl max-w-4xl tracking-wide font-TitlingGothicFB text-white uppercase text-center items-center">Exclusively for <span><img
                            src={HeavyIcon} className="relative -mt-4 max-md:-mt-0 inline items-center max-md:w-6 max-md:mx-1 mx-3 mb-2"
                            alt=""/>HEAVYS</span> customers</h1>
                        <p className="mx-auto text-center max-md:max-w-lg transition-all ease-in mt-2 text-black-150 font-Poppins-Regular max-md:text-md text-base leading-6">
                            Because true metal deserves a proper number.
                        </p>




                    </motion.div>
                    <motion.div
                        initial={{y:100, opacity:0,}}
                        animate={{ y:0, }}
                        whileInView={{opacity:1, y:-40}}
                        viewport={{ once: true}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="content-body mx-auto mt-24 max-md:mt-12">
                        <div
                            className="card-price bg-black-100 p-[2px] rounded-3xl  transition ease-in duration-300  hover:bg-gradient-to-l  bg-gradient-to-r from-Orange-200 to-black-100/10">
                            <div className="body p-[1px] bg-black-100 rounded-3xl ">
                                <div className="grid  grid-cols-12 max-md:grid-cols-1 gap-0 p-8 max-md:p-6">
                                    <div className="info-icon absolute justify-self-end ">
                                        <a className="justify-self-end" href="https://rokk-app.com/faq">
                                            <img className="" src={Info} alt=""/>
                                        </a>
                                    </div>
                                    <div className="price-body col-span-6 max-md:col-span-1  border-r-2 max-md:border-r-0 max-md:border-b-2 border-black-250 min-w-xl">
                                        <h5 className="font-Poppins-Medium tracking-tight uppercase text-white text-4xl">ROKK HIFI</h5>
                                        <div className="rate">
                                            <h4 className="text-Orange-200 max-md:text-4xl text-5xl mt-4 tracking-tight font-Poppins-Medium">€6.66
                                                <span
                                                    className="font-Poppins-Regular text-xl text-black-150">/per month</span>
                                            </h4>
                                        </div>
                                        <p className=" mt-4 font-Poppins-Regular text-lg text-Orange-200">for the first 3 months after trial.</p>
                                        <div className="btn">
                                            <div className="relative mt-12 max-md:mb-12">
                                                <a href="https://services.rokk-api.com/"
                                                   className="shadow-xl shadow-Orange-200/20 hover:shadow-Orange-200/30 font-Poppins-Bold  max-md:py-4 max-md:px-5 max-md:text-xs py-4 px-8 rounded-full bg-Orange-200  text-white tracking-[1px] uppercase text-sm hover:text-black-400 hover:bg-gradient-to-r hover:from-Orange-200 hover:to-Orange-100 transition-all">
                                                    START YOUR 90 DAYS FREE TRIAL
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="features wi-full   mr-[-100px] col-span-6 max-md:mt-6">

                                        {features.map(feature => (
                                            <div className="feature-item pl-8 max-md:pl-0 ">
                                                <div className="item items-center py-2 inline-flex">
                                                    <span className="inline-block w-5 mr-2 max-md:w-4">
                                                        <img src={Check} alt=""/></span>
                                                    <h6 className="text-base max-md:text-sm text-black-50 font-Poppins-Regular tracking-normal">{feature.title}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <p className="mx-auto text-center text-black-50 font-Poppins-Regular">€10.99/month after that cancel anytime</p>
                </div>
            </div>
        </div>
    )
}


export default Pricing
