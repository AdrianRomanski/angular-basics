import {Component, OnInit} from '@angular/core';
import {Donut} from "../../model/donut.model";
import {DonutService} from "../../services/donut.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DonutFormComponent} from "../../components/donut-form/donut-form.component";

@Component({
  standalone: true,
  imports: [DonutFormComponent],
  providers: [DonutService],
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form [donut]=donut
                      [isEdit]="isEdit"
                      (create)="onCreate($event)"
                      (update)="onUpdate($event)"
                      (delete)="onDelete($event)">
      </app-donut-form>
    </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit{
  donut!: Donut;
  isEdit!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private donutService: DonutService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.isEdit = this.route.snapshot.data['isEdit'];
    this.donutService
       .readOne(id)
       .subscribe((donut) => this.donut = donut);
  }

  onCreate(donut: Donut) {
    this.donutService
      .create(donut)
      .subscribe((createdDonut: Donut) =>
        this.router.navigate(['admin', 'donuts', createdDonut.id]));
  }

  onUpdate(donut: Donut) {
    this.donutService
      .update(donut)
      .subscribe({
        next: () => this.router.navigate(['admin']),
        error: (err) => console.log('onUpdate error', err),
      });
  }

  onDelete(donut: Donut) {
    this.donutService
      .delete(donut)
      .subscribe(() => this.router.navigate(['admin']));
  }
}
