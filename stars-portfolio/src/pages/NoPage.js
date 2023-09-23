import '../style.css';

const NoPage = () => {
    return(
        <div>
            <h1>no page 404</h1>

            <div>
                <a href="https://villejokinen.github.io/portfolio" target="_blank" rel="noopener noreferrer">
                <button className="mainsitebutton">Please go back to the main page by pressing me!</button>
            </a>
            </div>

        </div>
    )
}

export default NoPage;