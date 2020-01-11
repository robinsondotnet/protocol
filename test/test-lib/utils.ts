export function validateErrorMessage(
	result: Error,
	errorMessage: string,
	reason = true
): void {
	const message = reason ? `Reason given: ${errorMessage}` : errorMessage
	expect(result.message).to.include(message)
}

export function getPolicyAddress(
	transaction: Truffle.TransactionResponse
): string {
	const tmp = transaction.logs.filter(
		(e: {event: string}) => e.event === 'Create'
	)[0].args._policy
	return tmp
}

export function getMarketAddress(
	transaction: Truffle.TransactionResponse
): string {
	const tmp = transaction.logs.filter(
		(e: {event: string}) => e.event === 'Create'
	)[0].args._market
	return tmp
}

export function getMetricsAddress(
	transaction: Truffle.TransactionResponse
): string {
	const tmp = transaction.logs.filter(
		(e: {event: string}) => e.event === 'Create'
	)[0].args._metrics
	return tmp
}

export function getPropertyAddress(
	transaction: Truffle.TransactionResponse
): string {
	const tmp = transaction.logs.filter(
		(e: {event: string}) => e.event === 'Create'
	)[0].args._property
	return tmp
}

export const DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000000'
