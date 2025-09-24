import './Landing-Details.scss';
import type { FC } from 'react';

const LandingDetails: FC = () => {
    return (
        <section className="landing-details">
            <div className="details-section first-section">
                <div className="content-left">
                    <svg 
                        viewBox="0 0 200 200" 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        className="background-blob"
                    >
                        <path 
                            fill="#7EBDC2" 
                            d="M35.9,-39.7C50.7,-30.3,69.8,-23,72.2,-12.3C74.6,-1.6,60.3,12.5,48.7,23.9C37.1,35.3,28.1,44,16.1,51.5C4.1,59,-11,65.3,-19.9,59.8C-28.7,54.3,-31.3,37,-38.7,23C-46,9,-57.9,-1.7,-57.3,-10.9C-56.6,-20.1,-43.3,-28,-31.7,-37.9C-20,-47.9,-10,-60,0.3,-60.3C10.5,-60.6,21.1,-49.1,35.9,-39.7Z" 
                            transform="translate(100 100)" 
                        />
                    </svg>
                    <h2>What is <em>FIRST</em> & <em>FRC?</em></h2>
                    <p>
                        <strong>FIRST</strong> is a global robotics community preparing students for the future and is the world's leading youth-serving nonprofit for STEM education.{' '}
                        <strong>FIRST Robotics Competition</strong> combines the excitement of sport with the rigors of science and technology. Students sometimes refer to it as "the hardest fun you'll ever have."
                    </p>
                </div>
                <div className="content-right">
                    <img 
                        className="team-photo" 
                        src="/LandingPage/2023-Comp-Group.jpg" 
                        alt="Team 2338 at 2023 Competition" 
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="details-section second-section">
                <div className="content-left">
                    <h2>Our Mission</h2>
                    <p>
                        At Team 2338: Gear It Forward, we strive to inspire and empower the next generation of STEM leaders 
                        through robotics education, mentorship, and community outreach. We're committed to fostering 
                        innovation, teamwork, and gracious professionalism in everything we do.
                    </p>
                </div>
                <div className="content-right">
                    <h2>Core Values</h2>
                    <ul className="values-list">
                        <li>Innovation & Excellence</li>
                        <li>Gracious Professionalism</li>
                        <li>Community Engagement</li>
                        <li>Continuous Learning</li>
                        <li>Inclusive Collaboration</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LandingDetails;