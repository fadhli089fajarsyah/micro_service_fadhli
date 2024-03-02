import Judul from "../components/judul"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn from "../components/btn"



function Login() {
    return (
        <div className="">
            <Navbar />

            <main className="pt-[60px] lg:pt-[65px] flex justify-center  bg-gray-200">
                <form className="md:w-[589px] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14">
                    <Judul warna="text-[#5E5400]" text="LOGIN" />
                    <div className="flex flex-col pb-10">
                        <label
                            htmlFor="Username"
                            className=" text-[#5E5400] font-bold text-[24px]">
                            Username
                        </label>

                        <input
                            type="text"
                            id="Username"
                            name="Username"
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />

                    </div>
                    <div className="flex flex-col pb-10">

                        <label
                            htmlFor="Password" className=" text-[#5E5400] font-bold text-[24px]">
                            Password
                        </label>

                        <input
                            type="text"
                            id="Password"
                            name="Password"
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />

                    </div>
                    <Btn tipe='sumbit' text="SUMBIT" color="border-none font-bold bg-[#5E5A00] text-white" />
                    <div className="flex py-[20px]">
                        <p className="text-[#595959]">Belum memiliki akun ?</p>
                        <a href="Regrister" className="text-[#0092A6] underline underline-offset-4 "> Register</a>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default Login