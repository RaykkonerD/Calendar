import { useState } from 'react';

export default function Modal(props) {
	const [selected, setSelected] = useState("manha");
	const [hidden, setHidden] = useState(props.mostrar)
	
	return (
		<div style={{
		display: (hidden?'none':'flex'),
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100vw',
		justifyContent: 'center',
		alignItems: 'center'
	}} onClick={() => setHidden(true)}>
		<div style={styles.modal}>
			<span style={styles.titulo}>Marque um horário para prova da peça:</span>
			<div
				style={styles.toggle}
				value={selected}
				onChange={e => setSelected(e.value)}
>
  <button value="manha" onClick={(e) => setSelected(e.target.value)} style={selected=='manha'?styles.selected:styles.unSelected}>Manhã: 8:30</button>
  <button value="tarde" onClick={(e) => setSelected(e.target.value)} style={selected=='tarde'?styles.selected:styles.unSelected}>Tarde: 14:30</button>
</div>
		</div>
		</div>
	)
}


const styles = {
	modal: {
		boxShadow: '0 0 300px #000',
		width: '80vw',
		height: '50vh',
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 50,
		boxSizing: 'border-box',
		textAlign: 'center',
		color: '#e82727'
	},
	toggle: {
		flexDirection: 'row',
		marginTop: 20,
		background: 'none',
		
	},
	selected: {
		backgroundColor: '#e82727',
		border: '1px solid #e82727',
		color: '#fff'
	},
  unSelected: {
		border: '1px solid #e82727',
		backgroundColor: '#fff',
		color: '#e82727'
	}
}