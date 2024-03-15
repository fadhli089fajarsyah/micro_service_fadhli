import Navbar from "../components/navbar"
import Banner from "../components/banner"
import CardPersegiPanjang from "../components/card_persegi_panjang_home"
import CardKecilHome from "../components/card_kecil_home"
import Footer from "../components/footer"

function Home() {

    const jmlhCard = [1, 2, 3, 4]

    return (
        <>
            <div>
                <Navbar />

                <main className="pt-[60px] lg:pt-[65px]">
                    <div className=" flex justify-center flex-col items-center bg-gray-200 ">
                        <div className="w-[80%] ">
                            <Banner />
                            <div className="flex flex-wrap  justify-center items-center pb-14 md:pb-20">
                                <CardPersegiPanjang />
                                {jmlhCard.map(( index) => (
                                    <CardKecilHome key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <h1 className="py-[50px] lg:py-[100px] text-center font-bold text-[14px] md:text-[24px] lg:text-[40px]">PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK <br /> YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI <br /> MISI UNTUK MELEGALKAN SLOT</h1>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Home
