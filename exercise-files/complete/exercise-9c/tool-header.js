import React from 'react';

export const ToolHeader = props => <header>
  <h1>{props.headerText}</h1>
</header>;

// export class ToolHeader extends React.Component { 

//   render() {
//     return <header>
//       <h1>{this.props.headerText}</h1>
//     </header>;    
//   }
// }