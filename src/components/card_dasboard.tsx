import Monkey from "../assets/img_layout/monkey.png"

interface classT {
    class: string
}

const Card_dasboard: React.FC<classT> = (props) => {
    return (
        <div className="lg:w-[30%] flex flex-col items-center">
            <h1 className={`  lg:p-5 lg:px-9 text-[32px] rounded-full font-bold border-[10px] text-white ${props.class} `} >1</h1>
            <button className={`py-10 px-7 ${props.class} rounded-2xl m-4 shadow sh`}>

                <div className="text-start">
                    <div className="">
                        <img src={Monkey} alt="" className=" h-[78%] bg-cover bg-center" />

                    </div>

                    <h1 className="text-[#5E5A00] font-extrabold sh_text lg:text-[30px] mt-2">SURYA SURYA</h1>
                    <h4 className="font-semibold text-[#5E5A00] sh_text ">Akumulasi :45%</h4>
                    <h4 className="font-semibold text-[#5E5A00] sh_text ">Jumlah Vote : 117 Voters</h4>


                </div>
            </button>
        </div>
    );
}

export default Card_dasboard;