import { Route, Switch, Redirect } from "react-router-dom";

import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/quotes"} />
        </Route>
        <Route path={"/quotes"} exact>
          <AllQuotes />
        </Route>
        <Route path={"/quotes/:quoteId"}>
          <QuoteDetail />
        </Route>
        <Route path={"/new-quote"}>
          <NewQuote />
        </Route>
        <Route path={"*"}>
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
