import IConsulta from '../../types/IConsulta';
import IProfissional from '../../types/IProfissional';

interface Props {
	profissionais: IProfissional[] | null;
	consultas: IConsulta[] | null;
}

interface IDados {
	nome: string;
	consultas: number;
}

export const useDadosGrafico = ({ profissionais, consultas }: Props) => {
	let dados: Array<IDados> = [];

	if (consultas && profissionais) {
		dados = profissionais.map((profissional) => ({
			nome: profissional.nome,
			consultas: consultas.filter((consulta) =>
				consulta.profissional.some((p) => p.nome === profissional.nome)
			).length,
		}));
	}
	return dados;
};
