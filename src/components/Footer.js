

const Footer = () => {
    return (
        <section className="container bd-grid">
            <div className="footer">
                <div className="footer_items">
                    <p>©2023, FindFlix.vercel.app</p>
                </div>
                <div className="footer_items">
                    <a href="https://www.github.com/juanib12/" className="footer_links" target="_blank">Developed by Juan Bianco.</a>
                </div>
                <div className="footer_items">
                    <a href="https://developers.themoviedb.org/" className="footer_links" target="_blank">Database by The Movie Database API.</a>
                </div>
            </div>
        </section>
    )
}

export default Footer