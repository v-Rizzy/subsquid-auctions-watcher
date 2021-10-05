import { TypeRegistry } from "@polkadot/types";
const typeRegistry = new TypeRegistry();

export { typeRegistry };

export * from "./auctions";
export * from "./crowdloan";
export * from "./slots";
export * from "./registrar";
