import React, { PureComponent } from 'react';
import '../../assets/css/footer.css';
import Tags from '../../assets/img/tags.png';
import react from './../../assets/img/react.png';
import css from './../../assets/img/css.png';
import angular from './../../assets/img/angular.png';
import node from './../../assets/img/node.png';
import gatsby from './../../assets/img/gatsby.png';
import javascript from './../../assets/img/javascript.jpg';

export default class bb8 extends PureComponent {

    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img
                            src={Tags}
                            alt="tags"
                            style={{ width: 300 }}
                        />
                    </div>
                    <div className="footer-content-right">
                        <h1><span className="wave">👋</span>Hi, All</h1>
                        <h2>This space was created for the purpose of knowledge sharing. If you want to contribute to open-source projects, take a look at the code-like-a-hero repository.
                            Open source projects can be useful for programmers. You can learn by reading the source code and build something on top of the existing projects. </h2>
                    </div>
                </div>
                <div className="footer-technologies">
                    <h1>// Tecnologies</h1>
                    <br/>
                    <table style={{ display: 'flex'}}>
                        <tr>
                            <th><img src={javascript} style={{ width: 120 }}/></th>
                            <th><img src={react} style={{ width: 120 }}/></th>
                            <th><img src={angular} style={{ width: 120 }}/></th>
                        </tr>
                        <tr>
                            <th><img src={css} style={{ width: 120 }}/></th>
                            <th><img src={gatsby} style={{ width: 120 }}/></th>
                            <th><img src={node} style={{ width: 120 }}/></th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
