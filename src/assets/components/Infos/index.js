import './Infos.css'

const Infos = (props) => {
    return (
        <div className='infos'>
            <p className='song-title'>{props.songname}</p>
            <p className='song-author'>{props.authorname}</p>
        </div>
    )
}

export default Infos