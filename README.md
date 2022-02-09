# storefront

## Storefront 'Fat Ashe's Lemonade Stand' Phase 3

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

### Technical Requirements / Notes Phase 3

As developers, here are the high level development tasks that address the above end user requirements and workflow

- Continue to use Material UI Components for layout and styling
- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart
- Continue to use multiple reducers

### Notes on State Management

- You will need to use ```useEffect()``` to dispatch a load action on the initial page load
  - This will need to use ```thunk``` as it will be asynchronous
- When adding/removing/updating items in the cart, the action/reducer will need to update the server
  - Perform the appropriate ```post```, ```put```, or ```delete``` action via API call (using thunk in an async action) on each of these actions as performed by the users

## Storefront 'Fat Ashe's Lemonade Stand' Phase 2

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

Application Flow:

- User sees a list of categories
- Chooses a category and sees a list of products
- Clicks the “Add to Cart” button on any product
- Clicks the “Cart” link in the header
- Sees a list of all products in the cart
- Clicks the delete button on an item and sees the item removed
- Changes the quantity selector on an item and sees the cart total change

### Technical Requirements / Notes Phase 2

As developers, here are the high level development tasks that address the above end user requirements and workflow

- Continue to use Material UI Components for layout and styling
- Add a “Cart” indicator to the header, like this: Cart (0)
- Create a new Cart component to show the items in the user’s cart

#### Application Architecture Phase 2

- Add a new component to the page: ```<SimpleCart />```
  - Displays a short list (title only) of products in the cart
  - This should be present at all times
- Home Page Operation:
  - When the user selects (clicks on) a category …
    - Identify that category as selected
    - Show a list of products associated with the category, that have a quantity > 0
    - Add an “add to cart” button to each product
  - When a user clicks the “add to cart” button add the item to their cart
    - In the ```<SimpleCart/>``` component, show a running list of the items in the cart (just the titles)
    - Change the ```(0)``` indicator in the header to show the actual number of items in the cart
    - Reduce the number in stock for that product

#### Manage state in a Redux store with multiple reducers/actions

- Categories
  - State should be a list of categories as well as the active one
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger the reducer to filter the product list when the active category is changed
    - HINT: Different reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category
  - Create an action that will trigger the reducer to reduce the stock counter
  - Create a reducer that reduces the # in stock when that action is dispatched
- Cart
  - State should be an array of products that have been added (all product details)
  - Create an action that will trigger the reducer to add the selected item to the cart
    - Hint: this could be the same action type as you create for the Products reducer
  - Create a reducer that adds the product to the array of items in state

## Storefront 'Fat Ashe's Lemonade Stand' Phase 1

The first of a 4-Phase build of the storefront application, written in React. In this first phase, the goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that it can progressively build this application in a scalable manner

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

### Technical Requirements / Notes Phase 1

As developers, here are the high level development tasks that address the above end user requirements

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
  - Identify that category as selected (change of class/display)
  - Show a list of products associated with the category

### Application Architecture Phase 1

Create the Virtual Store application as follows:

- Begin with creating your application using ```create-react-app```
- Install Material UI as a dependency
- Write an ```App``` component that serves as the container for all sub-components of this application
  - A ```<Header>``` component which shows the name of your virtual store
  - A ```<Footer>``` component which shows your copyright and contact information
  - A ```<Categories>``` component
    - Shows a list of all categories
    - Dispatches an action when one is clicked to “activate” it
  - A ```<Products>``` component
    - Displays a list of products associated with the selected category

### Notes on constructing the Redux Store

- Categories
  - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched

- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger when the active category is changed
    - HINT: Multiple reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category

- Active Category
  - State should store active category
    - Other components (products, etc) might need to reference this

## Author

Heather Bisgaard, Software Engineer

## Collaborators

Kris Esvelt, Software Developer

## Setup

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## References

- Class videos & github repo
- [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

## Links

- [Github](https://github.com/vbchomp/storefront)

## Wireframe

![WireFrame_main](/img/WireFrame_main.png)
![WireFrame_category](/img/WireFrame_category.png)
![WireFrame_item](/img/WireFrame_item.png)
