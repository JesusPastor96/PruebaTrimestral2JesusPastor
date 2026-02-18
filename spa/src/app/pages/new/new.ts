import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {
  private readonly _seriesService = inject(SeriesService);
  private readonly _router = inject(Router);
  private readonly _fb = inject(FormBuilder);

  form = this._fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    channel: ['', Validators.required],
    rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
  });

  onSubmit() {
    if (this.form.valid) {
      this._seriesService.create(this.form.value as any).subscribe((response) => {
        alert(`Serie creada con ID: ${response.id}`);
        this._router.navigate(['/home']);
      });
    }
  }
}