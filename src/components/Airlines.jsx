export default function Airlines(props) {
	return (
		<div>
			<p>{props.id}</p>
			<a href={props.site}>
				<img src={props.logoURL} alt={props.name} />
				<p>{props.name}</p>
			</a>
		</div>
	);
}
