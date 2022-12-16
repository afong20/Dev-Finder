import {BioHeader, BioTopic} from '../../components/drink-bio'
import path from 'path'
import {promises as fs} from 'fs'
function DrinkPage({bio}) {
    return (
        <div>
            <BioHeader name={bio.name} type={bio.type} image={bio.image}/>
            <BioTopic/>
        </div>
    );
}

export default DrinkPage;

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), './mock/drinks.json')
    const drinks = JSON.parse(await fs.readFile(filePath, 'utf8'))
    const paths = drinks.map(drink => ({params:{id:drink.id}}))
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const filePath = path.join(process.cwd(), './mock/drinks.json')
    const drinks = JSON.parse(await fs.readFile(filePath, 'utf8'))
    const bio = drinks.find(drink => drink.id === params.id)

    return {
        props: {bio}
    }
}