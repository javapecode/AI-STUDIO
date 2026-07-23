import { Injectable } from '@angular/core';
import { HistoryAction } from '../../shared/interfaces/history-action.interface';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {


  private undoStack: HistoryAction[] = [];

  private redoStack: HistoryAction[] = [];



  addAction(action: HistoryAction): void {

    this.undoStack.push(action);

    this.redoStack = [];

  }



  undo(): HistoryAction | null {

    const action = this.undoStack.pop();


    if(action){

      this.redoStack.push(action);

      return action;

    }


    return null;

  }



  redo(): HistoryAction | null {

    const action = this.redoStack.pop();


    if(action){

      this.undoStack.push(action);

      return action;

    }


    return null;

  }



  canUndo(): boolean {

    return this.undoStack.length > 0;

  }



  canRedo(): boolean {

    return this.redoStack.length > 0;

  }


}