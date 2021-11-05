import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/">
            <p>Todo App</p>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
