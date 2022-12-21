import React from "react";
import { useState, useEffect } from "react";

const useGoogle = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, [term]);

  return { data };
};
export default useGoogle;
//context -API is used for state management. If we give any search input so it needs to be stored in state.
//fetch will fetch data from the given url above, by passing API KEY AND CONTEXT KEY
// context-api is used to pass data between pages
//we haven't used props as Props drilling problme can come and so
// we will use state management , context api
