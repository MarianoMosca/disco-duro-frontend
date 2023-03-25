import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1>My web drive</h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
