import React from "react";

export type PromiseResultState<T> = T | null;
export interface PromiseState<T> {
  error: Error | null,
  loading: boolean,
  result: PromiseResultState<T>,
}

export type RetryFunction = () => void;
type UsePromiseStateArg<T> = (() => Promise<T>)

interface UsePromiseStateReturn<T> extends PromiseState<T> {
  retry: RetryFunction,
}

const usePromiseState = <T>(func: UsePromiseStateArg<T>, trigger: boolean = true) : UsePromiseStateReturn<T> => {
  const promiseFunction = React.useCallback(() => func(), [func])
  const [state, setState] = React.useState<PromiseState<T>>({
    error: null,
    loading: false,
    result: null,
  });

  const retry: RetryFunction = React.useCallback(() => {
    setState((oldState) => ({
      ...oldState,
      error: null,
      loading: true,
    }));
    promiseFunction()
      .then(result => setState({
        error: null,
        loading: false,
        result,
      }))
      .catch(error => setState({
        error,
        loading: false,
        result: null,
      }));
  }, [promiseFunction]);

  React.useEffect(() => {
    if (trigger) {
      retry();
    }
  }, [retry, trigger]);

  return {
    ...state,
    retry,
  }
};

export default usePromiseState;
