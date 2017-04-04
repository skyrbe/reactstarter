import React, { Component } from 'react';
import classnames from 'classnames';

export default class TextFieldGroup extends Component {
    render() {
        const {field, value, label, error, type, onChange, autocomplete} = this.props;
        return (
          <div className={classnames("input-group pos-r full-width mb20", { 'has-error':error })}>
            <input
              type={type}
              name={field}
              className={classnames("form-control", { 'input-has-value' : value })}
              onChange={onChange}
              value={value}
              autoComplete={autocomplete}
            />
            <label className="material-label">{label}</label>
            {error && <span className="help-block">{error}</span>}
          </div>
        );
    }
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  autocomplete: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type:'text',
  autocomplete:'on'
}
