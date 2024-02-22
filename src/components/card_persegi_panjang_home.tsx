import bg from '../assets/img_layout/bg.png'

function CardPersegiPanjang() {

    return (
        <a href='' className=" w-[200px] h-[100px] mb-2 mt-2 md:w-[360px] md:h-[200px] lg:w-[650px] lg:h-[422px] bg-cover bg-center lg:my-10 lg:mx-2 " style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-full h-full color_bg_card'>
                <div className=' lg:pl-9 lg:pb-9 h-full w-full lg:text-[24px] text-white flex flex-col justify-end pl-2 pb-2 text-[5px] md:text-[11px]'>
                    <h5 className='lg:w-[250px] lg:rounded-xl  md:w-32  md:py-2 md:pt-2 bg-[#FF0000] w-14  flex text-center justify-center items-center mb-[5px] pt-[2px] rounded'>SENIN, 03 JAN 2023</h5>
                    <h3 className='text-[7px] font-bold md:text-[17px] lg:text-[32px]'>KPU TETAPKAN 3 MENTOR TERBAIK</h3>
                    <h5>Super Admin</h5>

                </div>
            </div>
        </a>
    )
}

export default CardPersegiPanjang
