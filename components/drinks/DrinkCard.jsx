import Image from "next/image";
function DrinkCard({drinkName, image, description, price}) {
    return (
        <aside>
            <div className="w-60 p-4 border rounded-md">
                <img src={image} alt="" className="w-40 h-40 mx-auto rounded-full mb-5"/>
                <h2 className="text-2xl text-slate-700 text-center font-bold mb-2">{drinkName}</h2>
                <p className="text-center text-slate-500 mb-4">{description}</p>
                <p className="text-center text-slate-900 bg-slate-300 rounded-full">{price}</p>
            </div>
        </aside>
    );
}
export default DrinkCard;