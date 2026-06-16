import "./App.css";
import Portfolio from "@/components/portfolio/Portfolio";
import ThemeProvider from "@/context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
