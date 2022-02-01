import React from 'react';
// import css and material ui;

import Header from './components/header/header.js';
import Categories from './components/storefront/categories.js';
import Items from './components/items/details.js';
import Footer from './components/footer/footer.js';

function App() {

  return (
    <>
      <Header title={'Fat Ashe\'s Lemonade'} />
      {/* TODO: define categories and pull in here */}
      <Categories title={'Fat Ashe\'s Lemonades and Teas'} />
        <div>Categories
          {/* handleSubmit to handle the activation? */}
        </div>
      {/* TODO: define items title and pull in here */}
      <Items title={'insertsomethinghere'} />
      <Footer />
    </>
  )
}

export default App;