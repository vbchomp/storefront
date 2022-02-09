import React from 'react';
// import css and material ui;

import Header from './components/header/header.js';
import Categories from './components/storefront/categories.js';
import Items from './components/storefront/items.js';
import Item from './components/storefront/item.js';
import Footer from './components/footer/footer.js';
import CurrentCategory from './components/storefront/currentCategory.js';
import { connect } from 'react-redux';

function App(props) {
  console.log('current item', props.currentItem);
  return (
    <>
      <Header title={"Fat Ashe's Lemonade"} />
      {/* TODO: define categories and pull in here */}
      <CurrentCategory />
      <Categories title={"Fat Ashe's Lemonades and Teas"} />
      <div>{/* handleSubmit to handle the activation? */}</div>
      {props.currentItem === '' ? (
        <Items title={'insertsomethinghere'} />
      ) : null}
      {props.currentItem !== '' ? <Item itemName={props.currentItem} /> : null}
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.itemsReducer.currentItem,
  };
};

export default connect(mapStateToProps)(App);
