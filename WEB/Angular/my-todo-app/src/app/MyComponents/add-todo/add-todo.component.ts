import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

    
    title: string = "";
    desc: string = "";
    sno: number = 0;

    @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
    @Output() checkBoxSave: EventEmitter<Todo> = new EventEmitter();
    
    onSubmit() {
        const todo:Todo= {
            sno: this.sno,
            title: this.title,
            desc: this.desc,
            active: true
        }
        // console.log(this.title, this.desc)
        this.todoAdd.emit(todo)
        this.checkBoxSave.emit(todo)
    }


}
