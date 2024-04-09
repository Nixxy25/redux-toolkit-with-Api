import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./features/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    console.log("state..",state.app);
    return state.app
  });
  if(data.loading) {
    return <h2>Loading ...</h2>
  }

  if (data.error != null){
    return <h2>{data.error}</h2>
  }
  return (
    <div> 
      <div>Hello World</div>
      <button onClick={()=> dispatch(getAllData())}>Get Users</button>
    
      {data.users.map((items) => (
        <li key={items.id}>{items.login}</li>
       ))}

    </div>
  )
}

export default App;