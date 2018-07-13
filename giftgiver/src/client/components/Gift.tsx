import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class Gift extends React.Component {
    constructor() {
        super();

        this.state = {person: '', present: ''};
    }

    render() {
        return (
            <div>
                <ReactBootstrap.Form>
                    <ReactBootstrap.FormGroup>
                        <ReactBootstrap.ControlLabel>
                            Person
                        </ReactBootstrap.ControlLabel>
                        <ReactBootstrap.FormControl
                            className="input-person"
                            onChange={event =>
                                this.setState({person: event.target.value})
                            }
                        />
                    </ReactBootstrap.FormGroup>
                    <ReactBootstrap.FormGroup>
                        <ReactBootstrap.ControlLabel>
                            Present
                        </ReactBootstrap.ControlLabel>
                        <ReactBootstrap.FormControl
                            className="input-present"
                            onChange={event =>
                                this.setState({present: event.target.value})
                            }
                        />
                    </ReactBootstrap.FormGroup>
                </ReactBootstrap.Form>
                <ReactBootstrap.Button
                    className="btn-remove"
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                />
            </div>
        );
    }
}

export default Gift;
