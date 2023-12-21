import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: `
    <form [form]="form">
      <div><input type="text" formControlName="search" /></div>
    </form>
  `,
})
export class SearchComponent {
  form: FormGroup = new FormGroup({
    search: new FormControl(''),
    // Room for more of course!
  });

  @Output() searchChange = this.form.valueChanges
    .pipe
    // Pipe all the things!
    ();
}
