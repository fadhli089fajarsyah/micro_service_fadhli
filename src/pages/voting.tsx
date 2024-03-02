import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Card_voting from "../components/card_voting"
import Judul from "../components/judul"
import Btn from "../components/btn"
function Voting() {
    const cardsData = [1, 2, 3,]


    return (
        <>
            <div className=" bg-gray-200 flex flex-col items-center">
                <Navbar />
                <main className="pt-[60px] lg:pt-[65px] ">
                    <div className="lg:w-[1140px] bg-white pb-4 my-10">
                        <div className="flex justify-center items-center w-[100%]">
                            <Judul text="MASUKAN PILIHAN MU" warna="text-[#5E5400] " />
                        </div>
                        <div className="flex justify-center flex-wrap lg:w-[1140px]">
                            {cardsData.map((data, index) => (
                                <Card_voting key={index} />
                            ))}
                        </div>
                        <div className="flex justify-between px-14">
                            <Btn tipe="submit" text="RESET" color="border-[#5E5A00] font-bold text-[#5E5A00]" />
                            <Btn tipe="submit" text="SUMBIT" color="border-[#5E5A00] font-bold bg-[#5E5A00] text-white" />
                        </div>
                    </div>
                </main>

            </div>
            <Footer />
        </>
    );
}

export default Voting;