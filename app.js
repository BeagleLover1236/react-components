// TOD
const { useState } = React;

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false)
  const [isHover, setIsHover] = useState(false)


  const style = {
    textDecoration: isDone? 'line-through': 'none',
    font-weight: isHover? 'bold': "normal"
  };

  return (
    <li style={style}
    onClick={() => setIsDone(!isDone)}
    onMouseEnter={() => setIsHover(!isHover)}
    onMouseLeave={() => setIsHover(!isHover)}
    >
      {props.todo}
    </li>
  );
}


const GroceryList = (props) => (
   <ul>
    {props.todos.map((todo) => (
      <GroceryListItem todo={todo} />
    ))}
    </ul>
);

const App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList todos={['Whole Milk', 'Eggs']} />
  </div>
)



ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);