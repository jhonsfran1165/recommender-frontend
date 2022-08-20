import { useEffect, useState } from "react";
import { appInfo } from "../config/appInfo";

const useRules = (id, confidence = 0.66, lift = 1.1) => {
  const url = `${appInfo.apiDomain}${appInfo.apiVersionPath}rules/rules?id=${id}&confidence=${confidence}&lift=${lift}`;
  const [rules, setRules] = useState(null);
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
        setRules(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    id && fetchData();
  }, [url]);

  return [loading, rules, error];
};

export default useRules;
