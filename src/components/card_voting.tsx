import Monkey from "../assets/img_layout/monkey.png"
import { useState } from 'react' 

function Card_voting() {
    const [card, setCard] = useState(false)

    const handleCard = () => {
        
        setCard(!card)
    }

    return (
        <>
            {card ? (

                <button onClick={handleCard} className="lg:w-[30%] p-[1.5%] pt-9 flex flex-col items-center bg-[#ff3939] rounded-xl m-4  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                    <div className="text-start">
                        <div className="relative">
                            <img src={Monkey} alt="" className="" />
                            <h1 className="absolute lg:top-[-30px] lg:right-[-17px] lg:p-5 lg:px-9 text-[32px] rounded-full border-white border-4 text-white bg-[#a9a9a9]">1</h1>
                        </div>

                        <h1 className="text-[#5E5A00] font-bold sh_text lg:text-[24px] my-2">CINTARA SURYA PALOH</h1>
                        <p>Memindahkan Indonesia ke Isekai</p>
                        <h4 className="font-bold mt-2">Partai Pengusung :</h4>
                        <ul className="list-disc pl-4">
                            <li>Partai persatuan monyet</li>
                            <li>Partai sapi perah indonesia</li>
                            <li>Partai pisang masak</li>
                        </ul>

                    </div>
                </button>
            ) : (
                
                <button onClick={handleCard} className="lg:w-[30%] p-[1.5%] pt-9 flex flex-col items-center bg-[#e3e3e3] rounded-xl m-4  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                    <div className="text-start">
                        <div className="relative">
                            <img src={Monkey} alt="" className="" />
                            <h1 className="absolute lg:top-[-30px] lg:right-[-17px] lg:p-5 lg:px-9 text-[32px] rounded-full border-white border-4 text-white bg-[#a9a9a9]">1</h1>
                        </div>

                        <h1 className="text-[#5E5A00] font-bold sh_text lg:text-[24px] my-2">CINTARA SURYA PALOH</h1>
                        <p>Memindahkan Indonesia ke Isekai</p>
                        <h4 className="font-bold mt-2">Partai Pengusung :</h4>
                        <ul className="list-disc pl-4">
                            <li>Partai persatuan monyet</li>
                            <li>Partai sapi perah indonesia</li>
                            <li>Partai pisang masak</li>
                        </ul>

                    </div>
                </button>
                )}
        </>
    );
}

export default Card_voting;
