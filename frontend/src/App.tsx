import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import NotificationButton from "./components/NotificationButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmetaContainer">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
