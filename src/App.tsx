import './App.css';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Rodape } from './components/Rodape';
import { Titulo } from './components/Titulo';

export function App() {
	return (
		<>
			<Cabecalho />
			<Container>
				<Titulo children={`Área administrativa`}></Titulo>
			</Container>
			<Rodape></Rodape>
		</>
	);
}
