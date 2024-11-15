import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

export default function HomePage() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}