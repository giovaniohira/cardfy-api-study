import './Search.css'

const Search = (props) => {
    return (
        <form>
            <input className="searchbar"
                type="text" 
                value={props.url} 
                onChange={(e) => props.setUrl(e.target.value)} 
                placeholder="Enter Spotify URL" 
            />
            <button className="searchbtn" type="submit" onClick={props.onclick}>Get Track</button>
        </form>
    )
}

export default Search