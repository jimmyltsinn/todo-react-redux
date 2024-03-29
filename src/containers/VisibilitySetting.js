import { connect } from 'react-redux';

import { setVisibilityFilter } from '../redux/actions';
import Link from '../components/Link.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const VisibilitySetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default VisibilitySetting;
