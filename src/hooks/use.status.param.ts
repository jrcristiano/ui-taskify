import { useSearchParams } from 'react-router-dom';

export function useStatusParam(defaultValue = 'Todas') {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') || defaultValue;
  
  return status;
}