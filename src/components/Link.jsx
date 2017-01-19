import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Link = ({ active, children, onClick }) => {
  if (active) return <span>{children}</span>;
  return <a href="#"
     onClick={e => {
       e.preventDefault();
       onClick();
     }}
  >
    {children}
  </a>;
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;

// class ListSetting extends React.Component {
//   render() {
//     return <div>Show all</div>;
//   }
// }

// export default ListSetting;
