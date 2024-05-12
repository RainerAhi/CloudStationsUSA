
export const SectionFooter = () => {

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

    return (
        <section className="footer" >
            <div className="footer-content" >
                <h1 className="small-headline white" >Follow Us On Social Media</h1>
                <div className="social-media-box" >
                    <i className="fa-brands fa-twitter" onClick={() => handleClick('https://www.instagram.com/cloudstationsusa/')} ></i>
                    <i className="fa-brands fa-linkedin" onClick={() => handleClick('https://www.instagram.com/cloudstationsusa/')} ></i>
                    <i className="fa-brands fa-instagram" onClick={() => handleClick('https://www.instagram.com/cloudstationsusa/')} ></i>
                    <i className="fa-brands fa-discord" onClick={() => handleClick('https://www.instagram.com/cloudstationsusa/')} ></i>
                </div>
            </div>
        </section>
    )
}