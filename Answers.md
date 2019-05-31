1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

reducers, actions, store.


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store sets the state.( it contains our state for our application)

When an event or user interaction happens, an action creator is called and dispatches an action. Actions tell us about the changes from the event.

Reducers handle those actions and replace the store accordingly.



3.  What is the difference between Application state and Component state? When would be a good time to use one over the other? Application state is at the top of the tree of components, it is the final state. Component state is lower on the component tree. If you have alot of components, using a component state might help lessen prop drilling.


4.  What is middleware? it is software used to intercept some process, run a function at the intercept point, then (usually) continue the process, or sometimes stop the preocess entirely.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? It is a word used to describe a function that is returned by another function. Thunk provides the ability to handle asynchronous operations inside our Action Creators.


6.  Which `react-redux` method links up our `components` with our `redux store`?
connect
