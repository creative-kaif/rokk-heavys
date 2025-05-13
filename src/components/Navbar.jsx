import logo from "../assets/img/logo-white.png";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-12 max-md:py-4  ">
            <div className="container px-4 max-md:px-8 md:px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">

                        <div className="">
                            <img className="h-12 max-md:h-8" src={logo} alt=""/>
                        </div>
                        {/*<div className="flex justify-center items-center">*/}
                        {/*    <a href="https://services.rokk-api.com/" className="font-Poppins-Bold max-md:py-3 max-md:px-3 py-4 px-6 rounded-full border-0 border-Orange-200 text-white tracking-[3px] uppercase text-sm hover:bg-black-200 transition-all visible max-sm:hidden">Download App</a>*/}
                        {/*    <a href="https://services.rokk-api.com/" className="font-Poppins-Bold max-md:py-3 max-md:px-3 max-md:text-xs ml-4 py-4 px-6 rounded-full border-2 border-Orange-200 text-white tracking-[3px] uppercase text-sm hover:bg-Orange-200 hover:text-black-400 transition-all">FREE TRIAL</a>*/}
                        {/*</div>*/}

                </div>
            </div>
        </nav>
    )
}
export default Navbar
