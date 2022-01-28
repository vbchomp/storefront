// step 1

// let initialState = {
//   categories: {
//     name: 
//     item: {}
//   },
//   items: {}

// };

// step 2 define actions

export const uppercaseName = () => {
  return {
    type: 'APP/UPPERCASE_NAME'
    // can also have payload:, need to have as argument, too
  }
}

// step 3: define our reducer

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch (type) {
    default:
      return state;
    case 'APP/UPPERCASE_NAME':
      return {
        ...state,
        name: state.name.toUpperCase()
      };
  }
};