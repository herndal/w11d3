import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.target.currentValue
      });
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          <li key={i}>{error}</li>
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <header>{this.props.formType}</header>

        <Link to={`/${this.props.altLink}`}>{this.props.altLink}</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"></label>
          <input type="text"
            id="username"
            value={this.state.username}
            onChange={this.updateField}
          />
          <label htmlFor=""></label>
          <input type="password"
            id="password"
            value={this.state.password}
            onChange={this.updateField}
          />
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;