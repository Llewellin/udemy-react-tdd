import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Gift from './Gift';
import {maxNumber} from '../helper/index';

class App extends React.Component {
    constructor() {
        super();

        this.state = {gifts: []};
    }

    addGift = () => {
        const {gifts} = this.state;
        const ids = this.state.gifts.map(gift => gift.id);
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({id: max_id + 1});
        this.setState({gifts});
    };

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({gifts});
    };

    render() {
        return (
            <div>
                <h3>h3</h3>
                <h2>h2</h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift => {
                        return (
                            <Gift
                                key={gift.id}
                                gift={gift}
                                removeGift={this.removeGift}
                            />
                        );
                    })}
                </div>
                <ReactBootstrap.Button
                    onClick={this.addGift}
                    className="btn-add"
                >
                    Add Gift
                </ReactBootstrap.Button>
            </div>
        );
    }
}

export default App;
