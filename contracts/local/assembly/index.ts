import {context, ContractPromise, logging, u128} from "near-sdk-as";


const CONTRACT_NAME = includeBytes("../../remote/neardev/dev-account")

const ONE_TERAGAS = 1000000000000
const FIVE_TERAGAS = 5 * ONE_TERAGAS


export function call_hello_world(): void {
	const data = CONTRACT_NAME

	let promise = ContractPromise.create(
		String.UTF8.decodeUnsafe(changetype<usize>(data), data.length),
		"hello_world",
		'{}',
		FIVE_TERAGAS,
		u128.Zero
	)
	promise.returnAsResult()
}


