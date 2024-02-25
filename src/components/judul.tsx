
interface Judul {
    text: string;
    warna: string;
}

const Judul: React.FC<Judul> = (props) => {
    return (
        <>
            
                <div className={`lg:text-[48px] font-bold ${props.warna}`}>{props.text}</div>
        </>
    );
}
export default Judul;