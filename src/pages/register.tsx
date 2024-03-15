import Judul from "../components/judul"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn from "../components/btn"
import { useState, } from "react"

interface FormData {
    nama_user: string
    alamat_user: string
    jenis_kelamin_user: string
    username_user: string
    password_user: string
    image_user: string
}
const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nama_user: "",
        alamat_user: "",
        jenis_kelamin_user: "",
        username_user: "",
        password_user: "",
        image_user: "image.png"
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/api/useradd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (response) {
                console.log("User berasil")
                window.location.reload()
                alert("selamat anda telah registrasi silakan login")
            } else {
                alert("gagal")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <div className="">
            <Navbar />

            <main className="pt-[60px] lg:pt-[65px] flex justify-center  bg-gray-200">

                <form
                    className="md:w-[589px] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14"
                    onSubmit={handleSubmit}
                >
                    <Judul warna="text-[#5E5400]" text="REGRISTER" />
                    <div
                        className="flex flex-col pb-10">
                        <label htmlFor="nama_user"
                            className=" text-[#5E5400] font-bold text-[24px]">
                            Fullname
                        </label>
                        <input
                            required
                            id="nama_user"
                            name="nama_user"
                            value={formData.nama_user}
                            onChange={handleChange}
                            type="text"
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />
                    </div>
                    <div
                        className="flex flex-col pb-10">
                        <label
                            htmlFor="" className=" text-[#5E5400] font-bold text-[24px]">
                            Alamat
                        </label>
                        <input
                            required
                            id="alamat_user"
                            name="alamat_user"
                            value={formData.alamat_user}
                            onChange={handleChange}
                            type="text"
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />
                    </div>
                    <div className="flex flex-col pb-10">
                        <label
                            htmlFor=""
                            className=" text-[#5E5400] font-bold text-[24px]">
                            Jenis Kelamin
                        </label>
                        <input
                            required
                            id="jenis_kelamin_user"
                            name="jenis_kelamin_user"
                            value={formData.jenis_kelamin_user}
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
                            Username
                        </label>
                        <input
                            required
                            id="username_user"
                            name="username_user"
                            value={formData.username_user}
                            onChange={handleChange}
                            type="text"
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />
                    </div>
                    <div
                        className="flex flex-col pb-10">
                        <label
                            htmlFor=""
                            className=" text-[#5E5400] font-bold text-[24px]">Password
                        </label>
                        <input
                            required
                            id="password_user"
                            name="password_user"
                            value={formData.password_user}
                            onChange={handleChange}
                            type="text"
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />
                    </div>
                    <button type="submit">
                        <Btn text="SUMBIT" color="border-none font-bold bg-[#5E5A00] text-white" />
                    </button>
                    <div className="flex py-[20px]">
                        <p className="text-[#595959]">Belum memiliki akun ?</p>
                        <a href="/login" className="text-[#0092A6] underline underline-offset-4 "> login</a>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default Register