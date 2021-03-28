import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';
import GridItem from './GridItem';

import styles from './Grid.module.scss';



class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.default = {
      initialBreakpoint: 'sm',
      breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1440
      }
    };
    this.state = {
      currentBreakpoint: this.default.initialBreakpoint
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  getBreakpoint = screenWidth => {
    const { currentBreakpoint } = this.state;
    if (screenWidth <= this.default.breakpoints.xs) {
      return 'xs';
    }

    if (screenWidth <= this.default.breakpoints.sm) {
      return 'sm';
    }

    if (screenWidth <= this.default.breakpoints.md) {
      return 'md';
    }

    if (screenWidth <= this.default.breakpoints.lg) {
      return 'lg';
    }

    if (screenWidth > this.default.breakpoints.lg) {
      return 'xl';
    }

    return currentBreakpoint;
  };

  handleResize = () => {
    const { currentBreakpoint } = this.state;
    const screenWidth =
      typeof document !== 'undefined'
        ? document.body.getBoundingClientRect().width
        : this.default.breakpoints[this.default.initialBreakpoint];
    const newBreakpoint = this.getBreakpoint(screenWidth);

    if (currentBreakpoint !== newBreakpoint) {
      this.setState({
        currentBreakpoint: newBreakpoint
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { children, className } = this.props;
    const { currentBreakpoint } = this.state;
    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { currentBreakpoint });
    });
    return (
      <div className={classnames('grid', className)}>
        <div className="grid__content">{childrenWithProps}</div>
      </div>
    );
  }
}

Grid.propTypes = {
  title: Proptypes.string,
  list: Proptypes.array,
  className: Proptypes.string,
  cols: Proptypes.number
};

Grid.defaultProps = {
  className: '',
  cols: 3
};

Grid.Item = GridItem;

export default Grid;
