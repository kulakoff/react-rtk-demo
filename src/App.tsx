import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>DEMO RTK APP</h1>
        <div>
          {isLoading && <h6>Загрузка ...</h6>}
          {error && <h6>{error}</h6>}
          {users.length > 0 && <pre>{JSON.stringify(users, null, 2)}</pre>}
        </div>
      </header> */}
      <PostContainer/>
    </div>
  );
}

export default App;
