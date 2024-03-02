import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Judul from "../components/judul"
import CardInfo from "../components/card_info"
import SlideCard from "../components/slide_card"
import dataDumy from "../assets/data/data_data.json"
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'


function Info() {
    const series: number[] = [75, 25, 45];

    const options: ApexOptions = {
        chart: {
            width: 100,
            type: 'pie',
        },
        colors: ['#FF6384', '#36A2EB', '#FFCD56'],
        responsive: [{
            breakpoint: 480,
        }]
    }
    return (
        <>
            <div>
                <Navbar />

                <main className="pt-[60px] lg:pt-[65px] ">
                    <Judul text="INFO PEMILU TERUPDATE" warna="flex justify-center text-center items-center text-[#5E5400]" />
                    <div className="flex w-full justify-center items-center">
                        <div className="flex flex-col justify-center items-center text-center">
                            <h1 className="font-bold text-[40px] ">HASIL :</h1>
                            <ReactApexChart options={options} series={series} type="pie" width={470} />

                        </div>
                        <div>
                            {dataDumy.map((data, index) => (
                                <CardInfo key={index} id={data.id} persen={data.persen} latar={data.latarCustom} kotakNo={data.kotakCustom} textPaslon={data.textCustom} />
                            ))}
                            <h1 className="text-[32px] text-[#FF0000] font-extrabold pb-14">ANDA SUDAH MEMILIH !!!!</h1>
                        </div>
                    </div>
                    <div className="bg-gray-200    ">
                        <Judul text="INFO PASLON" warna="flex py-10 justify-center items-center text-[#5E5400]" />
                        <div className="flex justify-between px-24  items-center pb-32">
                            <button>⬅</button>
                            <SlideCard />
                            <button>⮕</button>
                        </div>
                    </div>
                    <div className="h-[360px] flex flex-col justify-center items-center px-[250px]">
                        <h1 className="text-[40px] text-center font-bold text-[#FF0000]">PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT</h1>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Info
