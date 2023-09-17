import SpainPhoto from '../images/Spain.jpg'
import FrancePhoto from '../images/France.jpg'
import Tile from './Tile'

function Home() {
    return (
        <>
            <div className='flex col lg:flex'>
                <Tile img={SpainPhoto} title='Spain' description="Italy's real estate market displayed a mix of characteristics. In major cities like Rome, Milan, and Florence, property prices tended to be 
                relatively high due to strong demand, historic significance, and economic activity. Coastal areas and popular tourist destinations also often commanded premium prices. In contrast, rural and less densely populated regions offered more affordable options." />
                <Tile img={FrancePhoto} title='France' description="The French real estate market is characterized by stability and resilience, offering a diverse range of properties to investors and homebuyers. In major cities like 
                Paris, Lyon, and Marseille, property prices tend to be higher, driven by strong
                demand, while rural areas and smaller towns often offer more affordable options" />
            </div>
        </>
    )
}




export default Home 