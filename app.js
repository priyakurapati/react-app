const data = React.createElement('div',{id: 'parent'}, [ React.createElement('div',{id:'child'},
[React.createElement('h1',{},'heading 1'), React.createElement('h2',{},'heading 2')]) ,
 React.createElement('div',{id:'child2'},
[React.createElement('h1',{},'heading 1'), React.createElement('h2',{},'heading 2')]) ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(data);