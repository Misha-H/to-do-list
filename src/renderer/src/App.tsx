import { Searchbar, TaskGroup } from './components';

function App(): JSX.Element {
  return (
    <div className="app">
      <h1>Reminders</h1>

      <Searchbar />

      <TaskGroup />
    </div>
  );
}

export default App;
