import styles from './card.module.css';
export default async function Card() {
	const cards = await fetch('http://localhost:5078/api').then(res => res.json());
	console.log(cards);

	return (

		<div className={styles.container}>
			<h3>Lista de Usuários</h3>
			{cards?.map((card) => (
				<div key={card.id} className={styles.card}>
					<p><strong>Nome: </strong>{card.nome}</p>
					<p><strong>Cpf: </strong>{card.cpf}</p>
					<p><strong>Telefone: </strong>{card.telefone}</p>
					<p><strong>Email: </strong>{card.email}</p>

				</div>
			))}
		</div>
	)
}
