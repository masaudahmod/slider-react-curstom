import Slider from "./Slider";
import "./App.css";

const App = () => {
  return (
    <div className="grid place-items-center h-screen bg-slate-600">
      <Slider />
      <h2 className="author text-2xl md:text-4xl">
        &lt;<span className="text-gradient">masaudAhmod</span> /&gt;
      </h2>
    </div>
  );
};

export default App;
