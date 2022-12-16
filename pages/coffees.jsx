import path from 'path'
import {promises as fs} from 'fs'
import {ContentPageHeader} from './../components/headers'
import { DrinkCard } from '../components/drinks';
function CoffeesPage({drinks}) {
    return (
        <>
            <ContentPageHeader type="Coffee Drinks" title="Bean Water" tagline="Made into many different types of drinks."/>
            <main className="flex mt-10 flex-wrap justify-center max-w-5xl gap-5 mx-auto">
                {drinks.map(drink => <DrinkCard key={drink.id} drinkName={drink.name} image={drink.image} description={drink.description} price={drink.price} id={drink.id}/>)}
            </main>
        </>
    );
}

export default CoffeesPage;

CoffeesPage.getLayout = function getLayout(page) {
    return (
        <ContentPageHeader type="Coffee Drinks" title="Bean Water" tagline="Made into many different types of drinks.">
        {page}
        </ContentPageHeader>
    );
}

export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/drinks.json')
    const drinks = JSON.parse(await fs.readFile(filePath, 'utf8'))
    
    const coffee = drinks.filter(drink => drink.type == 'coffee')
    return{
        props:{
            drinks:coffee
        }
    }
}