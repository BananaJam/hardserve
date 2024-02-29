import "./home.css"
import Rating from "../components/rating"
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const iconElements = [
    {icon: "/icons/list.png", text: "Monitor and record data on 84 nutrients and various other compounds."},
    {icon: "/icons/wheat.png", text: "Record meals, physical activities, and health metrics."},
    {icon: "/icons/graph.png", text: "Obtain insightful health reports and charts."},
    {icon: "/icons/wrench.png", text: "Define weight, macro, and nutrient targets to reach your goals."},
    {icon: "/icons/time.png", text: "Track your intermittent fasts and observe their impact over time."},
    {icon: "/icons/hands.png", text: "Regardless of whether you follow a Keto, Vegan, or doctor-recommended diet."},
]

const videoPoints = [
    {caption: "Personalization of the food plan", text: "You can customize your diet however you want."},
    {caption: "Large database of recipes", text: "Our recipe database has 1000+ different recipes."},
    {caption: "Ability to compare prices", text: "We work closely with many food companies who provide us with this information."},
    {caption: "Over 8 million users", text: "Become part of our community to receive tips and inspiration from fellow users in our forums and Facebook group."},
]

export default function Home() {

    return (
        <>
            <Navbar />
            <div className="main">
                <section className="hero">
                    <div className="hero-div">
                        <h1 className="caption">Keep the balance.<br />
                            Eat well.
                        </h1>

                        <p>Generate your diet, cook,<br />
                            and follow the progress.
                        </p>

                        <button className="hero-button">Create diet - it's Free!</button>
                    </div>
                </section>

                <section className="icons section">
                    <h1 className="caption">Build healthy habits</h1>
                    <div className="icons-container">
                        {iconElements.map((element, index) => {
                            return (
                                <div key={index} className="icons-element h-72 w-72">
                                    <img className="icon" src={element.icon} alt="icon" />
                                    <p>{element.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="section">
                    <h1 className="caption">Strive for perfection.</h1>
                    <div className="video-container">
                        <div className="video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AYXfaVD5o40?si=AoRcV4vHHvoPRWCq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="video-text">
                            {videoPoints.map((point, index) => {
                                return (
                                    <div key={index} className="video-text-point">
                                        <img className="check" src="/icons/check.png" alt="check" />
                                        <div>
                                            <h2>{point.caption}</h2>
                                            <p>{point.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="green-section section">
                    <span>In order to controll the consumption of vitamins and minerals, use our food diary.</span>
                    <button className="text-black hero-button">Sign Up - it's Free!</button>
                </section>

                <section className="section" id="comment-section">
                    <h1 className="mb-10 caption">Reviews</h1>
                    <div className="comment-left">
                        <div className="comment">
                            <div className="comment-header">
                                <img src="/icons/avatar.png" alt="person" className="icon" />
                                <h2>John Doe</h2>
                            </div>
                            <Rating rating={4} />
                            <p>It's a great app. I've lost 10 pounds in 2 months.</p>
                        </div>
                    </div>
                    <div className="comment-right">
                        <div className="comment">
                            <div className="comment-header">
                                <img src="/icons/avatar.png" alt="person" className="icon" />
                                <h2>Dominik Taburetto</h2>
                            </div>
                            <Rating rating={3} />
                            <p>It's a great app. I've lost 10 pounds in 2 months.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}