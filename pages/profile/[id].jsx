const testData = [
    {
        id:"1",
        name:"tea"
    },
    {
        id:"2",
        name:"coffee"
    }
]

function DrinkBio({pageData}) {
    return (
        <header>
            <h1>Drink Bio Page {pageData.name}</h1>
        </header>
    );
}

export default DrinkBio;

export async function getStaticPaths() {
    const paths = testData.map(items => ({params:{id:items.id}}))

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const pageData = testData.find(item => item.id === params.id)

    return {
        props:{
            pageData
        }
    }
}