import  React  from "react";
import  ReactDOM  from "react-dom/client";

//react element
const data = React.createElement('div',{id: 'parent'}, [ React.createElement('div',{id:'child'},
[React.createElement('h1',{},'heading 1'), React.createElement('h2',{},'heading 2')]) ,
 React.createElement('div',{id:'child2'},
[React.createElement('h1',{},'heading 1'), React.createElement('h2',{},'heading 2')]) ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(data);

const jsxHeading1 = (<h1>Namaste React element</h1>);
// jsx element -> babel converts to react element and then executes and renders to html element
//can use react element inside another read element using {} parenthesi
const jsxHeading = (<h1 id="container" className="head"> {jsxHeading1} Namaste React</h1>)

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(jsxHeading); // replaces the whole contnet with the root element and dispalys the latest

// react components

//react functional components -> js fucntion which return jsx code
//variables should be in caps, as they are components
const FunctionHeadingComp1 = ()=>(<h1>child compoennt</h1>);

//used one component in other compoennt, it is called as component composition
const FunctionHeadingComp2 = () => (
    <div>
        {jsxHeading} // react element
        <FunctionHeadingComp1 /> //react compoennt
        <FunctionHeadingComp1></FunctionHeadingComp1> // can be written in this format as well.
        { FunctionHeadingComp1() } //as its a fucntion, so it is also same
        <h2>parent component component</h2>
    </div>
)

const root3 = ReactDOM.createRoot(document.getElementById('root'));
root3.render(<FunctionHeadingComp2 />);




