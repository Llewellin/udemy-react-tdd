import * as React from 'react';
// import React, {Component} from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h2>loot check</h2>
                <hr />
                <Wallet />
                <hr />
                <Loot />
            </div>
        );
    }
}
