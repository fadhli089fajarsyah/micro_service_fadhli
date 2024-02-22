import bg from '../assets/img_layout/bg.png'

function CardKecilHome() {

    return (
        <a href='' className=" mx-2 w-[90px] h-[100px] mb-2 mt-2  md:w-[170px] md:h-[200px] lg:w-[320px] lg:h-[422px] lg:my-10 lg:mx-2 bg-white" >
            <img src={bg} className='h-[48%] bg-cover bg-center ' alt="" />
            <div className='pl-2 lg:text-[17px] text-black flex flex-col justify-center h-[50%] text-[5px] md:text-[7px]'>
                <h5 className='text-white  lg:w-[190px] lg:py-3 lg:rounded-[10px] md:w-20  md:py-21  bg-[#FF0000] w-14  flex text-center justify-center items-center mb-[5px] pt-[2px] rounded'>SENIN, 03 JAN 2023</h5>
                <h3 className='text-[7px] font-extrabold md:text-[17px] lg:text-[24px]'>KPU TETAPKAN 3 MENTOR TERBAIK</h3>
                <h5>Super Admin</h5>
            </div>
        </a>
    )
}

export default CardKecilHome
