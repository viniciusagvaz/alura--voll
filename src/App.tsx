import './App.css';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Grafico } from './components/Grafico';
import { Rodape } from './components/Rodape';
import { Tabela } from './components/Tabela';
import { Titulo } from './components/Titulo';
import { useDadosConsulta } from './useDadosConsulta';
import { useDadosProfissional } from './useDadosProfissional';

export function App() {
	const { dados: consultas, erro: consultasErro } = useDadosConsulta();
	const { dados: profissionais, erro: profissionaisErro } =
		useDadosProfissional();

	if (consultasErro || profissionaisErro) {
		console.log('Ocorreu um erro na requisição');
	}

	return (
		<>
			<Cabecalho />
			<Container>
				<Titulo children={`Área administrativa`}></Titulo>
				<Tabela consultas={consultas}></Tabela>
				<Grafico consultas={consultas} profissionais={profissionais}/>
			</Container>
			<Rodape></Rodape>
		</>
	);
}
