import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container">
      <p className="title">Agendamento de reunião</p>

      <p className="description mt-2">Confira agora mesmo as salas e</p>
      <p className="description">
        horarios disponiveis para agendar uma reunião
      </p>

      <select className="custom-select" name="" id="">
        <option value="">E-mail</option>
        <option value="">E-mail</option>
        <option value="">E-mail</option>
        <option value="">E-mail</option>
      </select>
    </div>
  );
};

export default Home;
