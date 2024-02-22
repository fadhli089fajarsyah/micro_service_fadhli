import logo_banner from '../assets/img_layout/logo_banner.png'
import logo_kotak_suara from '../assets/img_layout/logo_kotak_suara.png'

function Banner() {


    return (
        <div className="flex justify-between  color_bg_banner rounded-xl lg:h-[516px] my-10 lg:my-[74px]">
            <div className='flex flex-col justify-between w-[60%]'>
                <img src={logo_banner} alt="" className='opacity-35 w-[100px] md:w-[200px] lg:w-[342px] ' />
                <div className='text-white lg:w-[592px] ml-1 mb-1 md:ml-4 md:mb-4'>
                    <h1 className='lg:text-[64px] md:text-[37px] text-[16px] font-bold'>SELAMAT DATANG <span></span></h1>
                    <h4 className='lg:text-[24px] md:text-[15px] text-[8px]'>PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR  DIPILIH MELALUI SEBUAH ARTI NAMA</h4>
                </div>
            </div>
            <div className='flex justify-center   w-[40%]'>
                <img src={logo_kotak_suara} alt="" className='w-[80px] md:w-[150px] md:h-[300px] mb-4 lg:mb-0 lg:w-[286px] lg:h-[473px]' />
            </div>
        </div>
    )
}

export default Banner
