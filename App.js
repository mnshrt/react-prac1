const child1 = React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"hi I am a H1 tag"),
    React.createElement("h2",{},"hi I am a H2 tag")
])
const child2 = React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"hi I am a H1 tag"),
    React.createElement("h2",{},"hi I am a H2 tag")
])
const parent = React.createElement("div",{id:"parent"}, [child1,child2]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);