**The React Lifecycle**

[React Lifecycle Methods- how and when to use them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
[Understanding React — Component life-cycle](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d)
[Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
[React Lifecycle Methods: How and When to Use Them](https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282)
[React Interview Questions](https://tylermcginnis.com/react-interview-questions/)
[CS8 - React II Lifecycle Methods](https://www.youtube.com/watch?v=GY8zKD4AHl0&feature=youtu.be)

- every component in React has a lifecycle
- the three React lifestyle phases are:
  1. Birth/Mounting
     - whatever initial data you want access to will be defined on the constructor of this phase
     - the component is being built from the ground up
     - render method is invokes
     - `componentDidMount` is called
  2. Growth/Updating
     - updating component data
     - `setState` can be used to change data and force a render
     - `shouldComponentUpdate` could be used to stop a component from calling render
  3. Death/Unmounting
     - component is removed form screen
     - `componentWillUnmount` is called and can be used for clean up

- Methods we will use:
    - `constructor`
    - `render`
    - `componentDidMount`
    - `componentDidUpdate`
    - `componentWillUnmount`

- The Constructor Function
    - the constructor function on a React Class’ Component’s purpose is to serve up initial state data for when the time comes to mount up your DOM elements

- The Render Method
    - 