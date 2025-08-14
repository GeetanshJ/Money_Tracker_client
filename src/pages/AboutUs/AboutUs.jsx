import React,{useEffect} from "react";
import "./AboutUs.css";
import Navbar from "../../components/Navbar";
import img1 from "./profile.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Auth/AuthContext";
import { checkAuth } from "../../components/Auth/AuthContext";
const AboutUs = () => {
    useEffect(() => {
      checkAuth();
      return () => {
        
      }
    }, [])
    
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) navigate("/login");

    return (

        <div> <Navbar />
            <div className="about-container">
                <section className="hero-section">
                    <h1>About Us</h1>
                    <p>
                        Welcome to Money Tracker — your trusted companion in managing your
                        personal and business finances with ease. We believe money management
                        should be simple, smart, and stress-free. Our platform empowers
                        individuals and businesses to track, save, and grow their wealth.
                    </p>
                </section>

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <i>
                        Our mission is to make financial literacy accessible to everyone. We
                        combine clean design, powerful tools, and user-friendly interfaces to
                        help you take control of your finances — anytime, anywhere.
                    </i>
                </section>

                <section className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-card">
                        <img
                            src={img1}
                            alt="Geetansh Jain"
                        />
                        <h3>Geetansh Jain</h3>
                        <p>Founder & CEO</p>
                        <p>
                            Geetansh Jain is the visionary behind Money Tracker, driven by the
                            goal to make financial tracking easy and accessible for everyone.
                            With a deep passion for technology and design, he leads the company
                            toward innovation and excellence.
                        </p>
                    </div>
                </section>

                <section className="testimonial-section">
                    <h2>What Our Users Say</h2>
                    <div className="testimonial-scroll">
                        <div className="testimonial-card">
                            <p>
                                "Money Tracker has completely changed the way I handle my
                                expenses. It's intuitive and accurate!"
                            </p>
                            <span>- Aditi Sharma</span>
                        </div>
                        <div className="testimonial-card">
                            <p>
                                "I love the simplicity of the app and how I can track all my
                                spending habits in one place."
                            </p>
                            <span>- Rohit Verma</span>
                        </div>
                        <div className="testimonial-card">
                            <p>
                                "The best finance tool I've used so far. Highly recommended to
                                anyone who wants control over their money."
                            </p>
                            <span>- Sneha Kapoor</span>
                        </div>
                        <div className="testimonial-card">
                            <p>
                                "Money Tracker has completely changed the way I handle my
                                expenses. It's intuitive and accurate!"
                            </p>
                            <span>- Aditi Sharma</span>
                        </div>
                        <div className="testimonial-card">
                            <p>
                                "Money Tracker has completely changed the way I handle my
                                expenses. It's intuitive and accurate!"
                            </p>
                            <span>- Aditi Sharma</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}



export default AboutUs;