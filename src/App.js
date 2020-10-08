import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './styles/main.css';
import MainTemplate from "./components/templates/MainTemplate";
import NewsFeed from "./components/organisms/NewsFeed";
import NavBar from "./components/organisms/NavBar";
import ForLaterList from "./components/organisms/ForLaterList";
import { ForLaterProvider } from "./store/context/ForLaterContext";
import { routes } from "./routes/routes";
import { pathNameSlice } from "./utils/parsers";

function App() {
  return (
      <BrowserRouter>
          <div className="h-screen grid main-template text-gray-600 font-body md:grid-cols-8">
              <NavBar />
              <ForLaterProvider>
                  <MainTemplate>
                      <Switch>
                          <Route exact path={routes.home} render={() => <Redirect to={routes.world} />} />
                          <Route
                              path={routes.world}
                              render={({location}) => <NewsFeed pathname={pathNameSlice(location.pathname)}/>}
                          />
                          <Route
                              path={routes.sport}
                              render={({location}) => <NewsFeed pathname={pathNameSlice(location.pathname)}/>}
                          />
                          <Route
                              path={routes.politics}
                              render={({location}) => <NewsFeed pathname={pathNameSlice(location.pathname)}/>}
                          />
                          <Route
                              path={routes.business}
                              render={({location}) => <NewsFeed pathname={pathNameSlice(location.pathname)}/>}
                          />
                      </Switch>
                  </MainTemplate>
                  <ForLaterList />
              </ForLaterProvider>
          </div>
      </BrowserRouter>
  );
}

export default App;
