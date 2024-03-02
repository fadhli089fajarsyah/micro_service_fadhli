import Judul from "../components/judul"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn from "../components/btn"
import React, { useState } from "react";

interface LoginProps {
    data: (data: { username: string; password: string }) => void;
}


const Login: React.FC<LoginProps> = ({ data }) => {

    const [formData, setFormData] = useState({ username: "", password: "" });
    const [submittedData, setSubmittedData] = useState<any>(null)

    const handleValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setSubmittedData(formData);
        data(formData);
        setFormData({ username: "", password: "" });
        setFormData(formData)
    };



    return (
        <div className="">
            <Navbar />

            <main className="pt-[60px] lg:pt-[65px] flex justify-center  bg-gray-200">
                <form onSubmit={handleSubmit} className="md:w-[589px] flex flex-col bg-white items-center px-10 md:px-0 my-10 rounded-xl py-14">
                    <Judul warna="text-[#5E5400]" text="LOGIN" />
                    <div className="flex flex-col pb-10">
                        <label
                            htmlFor="username"
                            className=" text-[#5E5400] font-bold text-[24px]">
                            username
                        </label>

                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleValue}
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />

                    </div>
                    <div className="flex flex-col pb-10">

                        <label
                            htmlFor="password" className=" text-[#5E5400] font-bold text-[24px]">
                            password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleValue}
                            className="border-4 border-[#5E5400] rounded-xl  w-[300px] h-[50px] md:w-[478px] md:h-[70px]"
                        />

                    </div>
                    <button type="submit">
                        <Btn text="SUBMIT" color="border-none font-bold bg-[#5E5A00] text-white" />
                    </button>
                    <h1>Submitted Data: {JSON.stringify(submittedData)}</h1>
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