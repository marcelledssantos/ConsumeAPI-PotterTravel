import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<img src="/aviao.png" alt="logo" />
            <h5>Potter Travel</h5>
			<ul>
				<li>
					<Link href="/RotaUm">Destinos</Link>
				</li>
				<li>
					<Link href="/RotaDois">Promoções</Link>
				</li>
				<li>
					<Link href="/RotaTres">List</Link>
				</li>
			</ul>
		</header>
	)
}