import React from "react"
const parent=
    React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "child"},
    React.createElement("h1",{id: "heading"},"I am an html heading"))) 
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);