
interface btn {
    text: string;
    color: string;
}
const Btn: React.FC<btn> = (props) => {
    return (
        <>
            <button>
                <h1 className={`${props.color}  border-4 text-[32px] md:w-[503px] w-[300px] font-bold rounded-xl flex justify-center items-center py-2`}>{props.text}</h1>
            </button>
        </>
    );
}

export default Btn;