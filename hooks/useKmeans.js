import { useEffect, useState } from "react";
import { appInfo } from "../config/appInfo";

const useKmeans = () => {
  const url = `${appInfo.apiDomain}${appInfo.apiVersionPath}rules/kmeans`;
  const [kmeans, setKmeans] = useState(null);
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
        setKmeans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [loading, kmeans, error];
};

export default useKmeans;
