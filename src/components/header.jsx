import { Category } from "./Category";
import Input from "./Input";


export default function Header(props) {
  const Sync = 
  return (
    <header className="w-full flex flex-col justify-center items-center gap-2">
      <h1>Galeria de Fotos</h1>
      <Input />
      <Category />
    </header>
  );
}
