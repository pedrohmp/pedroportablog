export const PostList = () => {

	const texts = [
		{
			title: 'How to create a custom random Id with Prosgres',
			description: 'Helper function for creating a custom random ID like a9Kl12'
		},
		{
			title: 'Web3 - What to build?',
		},
		{
			title: 'React Suspense - in the right way',
		},
		{
			title: 'How to get the first job',
		},
	]

	return (
		<>
			<div className="flex items-center justify-center  mt-2 flex-col divide-y divide-gray-300">
				{texts.map((text) =>
					<div key={text.title} className="mb-4 w-1/2 max-w-xl pt-8">
						<h3 className="mb-1">{text.title}</h3>
						<p className="mb-2 text-gray-700">Helper function for creating a custom random ID like a9Kl12</p>

						<div className="flex justify-between items-center text-gray-500 text-sm">
							<p>February 14, 2023 •  45 views</p>

							<p>Typescript • 1 min read</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}