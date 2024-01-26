import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  @Output()
  closeModal = new EventEmitter();

  close() {
    this.closeModal.emit();
  }
}
