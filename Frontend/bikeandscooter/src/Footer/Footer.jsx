import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="page-end">
                <img src="https://freedo.rentals/static/media/freedo-logo-white.82e934244c829b7eabdf.png" alt="Error" />
                <div className="footer-contents">
                    <div className="part1">
                        <h4>Company</h4>
                        <p>About us</p>
                        <p>Blogs</p>
                        <p>FAQ's</p>
                        <h4>Download Our App</h4>
                        <div className="apps">
                            <img src="https://freedo.rentals/static/media/ios-app-btn.c5c7aa49e0868b74e649.png" alt="Error" />
                            <img src="https://freedo.rentals/static/media/android-app-btn.249f30abd7f6a3b1b2a9.png" alt="Error" />
                        </div>
                    </div>
                    <div className="part2">
                        <h4>Freedo Support</h4>
                        <p>contact@freedo.rentals</p>
                        <p>+91 95998 19940</p>
                        <p>Chat With Us</p>
                    </div>
                    <div className="part3">
                        <h4>policies</h4>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="part4">
                        <h4>contact us</h4>
                        <p>Freedo Rentals, Plot No: 47, Udyog Vihar, Phase 4,Sector 18,</p>
                        <p>Gurugram - 122015, Haryana</p>

                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy;2026 Freedo Rentals</p>
            </div>
        </div>
    )
}

export default Footer
