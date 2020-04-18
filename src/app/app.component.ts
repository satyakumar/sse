import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _gridAndActions = Array.from({length: 4}, (_, value) => value + 1);
  grids: Array<Number> = this._gridAndActions; // Used to show components based on defined Array
  toggleGrids: Set<Number> = new Set(this._gridAndActions); // Used to toggle components by playing around the Array
  gridActions: Array<Number> = this._gridAndActions; // Used to show the Buttons on Child components

  updateGridSequence(sequence) { 
    this.toggleGrids.has(sequence) ? this.toggleGrids.delete(sequence) : this.toggleGrids.add(sequence);
  }
  isGridShow(gridSequence) {
    return this.toggleGrids.has(gridSequence);
  }
}
