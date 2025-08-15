import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Api from "./UseApi";

function App() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("animales");
  const [img, setImg] = useState([]);
  console.log(categories);
  console.log(search);
  return (
    <>
      <div className="w-full h-full">
        <Api search={search || categories} setImg={setImg} />
        <Header
          search={search}
          setSearch={setSearch}
          categories={categories}
          setCategories={setCategories}
        />
        <Main array={img} />
        <Footer />
      </div>
    </>
  );
}

export default App;
