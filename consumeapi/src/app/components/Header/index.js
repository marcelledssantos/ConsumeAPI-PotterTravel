import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<img src="/aviao.png" alt="logo" />
            <h5>Potter Travel</h5>
			<ul>
				<li>
					<Link href="/RotaUm">Painel Clientes</Link>
				</li>
				<li>
					<Link href="/RotaDois">Destinos</Link>
				</li>
				<li>
					<Link href="/RotaTres">Fale Conosco</Link>
				</li>
			</ul>
		</header>
	)
}