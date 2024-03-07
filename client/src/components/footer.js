import "./footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-2 items-center">
                        <img src="/icons/logo.svg" alt="logo" />
                        <h1 className=" text-xl font-bold">Ration</h1>
                    </div>
                    <h3 className="font-bold text-lg">+34953495098</h3>
                    <p>support@ration.agency</p>
                </div>
                <div className="footer-center">
                    Quick links
                    <ul>
                        <li>Home</li>
                        <li>Plans</li>
                        <li>Recipes</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Subscribe to our newsletter</h3>
                    <input type="text" placeholder="Enter your email" />
                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                
            </div>

            <hr />

            <div className="footer-bottom">
                <div className="footer-social">
                    <div className="social-icon">
                        <img src="/icons/instagram.svg" alt="instagram" />
                    </div>
                    <div className="social-icon">
                        <img src="/icons/linkedin.svg" alt="instagram" />
                    </div>
                    <div className="social-icon">
                        <img src="/icons/twitter.svg" alt="instagram" />
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                        <img src="/icons/logo.svg" alt="logo" />
                        <h1 className=" text-xl font-bold">Ration</h1>
                    </div>
                <p>© 2021 Ration. All rights reserved.</p>
            </div>
        </footer>
    )
}