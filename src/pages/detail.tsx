import Navbar from "../components/navbar"
import Footer from "../components/footer"
import bg from '../assets/img_layout/bg.png'


function Detail() {
    return (
        <>
            <div>
                <Navbar />

                <main className="pt-[60px] lg:pt-[65px] flex justify-center  bg-gray-200">
                    <div className="w-[90%] px-10 text-center lg:text-[24px]  bg-white">
                        <div className="flex h-16 items-center justify-between md:justify-start">
                            <a href="" className="lg:w-[42%] md:w-[38%] flex md:justify-start"> ⭠ Beranda</a>
                            <h5 className="lg:w-[50%] flex md:justify-start">BERITA HARI INI</h5>
                        </div>
                        <div className="">
                            <h1 className="text-[#5E5A00] md:text-[20px] lg:text-[40px] font-bold">KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK </h1>
                            <h5 className="lg:text-[26px]">Super Admin Senin,</h5>
                            <h5 className="lg:text-[26px]"> 03 Jan 2023</h5>
                            <img src={bg} alt="" className="w-[100%] " />
                            <p className=" text-justify font-semibold pb-7 md:pb-24">Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in varius est euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida arcu velit id libero. In hac habitasse platea dictumst.

                                Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis libero. In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.

                                Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. Phasellus efficitur sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.

                                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti.
                            </p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Detail;