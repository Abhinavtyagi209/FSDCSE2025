const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{style:{color:"brown"}},"ABES ENGINEERING COLLEGE");
const img = React.createElement("img",{src:"https://th.bing.com/th/id/OIP.o1mX4b0kC3jH5gkT8n1a9AHaHa?pid=ImgDet&rs=1",alt:"logo",style:{width:"200px"}});
const n  = React.createElement("h2",{style:{alignItems:screenLeft}},"ABHINAV TYAGI");
const li1 = React.createElement("li",{},"React");
const li2 = React.createElement("li",{},"Java");
const li3 = React.createElement("li",{},"Python");
const ul = React.createElement("ul",{}, n ,img,li1,li2,li3);
const wrapper = React.createElement("div",{} ,h2,ul);
const el = <div>
    <h1>ABES ENGINEERING COLLEGE</h1>
    <h2>
        Abhinav Tyagi
    </h2>
</div>

root.render(el);
