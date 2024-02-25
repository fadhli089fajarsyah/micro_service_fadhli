import Navbar from "../components/navbar"
import Card_dasboard from "../components/card_dasboard"
import Judul from "../components/judul"

const cardsData = ["bg-[#FFCD56] border-[#5E5400]", "bg-[#56FFF5] border-[#00585E] ", "bg-[#FF5656] border-[#5E0000]"];

function DASBOARD() {
    return (
        <>
            <div>
                <Navbar />

                <main className="pt-[60px]  lg:pt-[65px]   bg-white flex flex-col items-center justify-center w-full">
                    <Judul text="DASBOARD" warna="flex py-14 pt-16 justify-center font-extrabold text-[#5E5400]" />
                    <div>
                        <div className="flex justify-center flex-wrap w-[100%] pb-28">
                            {cardsData.map((data, index) => (
                                <Card_dasboard key={index} class={data} />
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#D9D9D9] pb-28  w-full flex justify-center items-center flex-col">
                        <Judul text="LIST VOTER" warna="flex py-14 pt-16 justify-center font-extrabold text-[#5E5400]" />
                        <div className="w-[100%] flex flex-col justify-center items-center  ">
                            <div className="w-[80%]">
                                <table className="border w-full border-[#828282]">
                                    <thead className="bg-[##E5E5E5] ">
                                        <tr>
                                            <th className="border border-[#828282] py-2 px-4 text-left">No</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Nama</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Alamat</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Jenis kelamin</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Paslon</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-[#828282] py-2 px-4">1</td>
                                            <td className="border border-[#828282] py-2 px-4">Sugeng No Pants</td>
                                            <td className="border border-[#828282] py-2 px-4">Cileungsi</td>
                                            <td className="border border-[#828282] py-2 px-4">Laki-laki</td>
                                            <td className="border border-[#828282] py-2 px-4">paloh</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="border border-[#828282] py-2 px-4">1</td>
                                            <td className="border border-[#828282] py-2 px-4">Sugeng No Pants</td>
                                            <td className="border border-[#828282] py-2 px-4">Cileungsi</td>
                                            <td className="border border-[#828282] py-2 px-4">Laki-laki</td>
                                            <td className="border border-[#828282] py-2 px-4">paloh</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="border border-[#828282] py-2 px-4">1</td>
                                            <td className="border border-[#828282] py-2 px-4">Sugeng No Pants</td>
                                            <td className="border border-[#828282] py-2 px-4">Cileungsi</td>
                                            <td className="border border-[#828282] py-2 px-4">Laki-laki</td>
                                            <td className="border border-[#828282] py-2 px-4">paloh</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="border border-[#828282] py-2 px-4">1</td>
                                            <td className="border border-[#828282] py-2 px-4">Sugeng No Pants</td>
                                            <td className="border border-[#828282] py-2 px-4">Cileungsi</td>
                                            <td className="border border-[#828282] py-2 px-4">Laki-laki</td>
                                            <td className="border border-[#828282] py-2 px-4">paloh</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 className="text-[24px] font-extrabold mt-5">TOTAL SUARA TERKUMPUL : 1000 Voters</h3>
                            </div>
                        </div>


                    </div>
                </main>

            </div>
        </>
    )
}

export default DASBOARD;