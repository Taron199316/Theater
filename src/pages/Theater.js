import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {theaterputRequest} from '../store/actions/tatron'

class Theater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            rows:'',
            cols:''
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.theaterputRequest(this.state)
    };

    render() {
        const {name, rows, cols} = this.state;
        return (
            <div className='about'>
                <div className='about__1'>
                    <nav className="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/theater'>Theater</Link></li>
                            <li><Link to='/del'>Delete</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="about__2">
                    <h1>Theater New</h1>
                    <form method="post" onSubmit={this.handleSubmit} className="form__about">
                        <div className="group">
                            <label className="label">Name</label>
                            <input
                                value={name}
                                onChange={this.handleChange}
                                name="name" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label className="label">Rows</label>
                            <input
                                value={rows}
                                onChange={this.handleChange}
                                name="rows" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label className="label">Cols</label>
                            <input
                                value={cols}
                                onChange={this.handleChange}
                                name="cols" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    theaterputRequest,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Theater);

export default Container;
