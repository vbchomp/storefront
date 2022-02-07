import React from 'react';
import { changeCategory } from '../../store/itemsReducer';
import { connect } from 'react-redux';

const Category = (props) => {

  return (
  <div>
    <h1 onClick={ () => props.changeCategory('Lemonades') }>Lemonades</h1>
    <h1 onClick={ () => props.changeCategory('Teas') }>Teas</h1>
    <h1 onClick={ () => props.changeCategory('Other Beverages') }>Other Beverages</h1>
    <h1 onClick={ () => props.changeCategory('Cookies') }>Cookies</h1>
    <h1 onClick={ () => props.changeCategory('Other Treats') }>Other Treats</h1>
    <h1 onClick={ () => props.changeCategory('Merchandise') }>Merchandise</h1>
  </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category) => {
      dispatch(changeCategory(category))
    }
  }
}

export default connect(null, mapDispatchToProps)(Category);