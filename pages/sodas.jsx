import path from 'path'
import {promises as fs} from 'fs'
import {ContentPageHeader} from './../components/headers'
import { DrinkCard } from '../components/drinks';
function SodasPage({drinks}) {
    return (
        <>
            <ContentPageHeader type="Soda Drinks" title="Sugar Water" tagline="Thats probably not good for you."/>
            <main className="flex mt-10 flex-wrap justify-center max-w-5xl gap-5 mx-auto">
                    {drinks.map(drink => <DrinkCard key={drink.id} drinkName={drink.name} image={drink.image} description={drink.description} price={drink.price} id={drink.id}/>)}
            </main>
        </>
    );
}

export default SodasPage;

SodasPage.getLayout = function getLayout(page) {
    return (
        <ContentPageHeader type="Soda Drinks" title="Sugar Water" tagline="Thats probably not good for you.">
        {page}
        </ContentPageHeader>
    );
}

export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/drinks.json')
    const drinks = JSON.parse(await fs.readFile(filePath, 'utf8'))
    
    const soda = drinks.filter(drink => drink.type == 'soda')
    return{
        props:{
            drinks:soda
        }
    }
}