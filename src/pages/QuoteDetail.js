import { useEffect } from "react";
import {
  Route,
  useParams,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighLightedQuote from "../components/quotes/HighlightedQuote";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_DATA = [
//   {
//     id: "q1",
//     author: "Unkown",
//     text: "The purpose of our lives is to be happy",
//   },
//   {
//     id: "q2",
//     author: "Chetu",
//     text: "What makes you different today,it'll make you special tmrw :)",
//   },
// ];

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        {" "}
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="cnetered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <Redirect to={"/pagenotfound"} />;
  }
  return (
    <div>
      <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
