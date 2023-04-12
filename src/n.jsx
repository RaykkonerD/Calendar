import { useState } from 'react';

export default function n(){
	return (
		<div style={styles.back}>
			<div style={styles}>
				<span>Horário para prova da peça:</span>
				<span>
					<button>Manhã: 8:30</button>
					<button>Tarde: 14:30</button>
				</span>
			</div>
		</div>
	)
}

const styles = {
	back: {
		display: 'block',
		backgroundColor: 'red'
	}
};