function BioHeader({name, type, image}) {
    if(type === "other")
    {
        type = "";
    }
    
    return (
        <header className="p-4 mt-20">
            <img src={image} alt="" className="w-80 h-80 mx-auto rounded-full mb-5"/>
            <h1 className="text-4xl text-slate-700 text-center">{name} {type}</h1>
        </header>
    );
}

export default BioHeader;