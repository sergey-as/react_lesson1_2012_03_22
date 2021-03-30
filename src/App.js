import React from "react";
import './App.css';
import {ProductCard} from "./components/Card/Card";

// owu react intro topics:
//main mental models - components = our custom tags
//simple jsx componets
//show babel in action
//short explanation about virtual DOM
//props
//styling
// css module == imitation of shadow DOM

////simple jsx componets
//const SimpleComponentJSX = () => (<div><h1>test JSX</h1></div>);
//// show babel in action
//// babel transform SimpleComponentJSX to SimpleComponentNotJSX
//const SimpleComponentNotJSX = () => (React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null,"test NotJSX")));

const ProductCard_1 = (props) => {
    console.log(props);
    return (
        // <div>
        //     {/*<h1>{props.title}</h1>*/}
        //     {/*<h2>{props.price}</h2>*/}
        //     {/*<h3>{props.description}</h3>*/}
        //
        //     {/*<h1>{props.title || 'N/A'}</h1>*/}
        //     {/*<h2>{props.price || 'N/A'}</h2>*/}
        //     {/*<h3>{props.description || 'N/A'}</h3>*/}
        //
        //     <h1>{props.title ?? 'N/A'}</h1>
        //     <h2>{props.price ?? 'N/A'}</h2>
        //     <h3>{props.description ?? 'N/A'}</h3>
        //
        //     {/*undefined || 1  = 1*/}
        //     {/*null || 1  = 1*/}
        //     {/*0 || 1  = 1*/}
        //     {/*NaN || true = true*/}
        //     {/*для ?? false тільки при undefined або null*/}
        //     {/*undefined ?? 1  = 1*/}
        //     {/*null ?? 1  = 1*/}
        //     {/*0 ?? 1  = 0*/}
        //     {/*NaN ?? true = NaN*/}
        //
        // </div>

        <div className="cardAppCSS">
            <h1>{props.title ?? 'N/A'}</h1>
            <h2>{props.price ?? 'N/A'}</h2>
            <h3>{props.description ?? 'N/A'}</h3>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <div>
                {/*main mental models - components = our custom tags */}
                {/*<button onClick={() => {}} style={{background: 'red'}}>text</button>*/}
                {/*<input type="text"/>*/}
                {/*<input type="password"/>*/}
                {/*<Component/>*/}

                {/*/!*simple jsx componets*!/*/}
                {/*<SimpleComponentJSX/>*/}
                {/*<SimpleComponentNotJSX/>*/}
            </div>
            <div>
                <ProductCard_1 title="cardAppCSS title 11" price="$29.99" description="test description 11"/>
                <hr/>
                {/*<ProductCard_1 title="title 12" price="$129.99" description="test description 12"/>*/}
                {/*<hr/>*/}
                {/*<ProductCard_1 title="title 13" price="$329.99" description="test description 13"/>*/}
                {/*<hr/>*/}
                {/*<ProductCard_1 title="title 14"/>*/}
                {/*<hr/>*/}
                {/*<ProductCard_1/>*/}
                {/*<hr/>*/}
                {/*<hr/>*/}
            </div>

            <ProductCard title="title 1" price="$55" dedcription="test dedcription 1"/>
            <hr/>
            <ProductCard title="title 2" price="$55" dedcription="test dedcription 2"/>
            <hr/>
            <ProductCard title="title 3" price="$55" dedcription="test dedcription 3"/>
            <hr/>
            <ProductCard title="title 4" dedcription={5 / 0}/>
            <hr/>
        </div>
    );
}

export default App;
