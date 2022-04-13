import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuoteFound from "../components/quotes/NoQuotesFound";
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
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuoteFound />;
  }
  return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export default AllQuotes;
