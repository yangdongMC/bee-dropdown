import React from 'react';
import classNames from 'classnames';

// import elementType from './prop-types/elementType';

const propTypes = {
    href: React.PropTypes.string,
    breakLine: React.PropTypes.bool,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    eventKey: React.PropTypes.any
};

const defaultProps = {
    componentClass: 'a',
    active: false,
    disabled: false,
    breakLine: false
};

const clsPrefix = 'u-menu-item';

class DropdownMenuItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        let { onSelect } = this.props;
        if(this.props.disabled){
            event.preventDefault();
            return;
        }
        onSelect && onSelect(this.props.eventKey, this.props, event);
    }
    render() {

        let {
            children,
            breakLine,
            onSelect,
            onKeyDown,
            componentClass: Component,
            ...props
        } = this.props;

        let classes = classNames({
            active : this.props.active ,
            disabled : this.props.disabled
        }, `${clsPrefix}`);
        if(breakLine){
            return <li role="breakLine" className="u-menu-item-break"></li>;
        }

        return (
            <li role="presentation" className = { classes } >
                <Component
                    {...props}
                    role="menu-item"
                    tabIndex="-1"
                    onClick={ this.handleClick }
                  >
                  {children}
                </Component>
            </li>
        );
    }

};

DropdownMenuItem.propTypes = propTypes;

DropdownMenuItem.defaultProps = defaultProps;

export default DropdownMenuItem;