import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() title: string = 'I\'m a nested component';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes in child: ' + JSON.stringify(changes));
  }
}
