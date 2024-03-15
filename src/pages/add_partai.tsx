import Judul from "../components/judul"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn from "../components/btn"
import Img from "../assets/img_layout/mantan.png"
import { useState, useEffect } from "react"

interface formDataPartai {
    nama_partai: string,
    ketua_umum_partai: string,
    visi_misi: string,
    alamat_partai: string,
    image_partai: string,
}

function Add_partai() {
    const [formData, setFormData] = useState<formDataPartai>({
        nama_partai: "",
        ketua_umum_partai: "",
        visi_misi: "",
        alamat_partai: "",
        image_partai: "imggg.png",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/api/partaiAdd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })  
            if (response) {
                console.log("User berasil")
                window.location.reload()
                alert("data sudah di tambahkan")
            } else {
                alert("data gaga di tambahkan")
            }

        }catch(error){
            console.error(error);
        }
    }


    return (
        <div className="">
            <Navbar />

            <main className="pt-[60px] lg:pt-[65px]  ">
                <Judul warna="text-[#5E5400] flex justify-center pt-4" text="ADD PARTAI" />
                <div className="flex justify-center">
                    <div className="lg:w-[50%] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14">
                        <img className=" hidden lg:flex" src={Img} alt="" />
                    </div>
                    <div>


                        <form
                            onSubmit={handleSumbit}
                            className="md:w-[589px] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14">
                            <div
                                className="flex flex-col pb-10">
                                <label
                                    htmlFor=""
                                    className=" text-[#5E5400] font-bold text-[24px]">
                                    Nama
                                </label>
                                <input
                                    required
                                    id="nama_partai"
                                    name="nama_partai"
                                    value={formData.nama_partai}
                                    onChange={handleChange}
                                    type="text"
                                    className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                                />
                            </div>

                            <div
                                className="flex flex-col pb-10">
                                <label
                                    htmlFor=""
                                    className=" text-[#5E5400] font-bold text-[24px]">
                                    Ketau Umum
                                </label>
                                <input
                                    required
                                    id="ketua_umum_partai"
                                    name="ketua_umum_partai"
                                    value={formData.ketua_umum_partai}
                                    onChange={handleChange}
                                    type="text"
                                    className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                                />
                            </div>

                            <div
                                className="flex flex-col pb-10">
                                <label
                                    htmlFor=""
                                    className=" text-[#5E5400] font-bold text-[24px]">
                                    Visi Misi
                                </label>
                                <textarea
                                    required
                                    id="visi_misi"
                                    name="visi_misi"
                                    value={formData.visi_misi}
                                    onChange={handleChange}
                                    className="border-4 border-[#5E5400] rounded-xl  w-[300px]  md:w-[478px] h-[140px]">
                                </textarea>
                            </div>

                            <div
                                className="flex flex-col pb-10">
                                <label
                                    htmlFor=""
                                    className=" text-[#5E5400] font-bold text-[24px]">
                                    alamat
                                </label>
                                <textarea
                                    required
                                    id="alamat_partai"
                                    name="alamat_partai"
                                    value={formData.alamat_partai}
                                    onChange={handleChange}
                                    className="border-4 border-[#5E5400] rounded-xl  w-[300px]  md:w-[478px] h-[140px]">
                                </textarea>
                            </div>
                            <button>
                                <Btn text="SUMBIT" color="border-none font-bold bg-[#5E5A00] text-white" />
                            </button>

                        </form>


                    </div>
                </div>


            </main>
            <Footer />
        </div>
    );
}

export default Add_partai