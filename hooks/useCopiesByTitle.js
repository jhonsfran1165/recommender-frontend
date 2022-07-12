import { useEffect, useState } from "react";
import { appInfo } from "../config/appInfo";

const useCopiesByTitle = (id) => {
  const url = `${appInfo.apiDomain}${appInfo.apiVersionPath}copies/copies-by-title?id=${id}`;
  const [copies, setCopies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
        }
        const data = await response.json();
        setCopies(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    id && fetchData();
  }, [url]);

  return [loading, copies, error];
};

export default useCopiesByTitle;
