import SpainPhoto from '../images/Spain.jpg'
import FrancePhoto from '../images/France.jpg'
import ItalyPhoto from '../images/Italy.jpg'
import Tile from './Tile'

function Home() {
    return (
        <>
            <div className=' md:flex'>
                <Tile img={SpainPhoto} title='Spain' link='/spain' description="Spain's real estate market is a diverse and dynamic sector that offers a wide range of property options, from historic city apartments to coastal villas and commercial properties. " />
                <Tile img={FrancePhoto} title='France' description="The French real estate market is characterized by stability and resilience, offering a diverse range of properties to investors and homebuyers" />
                <Tile img={ItalyPhoto} title='Italy' description="Italy's real estate market displayed a mix of characteristics. In major cities like Rome, Milan, and Florence, property prices tended to be 
                relatively high due to strong demand, historic significance, and economic activity." />
            </div>
        </>
    )
}




export default Home 