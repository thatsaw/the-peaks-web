import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Default.css";

export function Default() {
  const navigation = useNavigation();

  return (
    <div id="app">
      <Header />
      <main>
        <div
          id="outlet"
          className={navigation.state === "loading" ? "loading" : ""}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
