import * as React from 'react';
import {connect} from 'react-redux';
import {deposit, withdraw} from '../actions/balance';

export class Wallet extends React.Component {
    constructor() {
        super();

        this.state = {balance: undefined};
    }

    updateBalance = event => {
        this.setState({balance: parseInt(event.target.value, 10)});
    };

    deposit = () => {
        this.props.deposit(this.state.balance);
    };

    withdraw = () => {
        this.props.withdraw(this.state.balance);
    };

    render() {
        return (
            <div>
                <h3 className="balance">
                    Wallet balance: {this.props.balance}
                </h3>
                <br />
                <input className="input-wallet" onChange={this.updateBalance} />
                <input className="btn-deposit" onClick={this.deposit}>
                    Deposit
                </input>
                <input className="btn-withdraw" onClick={this.withdraw}>
                    Withdraw
                </input>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        balance: state.balance
    };
};

export default connect(
    mapStateToProps,
    {deposit, withdraw}
)(Wallet);
