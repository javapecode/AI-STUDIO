import { Injectable } from '@angular/core';
import { EditorCommand } from '../../shared/interfaces/editor-command.interface';


@Injectable({
  providedIn:'root'
})
export class CommandService {


  private undoStack: EditorCommand[] = [];

  private redoStack: EditorCommand[] = [];



  execute(command: EditorCommand){


    command.execute();


    this.undoStack.push(command);


    this.redoStack = [];


  }



  undo(){


    const command = this.undoStack.pop();


    if(command){

      command.undo();

      this.redoStack.push(command);

    }


  }



  redo(){


    const command = this.redoStack.pop();


    if(command){

      command.execute();

      this.undoStack.push(command);

    }


  }


}