import "./footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="flex flex-col items-center gap-5">
                    <div className="flex items-center gap-2">
                        <img src="/icons/logo.svg" alt="logo" />
                        <h1 className="text-xl font-bold ">Ration</h1>
                    </div>
                    <h3 className="text-lg font-bold">+34953495098</h3>
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
                    <input className="mt-2 text-black bg-white" type="text" placeholder="Enter your email" />
                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                
            </div>

            <hr className="my-4" />

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
                <div className="flex items-center gap-2">
                        <img src="/icons/logo.svg" alt="logo" />
                        <h1 className="text-xl font-bold ">Ration</h1>
                    </div>
                <p>© 2021 Ration. All rights reserved.</p>
            </div>
        </footer>
    )
}