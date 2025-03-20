const Shimmer = () => {
  return (
    <div
      data-testid="shimmerCard"
      className="p-4 mt-20 bg-white dark:bg-gray-900"
    >
      <div className="flex gap-5 mb-6">
        <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-t-md mb-4 animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 ml-2 animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 ml-2 animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 ml-2 animate-pulse"></div>
              <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded-md mb-4 ml-2 animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
