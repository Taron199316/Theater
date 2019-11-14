import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Select from "react-select";
import {filmsputRequest} from "../store/actions/film";
import {theaterRequest} from "../store/actions/tatron";

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
            theatre_id: ''
        }
    }

    componentDidMount() {
        this.props.theaterRequest();
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.filmsputRequest(this.state)
    };

    handleTheaterChange = (theater) => {
        this.setState({theatre_id: theater.id});
    };

    render() {
        const {name, time, theater} = this.state;
        const {theaters} = this.props;

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
                    <h1>Add Movies</h1>
                    <form method="put" onSubmit={this.handleSubmit} className="form__about">
                        <div className="group">
                            <label className="label">Name</label>
                            <input
                                value={name}
                                onChange={this.handleChange}
                                name="name" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label className="label">Time</label>
                            <input
                                value={time}
                                onChange={this.handleChange}
                                name="time" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label className="label">theatre_id</label>
                            <Select
                                searchable
                                className="theaterSelect"
                                getOptionLabel={(o) => o.name}
                                getOptionValue={(o) => o.id}
                                value={theater}
                                onChange={this.handleTheaterChange}
                                options={theaters}
                            />
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

const mapStateToProps = (state) => ({
    theaters: state.tatron.theater.theaters,
});

const mapDispatchToProps = {
    filmsputRequest,
    theaterRequest
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Film);

export default Container;
