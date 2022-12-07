import path from 'path'
import {promises as fs} from 'fs'
import {ContentPageHeader} from './../components/headers'
import { DrinkCard } from '../components/drinks';
function OthersPage({drinks}) {
    return (
        <>
            <ContentPageHeader type="Other Drinks" title="Random Drinks" tagline="That didn't make the cut for genres."/>
            <main className="flex mt-10 flex-wrap justify-center max-w-5xl gap-5 mx-auto">
                    {drinks.map(drink => <DrinkCard key={drink.id} drinkName={drink.name} image={drink.image} description={drink.description} price={drink.price}/>)}
            </main>
        </>
    );
}

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
    return (
        <ContentPageHeader type="Other Drinks" title="Random Drinks" tagline="That didn't make the cut for genres.">
        {page}
        </ContentPageHeader>
    );
}

export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/drinks.json')
    const drinks = JSON.parse(await fs.readFile(filePath, 'utf8'))
    
    const other = drinks.filter(drink => drink.type == 'other')
    return{
        props:{
            drinks:other
        }
    }
}