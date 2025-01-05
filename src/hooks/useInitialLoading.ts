import { useState, useEffect } from 'react';

export function useInitialLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes de chargement

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}