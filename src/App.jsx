import Card from "./components/Card";

function App() {
  return (
    <main className="h-screen relative overflow-hidden">
      <div className="bg-1 h-[50vh] rounded-bl-[150px]"></div>
      <div className="centered">
        <div className="relative">
          <img
            src="/src/assets/pattern-circles.svg"
            alt=""
            className="absolute z-[500] centered"
          />
          <div>
            <h1 className="text-[25px] font-bold mb-2">
              Simple, traffic-based pricing
            </h1>
            <p className="text-[#8a91a3] text-[15px]">
              Sign-up for our 30-day trial. No credit required.
            </p>
          </div>
        </div>

        <Card />
      </div>
    </main>
  );
}

export default App;
