import React, {Component} from 'react';
import {connect} from "react-redux";
import {usersRequest, usersremoveRequest} from '../store/actions/user'

class ModalTheater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.data.email,
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const {data: {row, col}, film} = this.props;
        const {email} = this.state;
        const film_id = film.id;
        this.props.usersRequest({email, row, col, film_id})
    };

    deleteUser = () => {
        const {data: {id}} = this.props;
        this.props.usersremoveRequest(id)
    };

    render() {
        const {data: {row, col}} = this.props;
        const {email} = this.state;

        return (
            <div className="modal">
                <form method="post" onSubmit={this.handleSubmit} className='modal__form'>
                    <div className="modal__div">
                        <label className="modal__label">Email</label>
                        <input className='modal__input'
                               name="email"
                               onChange={this.handleChange}
                               type="text" value={email} placeholder="Email"/>
                    </div>
                    <div className="modal__div">
                        <label className="modal__label">Row</label>
                        <input className='modal__input' type="text" readOnly value={row}/>
                    </div>
                    <div className="modal__div">
                        <label className="modal__label">Col</label>
                        <input className='modal__input' type="text" readOnly value={col}/>
                    </div>
                    <br/>
                    <button className='modal__button'>Save</button>
                    <button className='modal__button' type="button" onClick={this.deleteUser}>Delete
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    films: state.film.films

});

const mapDispatchToProps = {
    usersRequest,
    usersremoveRequest,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalTheater);

export default Container;