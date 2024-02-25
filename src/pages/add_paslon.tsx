import Judul from "../components/judul"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn from "../components/btn"
import Img from "../assets/img_layout/mantan.png"
function Add_paslon() {
    return (
        <div className="">
            <Navbar />

            <main className="pt-[60px] lg:pt-[65px]  ">
                <Judul warna="text-[#5E5400] flex justify-center pt-4" text="ADD PASLON" />
                <div className="flex justify-center">
                    <div className="lg:w-[50%] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14">
                        <img className=" hidden lg:flex" src={Img} alt="" />
                    </div>
                    <div>
                        <form className="md:w-[589px] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14">
                            <div className="flex flex-col pb-10">
                                <label htmlFor="" className=" text-[#5E5400] font-bold text-[24px]">Nama </label>
                                <input type="text" className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]" />
                            </div>
                            <div className="flex flex-col pb-10">
                                <label htmlFor="" className=" text-[#5E5400] font-bold text-[24px]">No Urut</label>
                                <input type="text" className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]" />
                            </div>
                            <div className="flex flex-col pb-10">
                                <label htmlFor="" className=" text-[#5E5400] font-bold text-[24px]">Visi Misi</label>
                                <textarea className="border-4 border-[#5E5400] rounded-xl  w-[300px]  md:w-[478px] h-[200px]"></textarea>
                            </div>
                            <Btn text="SUMBIT" color="border-none font-bold bg-[#5E5A00] text-white" />

                        </form>
                    </div>
                </div>


            </main>
            <Footer />
        </div>
    );
}

export default Add_paslon