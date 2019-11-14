import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {filmsgetRequest, filmsremoveRequest} from "../store/actions/film";

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.filmsgetRequest();
    }

    removeFilm = (id) => {
        this.props.filmsremoveRequest(id);
    };

    render() {
        const {films} = this.props;

        return (
            <div className='about'>
                <div className='about__1'>
                    <nav className="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/theater'>Theater</Link></li>
                            <li><Link to='#'>Delete</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="about__2">
                    <h1>Film</h1>
                    <Link to='/film' className='link_film'>New</Link>
                    <div className="film__map">
                        {films.map((f) => (
                            <div key={f.id} className="film_map_p">
                                <p>{f.name}</p>
                                <div className='div__i'>
                                    <Link to={`edit/${f.id}`}>
                                        <i className="fas fa-tasks" style={{color: 'blue'}}></i>
                                    </Link>
                                    <i className="fas fa-trash-alt" style={{color: 'red'}}
                                       onClick={() => this.removeFilm(f.id)}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    films: state.film.films
});

const mapDispatchToProps = {
    filmsgetRequest,
    filmsremoveRequest
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Film);

export default Container;
