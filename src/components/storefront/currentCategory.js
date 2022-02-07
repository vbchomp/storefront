import React from 'react';
import { connect } from 'react-redux';

const CurrentCategory = (props) => {

  return (
    <div>
      {props.currentCategory}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentCategory: state.itemsReducer.currentCategory,
  }
}

export default connect(mapStateToProps)(CurrentCategory);