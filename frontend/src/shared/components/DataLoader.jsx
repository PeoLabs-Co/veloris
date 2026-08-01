/**
 * Standardized loading indicator view.
 */
function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 min-h-[200px] w-full text-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-surface-variant"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-secondary animate-spin"></div>
      </div>
      <p className="text-label-caps text-outline animate-pulse">
        Loading latest information...
      </p>
    </div>
  );
}

/**
 * Standardized error message view.
 * @param {{ error: any }} props
 */
function ErrorState({ error }) {
  const message = typeof error === 'string'
    ? error
    : error?.message || 'An unexpected error occurred while loading data.';

  return (
    <div className="rounded-none border border-error bg-error-container p-6 my-4 max-w-lg mx-auto w-full">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 text-error">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="text-left">
          <h3 className="text-label-caps text-error mb-1">
            Data Fetching Error
          </h3>
          <p className="text-body-md text-on-error-container font-medium">
            {message}
          </p>
          <p className="mt-3 text-label-sm text-outline">
            Please check your network connection or try reloading the page.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Centralized data loader component to handle data state and enforce UI governance.
 *
 * @param {object} props
 * @param {boolean} props.isLoading - Whether the data is currently loading.
 * @param {any} props.error - Any error returned during fetching.
 * @param {any} props.data - The loaded data.
 * @param {React.ReactNode | ((data: any) => React.ReactNode)} props.children - Child elements or render function.
 */
export function DataLoader({ isLoading, loading, error, data, children }) {
  const activeLoading = isLoading !== undefined ? isLoading : loading;

  // 1. Return standardized loading UI if activeLoading is true
  if (activeLoading) {
    return <LoadingState />;
  }

  // 2. Return standardized error UI if error exists
  if (error) {
    return <ErrorState error={error} />;
  }

  // 3. Return null if data is explicitly null
  if (data === null) {
    return null;
  }

  // 4. Otherwise render the children (optionally passing data if children is a function)
  if (typeof children === 'function') {
    return children(data);
  }

  return children;
}

export default DataLoader;
