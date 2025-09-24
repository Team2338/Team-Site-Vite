import './Footer.scss';
import type { FC } from 'react';
import {
    GitHub,
    Instagram,
    Facebook,
    Twitter,
    YouTube
} from '@mui/icons-material';

const socialLinks = [
    { href: 'https://www.instagram.com/first_2338/', label: 'Instagram', icon: <Instagram /> },
    { href: 'https://www.facebook.com/oswegofirst/', label: 'Facebook', icon: <Facebook /> },
    { href: 'https://twitter.com/FIRST2338', label: 'Twitter', icon: <Twitter /> },
    { href: 'https://www.youtube.com/channel/UCTXN-QdYnnoBwhnHWKR7O6w', label: 'YouTube', icon: <YouTube /> },
    { href: 'https://github.com/Team2338', label: 'GitHub', icon: <GitHub /> },
];

const Footer: FC = () => {
    return (
        <footer className="cT">
            <div className="fL">
                <p>© 2025-2026 Gear It Forward</p>
            </div>
            <div className="mR">
                <ul>
                    {socialLinks.map(({ href, label, icon }) => (
                        <li key={label}>
                            <a
                                className="sMLinks"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="fR">
                <a
                    className="sApp"
                    href="https://gearitforward.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Scouting App
                </a>
            </div>
        </footer>
    );
};

export default Footer;