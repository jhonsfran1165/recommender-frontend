import { useEffect, useState } from "react";
import { appInfo } from "../config/appInfo";

const useCopy = (id) => {
  const url = `${appInfo.apiDomain}${appInfo.apiVersionPath}copies/copy?id=${id}`;
  const [copy, setCopy] = useState(null);
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
        setCopy(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    id && fetchData();
  }, [url]);

  return [loading, copy, error];
};

export default useCopy;
