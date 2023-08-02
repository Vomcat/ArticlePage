import { useCallback, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = useCallback(async (applyData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1`
      );
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data.elements);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    error,
    sendRequest,
    isLoading,
  };
};
export default useFetch;
