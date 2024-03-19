import { Rating } from '@mui/material';
import IProfissional from '../../../types/IProfissional';
import styled from 'styled-components';

const ContainerEstilizado = styled.div`
	flex: 40%;
	max-width: 100%;
	background-color: #fff;
	padding: 1em;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	color: var(--cinza);
	margin: 1em 2em 1em;
  border-radius: 8px;
`;

const ListaEstilizada = styled.ul`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	padding: 0;
`;

const ItemEstilizado = styled.li`
	list-style-type: none;
`;

const ImagemEstilizada = styled.img`
	border-radius: 100%;
	width: 64px;
	object-fit: cover;
	height: 64px;
	border: 2px solid var(--azul-claro);
	margin-right: 1em;
`;

const ItemInformacoesEstilizado = styled(ItemEstilizado)`
	flex-grow: 1;
`;

const ParagrafoNomeEstilizado = styled.p`
	font-weight: 700;
`;
const ParagrafoEstilizado = styled.p`
	margin: 0.5em 0;
	font-size: 14px;
`;
export function Card({ profissional }: { profissional: IProfissional }) {
	return (
		<ContainerEstilizado>
			<ListaEstilizada>
				<ItemEstilizado>
					<ImagemEstilizada
						src={profissional.imagem}
						alt={`Foto de perfil do profissional ${profissional.nome}`}
					/>
				</ItemEstilizado>
				<ItemInformacoesEstilizado>
					<ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
					<ParagrafoEstilizado>
						{profissional.especialidade}
					</ParagrafoEstilizado>
				</ItemInformacoesEstilizado>
				<ItemEstilizado>
					<Rating
						name="simple-controlled"
						value={profissional.nota}
						readOnly={true}
					/>
				</ItemEstilizado>
			</ListaEstilizada>
		</ContainerEstilizado>
	);
}