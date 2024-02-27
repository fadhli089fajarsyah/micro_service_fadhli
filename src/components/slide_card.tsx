import Monkey from "../assets/img_layout/mantan.png"


const SlideCard = () => {

    return (
        <div className="w-[80%] flex text-[24px]  bg-white p-14">
            <div>
                <img src={Monkey} alt="" className="w-[246px] " />
            </div>
            <div className="ml-14">
                <h3 className="font-bold">Nomor Urut : 1</h3>
                <h1 className="font-bold text-[#5E0000] text-[40px]">CINTARA SURYA PALOH</h1>
                <h3>Visi & Misi :</h3>
                <ul className="list-disc pl-4">
                    <li>Memindahkan Indonesia ke Isekai.</li>
                    <li>Nonton anime 3x sehari.</li>
                    <li>Melakukan peresapan pada budaya jepang</li>
                </ul>
                <h3>Koalisi :</h3>
                <ul className="list-disc pl-4">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic</li>
                </ul>
            </div>
        </div>
    );
};

export default SlideCard;
