import Navbar from "../components/navbar"
import Judul from "../components/judul"
import Img from "../assets/img_layout/mantan.png"


function List_paslon() {
    return (
        <>
            <div>
                <Navbar />

                <main className="pt-[60px]  lg:pt-[65px] bg-white flex flex-col items-center justify-center w-full">

                    <div className="bg-white pb-28  w-full flex justify-center items-center flex-col">
                        <Judul text="LIST PARTAI" warna="flex py-14 pt-16 justify-center font-extrabold text-[#5E5400]" />
                        <div className="w-[100%] flex flex-col  items-center  ">
                            <div className="w-[80%] flex flex-col items-start justify-start">
                                <table className="border w-full border-[#828282]">
                                    <thead className="bg-[##E5E5E5] ">
                                        <tr className="bg-[#D9D9D9]">
                                            <th className="border border-[#828282] py-2 px-2 text-left">No. Urut</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Image</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Nama</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Visi & Misi</th>
                                            <th className="border border-[#828282] py-2 px-4 text-left">Alamat</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-[#828282] py-2 px-4">1</td>
                                            <td className="border border-[#828282] py-2 px-4">
                                                <img src={Img} alt="" className="w-[78px] rounded-2xl" />
                                            </td>
                                            <td className="border border-[#828282] py-2 px-4">Cinta Surya Paloh</td>
                                            <td className="border border-[#828282] py-2 px-4">
                                                <ul className="list-disc pl-4">
                                                    <li>Partai persatuan monyet</li>
                                                    <li>Partai sapi perah indonesia</li>
                                                    <li>Partai pisang masak</li>
                                                </ul>
                                            </td>
                                            <td className="border border-[#828282] py-2 px-4">
                                                Kerajaan Black Clover
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </main>

            </div>
        </>
    )
}

export default List_paslon;