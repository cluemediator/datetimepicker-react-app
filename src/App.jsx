import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h2>How to add a DateTime picker in React - <a href="https://www.cluemediator.com" target='_blank'>Clue Mediator</a></h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select a datetime"
        className='dp-style'
        dateFormat="MMMM d, yyyy h:mm aa"
        showIcon
        showTimeSelect
        timeIntervals={15}
      />
      <h4>Datetime: {selectedDate?.toLocaleString('en-GB', { hour12: true }) || '-'}</h4>
    </div>
  )
}

export default App
