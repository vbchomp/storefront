// step 1

let initialState = {
  category: [
    { name: 'Lemonades', subCategory: 'beverage' },
    { name: 'Teas', subCategory: 'beverage' },
    { name: 'Other Beverages', subCategory: 'beverage' },
    { name: 'Cookies', subCategory: 'treat' },
    { name: 'Other Treats', subCategory: 'treat' },
    { name: 'Merchandise', subCategory: 'tshirt' },
  ],
  item: [
    { name: "Fat Ashe's Lemonade", category: 'Lemonades' },
    { name: "Fat Ashe's Light Lemonade", category: 'Lemonades' },
    { name: "Lucy Lu & Honey Lemons", category: 'Lemonades' },
    { name: "Olde Boring Store Bought Stuff", category: 'Lemonades' },
    { name: "Albert Einstein aka Arnold Palmer", category: 'Teas' },
    { name: "Mogee's Sun Kissed", category: 'Teas' },
    { name: "Opa's Too Sweet", category: 'Teas' },
    { name: "Nunu's Fire Cider", category: 'Other Beverages' },
    { name: "Mima and Pop's Colarific", category: 'Other Beverages' },
    { name: "Nunu's Oatmeal Chocolate Craisin", category: 'Cookies' },
    { name: "Mogee's Krispies", category: 'Other Treats' },
    { name: "Fat Ashe's Lemonades T-Shirt ", category: 'Merchandise' },
  ],
  size: [
    { size: '8 oz', subCategory: 'beverage' },
    { size: '16 oz', subCategory: 'beverage' },
    { size: '24 oz', subCategory: 'beverage' },
    { size: 'Ashe', subCategory: 'treat' },
    { size: 'Fat Ashe', subCategory: 'treat' },
    { size: 'S', subCategory: 'tshirt' },
    { size: 'M', subCategory: 'tshirt' },
    { size: 'L', subCategory: 'tshirt' },
    { size: 'XL', subCategory: 'tshirt' },
    { size: 'XXL', subCategory: 'tshirt' },
  ],
  price: [
    { size: '8 oz', subCategory: 'beverage', price: 1.50 },
    { size: '16 oz', subCategory: 'beverage', price: 2.25 },
    { size: '24 oz', subCategory: 'beverage', price: 3.00 },
    { size: 'Reg', subCategory: 'treat', price: 1.99 },
    { size: 'Large', subCategory: 'treat', price: 2.99 },
    { size: 'S', subCategory: 'tshirt', price: 19.99 },
  ],
  currentCategory: 'Lemonades',
  currentItem: ''
 
};

// step 2 define actions

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category
  };
};

export const changeItem = (item) => {
  return {
    type: 'CHANGE_ITEM',
    payload: item
  };
};

// step 3: define our reducer for managing initial state

const CategoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        currentCategory: payload,
      };
    case 'CHANGE_ITEM':
      return { 
        ...state, 
        currentItem: payload, 
      };
    default:
      return state;
  }
};

export default CategoryReducer;
