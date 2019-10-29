import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import GitHubButton from 'react-github-button';
import GitHubIcon from '../Icon/src/GitHubIcon';
import Logo from '../../assets/img/logo.jpg';
// eslint-disable-next-line import/no-unassigned-import
import 'react-github-button/assets/style.css'
import '../../assets/css/navigation-bar.css';

export default class NavigationBar extends PureComponent {
    static propTypes = {
        children: PropTypes.node
    };

    static defaultProps = {};

    render() {
        const { ...props } = this.props;
        return (
            <div className="NavigationBar" {...props}>
                <Link to="/" className="focus-ring-link">
                    <img
                        src={Logo}
                        height="40"
                    />
                </Link>

                <nav className="NavigationBar-nav">
                    <Link
                        to="/get-started/introduction"
                        className="NavigationBar-link"
                        activeClassName="is-active"
                    >
                        Get Started
                    </Link>
                    <Link
                        className="NavigationBar-link"
                        activeClassName="is-active"
                        to="/components"
                    >
                        Components
                    </Link>
                    <Link
                        className="NavigationBar-link NavigationBar-link--icon"
                        activeClassName="is-active"
                        to="/for-designers"
                    >
                        <span>For Designers</span>
                    </Link>
                </nav>
                <div className="NavigationBar-navRight">
                    <GitHubButton
                        type="stargazers"
                        size="default"
                        namespace="segmentio"
                        repo="evergreen"
                    />
                    <a
                        className="NavigationBar-link NavigationBar-link--icon"
                        href="https://spectrum.chat/evergreen"
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
        )
    }
}
