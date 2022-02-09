import React from 'react';
import Button from '@mui/material/Button';
import { changeItem } from '../../store/itemsReducer';
import { connect } from 'react-redux'

const Item = (props) => {
  let item;
  props.item.forEach(value => {
    if(props.itemName === value.name) {
      item = value;
    }
  })
  console.log('item', item);
  return (
    <div>
      {item.name}
      <Button onClick={ () => props.changeItem('') }>
        Continue Shopping
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.itemsReducer.item,
    size: state.itemsReducer.size,
    price: state.itemsReducer.price
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeItem: (item) => {
      dispatch(changeItem(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);