import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="w-full min-w-[560px]">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto flex px-4 md:px-6">
        <Sidebar />
        <div className="flex-1">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
