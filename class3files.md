// React Element

const heading =React.createElement(
"h1",
{id:"heading"},
"Namesta React"
);

// React.createElement is an object
// When we render to the dom then it becomes a html element

const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(heading);

// To solve this react developers create JSX
// JSX(Javascript Syntax)

// Create h1 using jsx
const jsxHeding=(<h1 className="hiJSX" >
React Using JSX
</h1>);
console.log(jsxHeding);
root.render(jsxHeding);

// JSX - HTML-Like or XML-like syntax

// The jsx syntax is not understand by browser then how it is render?
// JSX (transpiled before it reaches the JS) - PARCLE - Bable
// Bable is transpiled for Translating the code of jsx

// React Component
// There are two type of components
// 1.Class-Based Component (OLD)
// 2.Functional-Based Component (NEW)

// 2.Functional-Based Component (NEW)
// => React Functional-Based Component is just a javascript function.
// If a function returning react element it becomes react functional component.
// If a function returning jsx component it is react functional component.

const HedingComponent=()=>{
return(
<h1>Namesta React Functional Component</h1>
);
}
// this also valid functional component

const HedingComponent2=()=> {

    return<h1>Hello React</h1>

};
const HedingComponent3=()=> <h1>Hello React</h1>;
// react element
const ReactElement=()=>(
<div>
<h1>{100+200}</h1>
</div>
)

const HedingComponent4=()=> {

    return(
        <div>
        <HedingComponent/>
        <h1>Hello React</h1>
            {ReactElement}
    </div>
    )

};

// React Element
const heading2=(
<div>
<h1>Hello React</h1>
</div>
)
// to render react functional component we use this syntax
root.render(<HedingComponent4/>);
// root.render(HedingComponent4());

// bebel understand this syntax for functional component
// <HedingComponent/>

// jsx is also prevent sanitizing attack

// <HedingComponent4/>
// and this
// <HedingComponent4></HedingComponent4>
// and this
// HedingComponent4()
// is same. because end of the day react is javascript
