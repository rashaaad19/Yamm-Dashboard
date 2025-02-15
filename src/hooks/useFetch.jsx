import { useState, useCallback, useEffect } from "react";

const useFetch = (baseURL, action) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async (id, options = {}) => {
      setLoading(true);
      try {
        const url = id ? `${baseURL}/${id}` : baseURL; // Dynamically construct the URL
        const response = await fetch(url, {
          method: action === "GET" ? "GET" : options.method || "GET", // Default to GET if no method is provided
          headers: {
            "Content-Type": "application/json",
            ...options.headers, // Merge any additional headers
          },
          body: action !== "GET" ? JSON.stringify(options.body) : null, // Include body for non-GET requests
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
