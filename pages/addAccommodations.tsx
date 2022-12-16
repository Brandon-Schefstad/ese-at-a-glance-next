const accommodations = require('../src/helpers/accommodations.js')
const addAccommodations = () => {
	console.log(accommodations[0])
	const headings = ['Presentation', 'Response', 'Setting', 'Scheduling']
	// const presentationTypes = typeNames[0]
	// const responseTypes = typeNames[1]
	// const schedulingTypes = typeNames[2]
	// const settingTypes = types[3]
	// console.log(presentationTypes)
	// console.log(responseTypes)
	return (
		<div>
			<h1> Now Send To DB</h1>
			<a href="/addGoals"> Go To Next Page</a>
			<form action="/api/student/addAccommodations" method="POST">
				<label htmlFor="ID"></label>
				<input type="text" name="ID" />

				{headings.map((heading, index1) => {
					return (
						<>
							<h1>{heading}</h1>
							{accommodations.map((group, index2) => {
								return Object.keys(group).map((name) => {
									return (
										<>
											<h2>{name}</h2>
											{group[name].map((entry) => {
												return (
													<>
														<label htmlFor={entry}>{entry}</label>
														<input type="checkbox" name={entry} />
													</>
												)
											})}
										</>
									)
								})[0]
							})}
						</>
					)
				})}
				<input type="submit" value="GOGOGO" />
			</form>
		</div>
	)
}

export default addAccommodations
