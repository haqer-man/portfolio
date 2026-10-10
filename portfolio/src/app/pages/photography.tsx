import "@/components/Navbar.module.css";
import photographyStyles from '/src/app/pages/photography.css?url';
import Navbar from "@/components/Navbar";

export function Photography() {
	return (
		<>
			<link rel="stylesheet" href={photographyStyles} />
			<Navbar />

			<br />
			<br />

		<main className="content">
			<h1>Title</h1>
			<p>Hero card</p>
		</main>
		</>
	);
}