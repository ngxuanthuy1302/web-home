import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login, Public, Album, Personal } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from './store/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  })
  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.ALBUM_TITLE_PID} element={<Album />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
