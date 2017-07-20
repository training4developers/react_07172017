import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = props => <header>
  <h1>{props.headerText}</h1>
</header>;

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};

ToolHeader.defaultProps = {
  headerText: 'Web Programmers Rocks!'
};

// export class ToolHeader extends React.Component { 

//   render() {
//     return <header>
//       <h1>{this.props.headerText}</h1>
//     </header>;    
//   }
// }