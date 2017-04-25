import { autorun, observable } from "mobx"

export class loginStore {
    @observable username = "asdasdas"
    @observable password = "asdasdadsa"
}

export default loginStore

autorun(() => {
})
