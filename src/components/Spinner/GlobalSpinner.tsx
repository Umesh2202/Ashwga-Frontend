import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import Spinner from "./Spinner";

const GlobalSpinner = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isLoading = isFetching + isMutating > 0;

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Spinner />
    </div>
  );
};

export default GlobalSpinner;
