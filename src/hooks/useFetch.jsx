import { useState, useCallback } from "react";

// params: the url to be fetched, and the options
const useFetch = (baseURL, action) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //Wrapping function definition in usecallback to increase optimization and prevent infnity loop
  const sendRequest = useCallback(
    //params: id for item, options object initially set to be empty, options determine which http type to preform
    //return: data,loading and error states to update the UI, sendRequest function to manually trigger requests
    async (id, options = {}) => {
      setLoading(true);
      try {
        //if user passed id, add it to the url request (patch, put, delete operations)
        const url = id ? `${baseURL}/${id}` : baseURL; 
        const response = await fetch(url, {
          method: action === "GET" ? "GET" : options.method || "GET", // Default to GET if no method is provided
          headers: {
            "Content-Type": "application/json",
            ...options.headers, 
          },
          // Include body for non-GET requests
          body: action !== "GET" ? JSON.stringify(options.body) : null, 
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        return result; // Return the result for further use
      } catch (error) {
        setError(error);
        throw error; // Re-throw the error for handling in the component
      } finally {
        setLoading(false);
      }

    },
    [baseURL, action]
  );

  return { data, loading, error, sendRequest };
};

export default useFetch;
