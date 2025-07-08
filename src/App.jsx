import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="w-full" style={{ maxWidth: "1440px" }}>
      {/* Header Section */}
      <Header />

      {/* Main Layout */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
