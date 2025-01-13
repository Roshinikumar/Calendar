import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { defaultData } from './dataSource';
import './App.css';
const App = () => {
  const eventSettings = { dataSource: defaultData };

  return (
    <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  ); 
};

// Check if the element exists before using createRoot
const rootElement = document.getElementById('schedule');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Could not find the element with id 'schedule'");
}

export default App;