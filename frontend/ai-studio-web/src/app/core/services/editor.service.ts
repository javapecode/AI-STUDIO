import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { EditorAction } from '../../shared/interfaces/editor-action.interface';
import { HistoryService } from './history.service';


@Injectable({
    providedIn: 'root'
})
export class EditorService {
    private actionSubject = new Subject<EditorAction>();

    action$ = this.actionSubject.asObservable();
    constructor(private historyService: HistoryService) { }
    dispatch(action: EditorAction): void {

        if (action.type !== 'UNDO' && action.type !== 'REDO') {

            this.historyService.addAction(action);

        }

        this.actionSubject.next(action);

    }



    undo(): void {
        const action = this.historyService.undo();

        if (action) {

            this.actionSubject.next({
                type: 'UNDO', payload: action

            });
        }
    }



    redo(): void {
        const action = this.historyService.redo();
        if (action) {
            this.actionSubject.next({
                type: 'REDO',
                payload: action

            });

        }
    }

}