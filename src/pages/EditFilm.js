import React, {Component} from 'react';
import {connect} from "react-redux";
import {filmspostRequest, filmsRequest} from '../store/actions/film'
import {Link} from "react-router-dom";

class EditFilm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const {name, time} = this.state;
        const {filmId} = this.props.match.params;
        this.props.filmspostRequest({
            film_id: filmId,
            name,
            time
        });
    };

    render() {
        const {name, time} = this.state;
        return (
            <div className='about_edit'>
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
                    <h2>Edit Film</h2>
                    <form method="post" onSubmit={this.handleSubmit} className="form__about">
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
                            <input type="submit" className="button" value="Edit Up"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    films: state.film.films
});

const mapDispatchToProps = {
    filmsRequest,
    filmspostRequest
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditFilm);

export default Container;
