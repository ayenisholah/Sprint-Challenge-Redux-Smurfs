1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
** Map
** Filter
** Spread Operator

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

## Actions
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

## Reducers
Reducers specify how the application's state changes in response to actions sent to the store. 

## Store
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, while component state is local. Component state however, lives within that specific component. Application State is used in very big applications.

1.  What is middleware?
middleware is some code you can put between the framework receiving a request, and the framework generating a response. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

