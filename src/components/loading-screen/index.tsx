const LoadingScreen: React.FC = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[#151D48] z-50">
      <div className="flex justify-center items-center mt-[45vh]">
        <div className="fas fa-circle-notch fa-spin fa-5x text-white"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
