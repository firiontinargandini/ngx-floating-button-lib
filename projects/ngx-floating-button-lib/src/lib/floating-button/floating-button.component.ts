import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent {
  @Input() type: 'default' | 'primary' = 'default';
  @Input() shape: 'circle' | 'square' = 'circle';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
