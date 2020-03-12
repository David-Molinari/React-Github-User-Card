import React from 'react';
import '../App.css';

const UserCard = props => {
    return (
            <div className = "user-card-wrapper">
                <div className = "user-name">
                    <p>{props.login}</p>
                </div>
                <div className = "user-ID">
                    <p>{props.id}</p>
                </div>
            </div>
    )
}

export default UserCard;