import React, { Component } from 'react';
export default class NewUsersForm extends Component {
    state = {
        name: '',
        surname:'',
        email:'',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                        <input
                            type="text"
                            name='name'
                            value={this.state.name}
                        />
                         <input
                            type="text"
                            name='surname'
                            value={this.state.surname}
                        />
                         <input
                            type="text"
                            name='email'
                            value={this.state.email}
                        />
                        <button
                            type="submit"
                            id="addBtn"
                        >
                            Add
                        </button>
                    </div>
            </form>
        );
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            });

        this.setState({
            name: '',
            surname:'',
            email:''
        });
    };
}

