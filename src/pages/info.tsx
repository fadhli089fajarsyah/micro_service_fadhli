import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Judul from "../components/judul"
import CardInfo from "../components/card_info"
import SlideCard from "../components/slide_card"
import dataDumy from "../assets/data/data_data.json"


function Info() {



    return (
        <>
            <div>
                <Navbar />

                <main className="pt-[60px] lg:pt-[65px] ">
                    <Judul text="INFO PEMILU TERUPDATE" warna="flex justify-center items-center text-[#5E5400]" />
                    <div className="flex w-full justify-center items-center">
                        <div>
                            <h1 className="font-bold text-[40px] ">HASIL :</h1>
                        </div>
                        <div>
                            {dataDumy.map((data) => (
                                <CardInfo key={data.id} id={data.id} latar={data.latarCustom} kotakNo={data.kotakCustom} textPaslon={data.textCustom} />

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



// import React, { useState } from 'react';

// const Slide = () => {
//     // Data slide dalam bentuk array objek
//     const slidesData = [
//         {

//             content: 'Content of Slide 1',
//         },
//         {

//             content: 'Content of Slide 2',
//         },
//         {

//             content: 'Content of Slide 3',
//         },

//     ];

//     // State untuk menyimpan indeks slide yang sedang aktif
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Fungsi untuk menampilkan slide berikutnya
//     const nextSlide = () => {
//         setActiveIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
//     };

//     // Fungsi untuk menampilkan slide sebelumnya
//     const prevSlide = () => {
//         setActiveIndex((prevIndex) => (prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1));
//     };

//     return (
//         <div className="slide-container">
//             <button onClick={prevSlide}>Previous</button>
//             <div className="slide">
//                 <p>{slidesData[activeIndex].content}</p>
//             </div>
//             <button onClick={nextSlide}>Next</button>
//         </div>
//     );
// };

// export default Slide;
