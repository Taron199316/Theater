import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import ModalTatron from "../components/ModalTheater";
import Select from 'react-select';
import {Link} from "react-router-dom";
import {theaterRequest} from '../store/actions/tatron'
import {filmsRequest} from '../store/actions/film'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            tatron: null,
            film: null,
            selected: null
        }
    }

    componentDidMount() {
        this.props.theaterRequest();
    }

    handleClick = (row, col) => {
        const {film} = this.state;
        this.setState({
            modal: true,
            selected: film.users.find((u) => u.row === row && u.col === col) || {row, col},
        });
    };

    spanClick = () => {
        this.setState({modal: false});
    };

    handleTheaterChange = (tatron) => {
        this.props.filmsRequest(tatron.id);
        this.setState({tatron, film: null});
    };

    handleFilmChange = (film) => {
        this.setState({film})
    };

    render() {
        const {selected, modal, tatron, film} = this.state;
        const {theaters, films} = this.props;

        return (
            <div className='theater'>
                <Link to='/theater' style={{color: 'black'}}>Add a Theater</Link>
                <Select
                    searchable
                    className="tatronSelect"
                    getOptionLabel={(o) => o.name}
                    getOptionValue={(o) => o.id}
                    value={tatron}
                    onChange={this.handleTheaterChange}
                    options={theaters}
                />
                {!_.isEmpty(tatron) ? (
                    <Select
                        searchable
                        className="filmSelect"
                        getOptionLabel={(o) => [o.time, ' ', o.name]}
                        getOptionValue={(o) => o.id}
                        value={film}
                        onChange={this.handleFilmChange}
                        options={films}
                    />
                ) : null}
                {!_.isEmpty(tatron) && film ? (
                    <div>
                        <table>
                            <tbody>
                            {_.range(1, tatron.rows + 1).map((row) => (
                                <tr key={row}>
                                    {_.range(1, tatron.cols + 1).map((col) => (
                                        <td
                                            key={col}
                                            className={film.users.find((u) => u.row === row && u.col === col) ? 'active' : ''}
                                            onClick={() => this.handleClick(row, col)}>
                                            {`${row} / ${col}`}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : null}
                {!_.isEmpty(film) ? (
                    <div>
                        {modal ? <div>
                            <ModalTatron film={film} data={selected}/>
                            <span onClick={this.spanClick}><i className="far fa-times-circle"
                                                              style={{color: 'red'}}></i></span>
                        </div> : null}
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    theaters: state.tatron.theater.theaters,
    films: state.film.films
});

const mapDispatchToProps = {
    theaterRequest,
    filmsRequest
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default Container;
