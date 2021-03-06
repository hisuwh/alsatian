import { TapAssertion } from "./external/tap-parser";

export interface Results {
	ok: boolean;
	pass: number;
	fail: number;
	ignore: number;
	failures: Array<TapAssertion>;
}
