const ShimmerDish = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-4xl mt-20 p-8 md:p-12">
        <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-6 transition-colors duration-300"></div>

        <div className="bg-gray-200 dark:bg-gray-600 rounded-3xl p-5 animate-pulse py-20 transition-colors duration-300"></div>

        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-gray-300 dark:border-gray-600 transition-colors duration-300"
            >
              <div className="w-2/3 space-y-1">
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse transition-colors duration-300"></div>
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse transition-colors duration-300"></div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded-full animate-pulse transition-colors duration-300"></div>
                  <div className="w-20 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse transition-colors duration-300"></div>
                </div>
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse transition-colors duration-300"></div>
              </div>

              <div className="w-1/4 relative">
                <div className="w-full h-30 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse transition-colors duration-300"></div>
                <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-25 h-8 bg-gray-300 dark:bg-gray-500 rounded-md animate-pulse transition-colors duration-300"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerDish;
