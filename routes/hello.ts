import type { Fn } from "../submodule.types";

export default <Fn<{}>> async function hello() {
  return "world"
}