export type Update = {
	property: string
	v: any
}

export const updateReported = ({ endpoint }: { endpoint: string }) => async ({
	property,
	v,
}: Update): Promise<void> =>
	fetch(`${endpoint}/update`, {
		method: 'POST',
		body: JSON.stringify({
			[property]: {
				v: v,
				ts: Date.now(),
			},
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		console.log('updated reported', property, v)
		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`)
		}
	})
