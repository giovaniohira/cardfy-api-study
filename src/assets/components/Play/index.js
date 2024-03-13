import './Play.css'

const Play = () => {
    return (
        <button className= 'play-button'>
            <svg className= 'play-icon' xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 40">
                <path
                    d="M28.42 13.32l-22-11A3 3 0 002.07 5v22a3 3 0 001.42 2.55 3 3 0 001.58.45 2.93 2.93 0 001.34-.32l22-11a3 3 0 000-5.36zm-.89 3.58l-22 11a1 1 0 01-1.46-.9V5a1 1 0 01.47-.85A1 1 0 015.07 4a1 1 0 01.45.11l22 11a1 1 0 010 1.8z"
                    data-name="Layer 2"
                ></path>
            </svg>
        </button>
    )
}

export default Play