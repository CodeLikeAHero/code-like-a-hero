import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../../components/NavigationBar';
import Screen from '../../assets/img/screen.png';
import Animation from './../../components/Animation/bb8';
import Footer from './../../components/Footer/Footer';
import './../../assets/css/content.css';

const mapStateToProps = state => {
    return {
        state
    }
};

const mapDispatchToProps = dispatch => ({
});

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <main>
                    <section className="Content">
                        <div className="Screen">
                            <div className="Animation">
                                <p className="line-1 anim-typewriter">Code Like A Hero</p>
                            </div>
                            <img
                                src={Screen}
                                alt="screen"
                                style={{ width: 640 }}
                            />
                        </div>
                        <Animation />
                    </section>
                    <Footer/>
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

