

interface cl{
    id: string | number;
    latar: string;
    kotakNo: string;
    textPaslon: string;
}

const CardInfo: React.FC<cl>= (props) => {

    return (
        <div className={`flex w-[657px]   ${props.latar} p-5 rounded-xl sd-xl mb-10`}>
            <div className={`border-[3px]  border-white  ${props.kotakNo} text-white flex flex-col justify-center items-center p-2 py-3 rounded-xl`}>
                <p>No.</p>
                <p>Paslon</p>
                <h3 className="text-[32px] font-bold">{props.id}</h3>
            </div>
            <div className="ml-5 font-bold flex flex-col justify-center">
                <h1 className={`text-[40px] sh_text_info ${props.textPaslon}`}>CINTARA SURYA PALOH</h1>
                <h1 className={`text-[36px] sh_text_info  ${props.textPaslon}`}>78%</h1>
            </div>
        </div>
    )
}

export default CardInfo
