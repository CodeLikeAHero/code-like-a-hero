import React from 'react';

const Header = () => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h2 style={{ margin: 0 }}>
                <a
                    href="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {'Home'}
                </a>

            </h2>
            <a href="https://github.com/saigowthamr/gatsby-advanced-starter"
               style={{ color: "white", float: "right" }} title="github" >Github</a>
        </div>
    </div>
);

export default Header
