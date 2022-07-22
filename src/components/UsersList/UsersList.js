
import React, { Component } from 'react';
import UsersItem from './UsersItem/UsersItem.js';

export default class UsersList extends Component {
    render() {
        return (
            <div className="task-list u-full-width">
                {this.props.list.map((user) => (
                    <UsersItem
                        key={user.id}
                        item={item}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </div>
        );
    }
}