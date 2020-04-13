import React, {memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../actions';

const Link = ({ children, filter }) => {
  const dispatch = useDispatch();
  const active = useSelector(state => filter === state.visibilityFilter);

  const handleClick = () => {
    dispatch(setVisibilityFilter(filter));
  }
  return (
    <button
       onClick={handleClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  filter: PropTypes.string.isRequired
}

export default memo(Link);