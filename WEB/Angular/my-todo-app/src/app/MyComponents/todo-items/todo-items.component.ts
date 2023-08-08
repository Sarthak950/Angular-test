import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
    selector: 'app-todo-items',
    templateUrl: './todo-items.component.html',
    styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

    @Input() todo:Todo;
    @Output() todoDelete: EventEmitter<Todo> =  new EventEmitter();
    @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

    onClick(todo: Todo){
        this.todoDelete.emit(todo)
        console.log(todo)
    }

    constructor(){
        this.todo = new Todo();
    }

    onCheckBoxClick(todo: Todo){
        // console.log(todo)
        this.todoCheckBox.emit(todo)
        // this.todo.active = !this.todo.active
    }
}
