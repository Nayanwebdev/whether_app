import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import WeatherApp from "./WeatherApp";

function App() {
  const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  return (
    <div className="whether-block-main">
      <WeatherApp />
    </div>
  );
}

export default App;
