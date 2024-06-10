import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.css'
})
export class ShopDetailsComponent implements OnInit, OnDestroy{

  id!: number;
  denominazione!: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.denominazione = params['denominazione'];

       console.log(this.denominazione);
       

       // In a real app: dispatch action to load the details here.


    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
