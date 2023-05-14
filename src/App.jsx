import { useState, useEffect } from 'react';
import './App.css';
import Calendar from 'react-calendar';
import Modal from './Modal';

const dataAtual = new Date();
const daquiAUmMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth()+1, dataAtual.getDate());

export default function App() {
	const [dataPrazo, setDataPrazo] = useState(dataAtual);
	
  return <Calendar 
		onChange={setDataPrazo} 
		value={dataPrazo} 
		calendarType='US'
		showNeighboringMonth={false} 
		navigationLabel={({ label }) => (label.split(' ')[0].charAt(0).toUpperCase() + label.split(' ')[0].slice(1))}
		formatShortWeekday={(locale, dd) => ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][dd.getDay()]}
		minDate={dataAtual} 
		maxDate={daquiAUmMes} 
		minDetail="year"
		tileDisabled={({date}) => !date.getDay()}
		/>
}
