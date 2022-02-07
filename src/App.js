import React from 'react';
// import css and material ui;

import Header from './components/header/header.js';
import Categories from './components/storefront/categories.js';
import Items from './components/storefront/items.js';
import Footer from './components/footer/footer.js';
import CurrentCategory from './components/storefront/currentCategory.js';

function App() {

  return (
    <>
      <Header title={'Fat Ashe\'s Lemonade'} />
      {/* TODO: define categories and pull in here */}
      <CurrentCategory />
      <Categories title={'Fat Ashe\'s Lemonades and Teas'} />
        <div>
          {/* handleSubmit to handle the activation? */}
        </div>
      {/* TODO: define items title and pull in here */}
      <Items title={'insertsomethinghere'} />
      {/* Need to stop rendering Items component and render single item if clicked from category component
      if currentItem == '', render the Items component 
      if currentItem !== '', render a single item component */}
      <Footer />
    </>
  )
}

export default App;