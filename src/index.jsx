// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById('root'))

// function MainContent() {
//   return <h1>React is great</h1>
// }
// root.render(
//   <div>
//     <MainContent />
//   </div>
// )

const whyReact = document.createElement("h1");
whyReact.textContent = "React is declarative";
whyReact.class = "header";
document.getElementById("root").appendChild(whyReact);