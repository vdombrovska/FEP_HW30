import React, { Component } from 'react';

export default class UsersItem extends Component {
    render() {
        return (
            <div>
                {this.props.item.name}
                {this.props.item.surname}
                {this.props.item.email}

                <span className="delete-btn" onClick={this.onDeleteItemClick}>
                    delete
                </span>
            </div>
        );
    }

    onDeleteItemClick = (e) => {
        e.stopPropagation();

        this.props.onRemove(this.props.item.id);
    };
}

