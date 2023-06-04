import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/imageActions";
import { useSelector, useDispatch } from "react-redux";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/Homepage";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import './App.css'


const App = () => {
  let loading = useSelector((state) => state.loading);
  let data = useSelector((state) => state.data);
  let error = useSelector((state) => state.error);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <h2>Your Feed is Loading...</h2>;
  }

  if (error) {
    return <div>Oops something went wrong : {error}</div>;
  }

  return (
    <>
      <div className="header">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage data={data}/>}></Route>
        <Route path="/item/:id" element={<Post data={data}/>}></Route>
      </Routes>

      
    </>
  );
};

export default App;
