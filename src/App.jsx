import "./App.css";
import EbikeList from "./components/EbikeList";

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-indigo-500 via-green-500 to-green-500 bg-clip-text text-transparent">
          Welcome to the E-bike Showcase
        </h1>
        <p className="text-lg text-2xl my-9">
          Discover the features and benefits of our latest E-bikes.
        </p>
      </header>

      <div className="mb-10 md:mb-20">
        <img
          src="./src/assets/image/EcoRide X1.png"
          alt="ebike"
          width={500}
          height={500}
          className="mx-auto w-full max-w-3xl"
        />
        <p className="font-bold text-3xl">EcoRide X1</p>
        <p className="max-w-xl mx-auto text-2xl my-5">
        Introducing the EcoRide X1, a top-of-the-line E-bike with a high-efficiency motor and sleek design. Ideal for commuting and leisure rides.
        </p>
        <p className="font-bold ">$999.99</p>

        <div className="max-w-xs  mx-auto flex items-center gap-3 my-5">
          <p className="w-fit flex items-center justify-center mx-auto bg-yellow-300 rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
              />
            </svg>
            4.2
          </p>

          <p className="w-fit flex items-center justify-center mx-auto bg-indigo-300 rounded-md p-1">
            reviews : 120
          </p>
        </div>
      </div>

      <h1 className="text-left font-bold text-3xl text-green-500 ">Product Lists</h1>
      <EbikeList />
    </div>
  );
}

export default App;
