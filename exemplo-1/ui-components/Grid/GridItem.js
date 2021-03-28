import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';



class GridItem extends PureComponent {
  constructor(props) {
    super(props);
    this.sizePriority = ['xl', 'lg', 'md', 'sm', 'xs'];
    this.default = {
      columns: 3
    };
  }

  getColumn = () => {
    const { currentBreakpoint } = this.props;

    // verifica se existe colunas especificadas
    if (this.props[currentBreakpoint]) {
      return this.props[currentBreakpoint];
    }

    const currentBreakpointIndex = this.sizePriority.indexOf(currentBreakpoint);
    for (
      let i = currentBreakpointIndex + 1;
      i <= this.sizePriority.length;
      i++
    ) {
      if (this.props[this.sizePriority[i]]) {
        return this.props[this.sizePriority[i]];
      }
    }

    return this.default.columns;
  };

  getFlexBasis = columns => {
    const calculatedWidth = `${((100 / 12) * columns).toFixed(4)}%`;
    return {
      flexBasis: calculatedWidth,
      maxWidth: calculatedWidth
    };
  };

  render() {
    const { className, children } = this.props;

    const columns = this.getColumn();
    const itemStyle = this.getFlexBasis(columns);
    return (
      <div
        className={classnames('grid__content__col', className)}
        style={itemStyle}
      >
        {children}
      </div>
    );
  }
}

GridItem.propTypes = {
  className: Proptypes.string,
  currentBreakpoint: Proptypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

GridItem.defaultProps = {
  className: '',
  currentBreakpoint: 'sm'
};

export default GridItem;
