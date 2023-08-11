const TitleSection = ({ title }: { title: string }) => {
    return ( 
        <div className="flex w-[304px] h-[74px] border-[6px] border-black justify-center items-center">
            <h1 className="uppercase font-bold text-[20px] tracking-[8px] leading-[8px]"> 
            {title}
            </h1>
        </div>
     );
}
 
export default TitleSection;