import { LoadingIcon } from "./icons";

const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div role="status">
          <LoadingIcon />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
