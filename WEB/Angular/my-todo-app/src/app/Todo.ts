export class Todo{
    sno: number
    title: string
    desc: string
    active: boolean


    constructor(){
        this.sno = -1
        this.title = ""
        this.desc = ""
        this.active = false
    }
}
