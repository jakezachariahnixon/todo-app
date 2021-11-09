import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Sidebar } from './components/Sidebar';

const Routes = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/">
            <Sidebar />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
