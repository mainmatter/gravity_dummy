import lodash from "lodash";
import { utils } from "./utils";

utils();

console.log(lodash.merge({ a: 1 }, { b: 3 }, { c: 4 }, { d: 5 }));
