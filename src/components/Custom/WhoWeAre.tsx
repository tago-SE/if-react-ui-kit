
export const WhoWeAreBlock = () => {

    return (
        <div className="if block" style={{paddingTop: "72px"}} data-anatomy="outline top">
            <section className="if split reverse">
            <div className="if container">
                <div className="if content">
                <h2 className="if heading larger">Who we are</h2>
                <p className="if text lead">Sharing is caring</p>
                <p className="if text body">
                    ShareIT is a variety of ways to connect with colleagues in If and outside. 
                    It's an umbrella of cross country and unit sharing in multiple ways. ShareIT@If is our external events where we showcase what we do to the world. 
                    This way we give back to the tech community and reach out beyond If.
                </p>
                </div>
                <div className="if image" style={{backgroundImage: "url(\"https://design.if.eu/images/hug.png\")", backgroundSize: "contain", backgroundPosition: "left center"}}></div>
            </div>
            </section>
        </div>
    );
}

export default WhoWeAreBlock;
