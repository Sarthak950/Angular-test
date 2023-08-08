import { Component } from '@angular/core';
import { Todo } from "../../Todo"


@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    todos:Todo[]; 
    localTtem:string | null ;

    constructor(){

        this.localTtem = localStorage.getItem("Sarthak'sTodo")

        if(this.localTtem == null){
            this.todos =[]
        }else{
            this.todos = JSON.parse(this.localTtem)
        }
    }

    deleteTodo(todo: Todo){
        console.log(todo)
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        console.log(`is deleted`)
        localStorage.setItem("Sarthak'sTodo", JSON.stringify(this.todos))
    }
    addTodo( todo: Todo){
        //sort the todo's array

        todo.sno = this.todos.length + 1;

        this.todos.push(todo);
        localStorage.setItem("Sarthak'sTodo", JSON.stringify(this.todos))
    }
    
    saveCheckBox(todo: Todo){
        this.todos.forEach ((element, index) => {
            if(element.sno == todo.sno){
                this.todos[index].active = !this.todos[index].active
            }
        });
        localStorage.setItem("Sarthak'sTodo", JSON.stringify(this.todos))
        console.log(`event listened on ${todo.sno}`)
    }


}
