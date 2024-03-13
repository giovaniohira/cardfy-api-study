import Artwork from '../Artwork';
import Infos from '../Infos';
import Play from '../Play';
import Timer from '../Timer';
import './Card.css'

const Card = (props) => {
    return (
     <div className='card'>
        <Infos songname = {props.songname} authorname = {props.authorname}/>
        <Artwork artwork = {props.artwork}/>
        <Timer totaltime={props.totaltime}/>
        <Play />
     </div>
    )
}

export default Card;