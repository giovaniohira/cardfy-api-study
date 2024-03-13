import './Artwork.css'

const Artwork = (props) => {
    return (
        <div className='teste'>
            <img className='art' src={props.artwork}></img>
        </div>
    )
}

export default Artwork