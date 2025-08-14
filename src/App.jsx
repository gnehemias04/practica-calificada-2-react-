import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Api from "./UseApi";

function App() {
  const img = Api();
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <Main array={img} />
        <Footer />
      </div>
    </>
  );
}

export default App;
