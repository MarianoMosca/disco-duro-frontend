import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1>Disco duro virtual</h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};
