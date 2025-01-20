Using this repository to track my progress as I learn react.

## Current setup:
1. Using Node JS for running JS.
2. Using Vite. Don't know why. UPDATE: I know now. Browser doesn't understand JSX. Vite converts JSX to JS and then some. But I **require** it now to convert JSX code.
3. Using React JS.

## Setup guide:
1. Install Node JS. I used nvm to install the current lts version of node using `nvm install --lts`.
2. Create a vite project using `npm create vite@latest`.
3. cd into the project and run `npm install` to install all dependencies.
4. Use command `npm run dev` to start the node server.

## Lessons Learnt:
1. React is declarative meaning I don't have to tell it how to do something related to front-end. I just tell it what to do and it takes care of how to do it. Showed how vanilla js does imperative coding in this [commit](https://github.com/surya-441/first-react/commit/abed42166ceff5ecbc829f50183ef9a7896a6426).
2. Vite expects users to use jsx extension.
3. Setting up React Router and pages.
4. Remember to check browser console incase something unexpected happens.
5. <> </> is a react Fragment component which allows you to wrap multiple components within a single return statement without using div as a wrapper.
6. Props is the key to making React composable.
7. Props are meant to be immutable. They are passed from above and are supposed to be used as is without modification.
8. State on the other hand is meant to be changed. State variables, when updated, will trigger a re-render.
9. From a top level view, react components are basically functions that return JSX code. React renders these returned JSX code once when the page is first loaded. React only re-renders a page when the component receives new props or when a state inside a function is changed.
10. State variables can be created by calling the useState function which returns an array of 2 elements. First element is a variable with the value that is passed to the useState function call, and the second element is a function used to set the value to the variable and trigger a re-render. For example, `const [count, setCount] = useState(0)` will create and set the value of count to 0. To change the value of count, you can call setCount and pass in the new value for count. `setCount(1)` will set the value of count to 1.
11. If you want to change the state variable's value based on its current value, then you can pass a function as a parameter to the set function which will get the current value as input and whatever value it returns will be set as the new value for the variable. For example, `setCount((prev) => prev + 1)`, will take the current value (named as prev), increment it by 1 and return it.
12. A controlled component is a react component that is entirely controlled by react. For example, assume we have an input box, whenever we make changes to its content, react does not know of these changes. If we add an event listener to track changes and save the input value as a react state, then react has full control over the input box. Now, this input box is a controlled componenet.
13. useEffect is a powerful but confusing tool. "useEffect allows you to sync with an external system". Here an external system is anything that is not controlled by react. Even the browser's DOM structure is an external system as it is not controlled by react.
14. useEffect runs initally after the component gets rendered and evertime a change is made to any of the dependencies that it tracks. NOTE: It will only work on re-renders! So make sure that the dependency is a state?
15. One example of using useEffect is when you want to make an API call and set some state based on the response from the API call. If it weren't for useEffect, this would result in an infinite loop because when you get data from the API call and call setState, it will trigger a rerender and that will fetch data from API which sets the state and it goes on! With useEffect you can decide when the code inside it has to run!
16. Be careful with useEffect as it can lead to unexpected behaviors!
17. Based on my usage, I think when we use useEffect, we should console.log in all the functions inside it to see if works the way we intended.
18. if you make a function call as a prop to useState function, even if the state value doesn't change during each run, react will make the function call during each re-render. To prevent that pass a function as a prop and react will call it only once at the beginning.