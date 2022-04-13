import { createContext } from "react";
import "./App.scss";
import CalContainer from "./components/CalendarContainer";

const globalStore = {
  selectedDay: 0,
  updateSelectedValue: (value: number): void => {
    globalStore.selectedDay = value;
  },
};

export const globalStoreContext = createContext(globalStore);

function App() {
  return (
    <globalStoreContext.Provider value={globalStore}>
      <div className="App">
        <CalContainer />
      </div>
    </globalStoreContext.Provider>
  );
}

export default App;
