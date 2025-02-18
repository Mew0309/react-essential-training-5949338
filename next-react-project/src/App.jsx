import './App.css'
import {useEffect, useReducer} from "react";
import "./images/next-react-project/src/images/1000_F_501416296_bP1aRAl7ktvMZRHAuOtmOWdTcZraS0sP.jpg"
function Header({name, year}) {
  console.log(props)
  return (
    <head>
      <h1> {props.name} Kitchen</h1>
      <p>Copyright {props.year}</p>
    </head>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup"
];

const dishObjects = items.map((dish, i) =>({id: 1, title: dish}));

function Main({dishes, openStatus, onStatus}){
  return (
    <>
    <div>
      <button onClick={() => onStatus(true)}>
        I want to be open
      </button>
      <h2>Welcome to this beatiful resterant! {" "}
       {openStatus ? "Open" : "Closed"}</h2>
    </div>
    <main> 
      <img
      src="./images/next-react-project/src/images/1000_F_501416296_bP1aRAl7ktvMZRHAuOtmOWdTcZraS0sP.jpg"
      height={200}
      alt="A photo of a smiling chef owner"
      />
    </main>
    <ul>
      {dishes.map((dish) => (
        <li>
          key={dish.id}
          style={{ listStyleType: "none" }}

          {dish.title}
        </li>
      ))}
    </ul>
    </>
  )
}
function App() {
  //const [status, setStatus] = useState (true);
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}`)
  }, [status])

  return ( 
  <div>
    <h1>The resterant is currantly {status ? "open" : "closed"}.</h1>
    
    <button onClick ={toggle}>
      {status ? "Close" : "Open"} Resterurant </button>
     <Header name="Alex" year={new Date().getFullYear()} />
     <main 
     dishes={dishObjects} 
     openStatus={status} 
     onStatus={toggle}/>
  </div>
   );
  
}

export default App
