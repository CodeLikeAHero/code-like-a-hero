import React from 'react';
import { Link } from 'gatsby';
import GitHubIcon from '../Icon/src/GitHubIcon';
import Logo from '../../assets/img/logo.jpg';
import 'react-github-button/assets/style.css'
import '../../assets/css/navigation-bar.css';

const NavigationBar = () => (
    <div className="NavigationBar">
        <Link to="/" className="focus-ring-link">
            <img
                src={Logo}
                height="40"
            />
        </Link>
        <nav className="NavigationBar-nav">
            <Link
                to="/News/"
                className="NavigationBar-link"
                activeClassName="is-active">
                News
            </Link>
        </nav>
        <div className="NavigationBar-navRight">
            <a
                className="NavigationBar-link NavigationBar-link--icon"
                href="https://github.com/CodeLikeAHero"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="icon-holder">
                    <GitHubIcon />
                </span>
                <span className="hide-on-mobile">GitHub</span>
            </a>
        </div>
    </div>
);

export default NavigationBar;