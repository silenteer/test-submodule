import type { Submodule } from "@submodule/cli"

export default <Submodule> {
  async adaptorFn({ router }) {
    console.log(await Promise.all(Object.keys(router)
      .map(key => {
        return router[key].default()
      })))
  } 
}