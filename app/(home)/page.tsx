import { ptBR } from "date-fns/locale";
import Header from "../_components/haeder";
import { format } from "date-fns"
import Search from "./_component/search";
export default function Home() {
  return (
   <div>
      <Header></Header>
      <div className="px-5 pt-5">
        <h2 className="text-xl font">Olá, Mikael</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM",{locale: ptBR} )}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search></Search>
      </div>
   </div>
  );
}
