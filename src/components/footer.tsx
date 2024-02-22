import logo from '../assets/img_layout/logo.png'

function Footer() {

    return (
        <div className="bg-black ">
            <div className='text-white flex items-center p-10 md:p-14  lg:px-32 border-b-2'>
                <img src={logo} className="md:w-[110px] w-[40px] mr-4" />
                <div className='md:w-[350px] text-[10px]'>
                    <h1 className='font-bold md:text-[24px]'>DUMBWAYS.ID</h1>
                    <h4>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</h4>
                </div>
            </div>
            <div className='text-white font-semibold flex justify-center items-center h-[30px] text-[10px] lg:text-[24px] md:h-[90px]'>
                <p >Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
            </div>
        </div>
    )
}

export default Footer
