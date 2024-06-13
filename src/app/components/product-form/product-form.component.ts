import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode: boolean = false;
  productId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) //private foodItemService: FoodItemService
  {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      restaurantId: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = +params['id'];
        // this.foodItemService.getFoodItemById(this.productId).subscribe(product => {
        //     this.productForm.patchValue(product);
        // });
      }
    });
  }

  onSubmit(): void {
    if (this.productForm!.valid) {
      if (this.isEditMode) {
        // this.foodItemService.updateFoodItem(this.productId, this.productForm.value).subscribe(() => {
        //     this.router.navigate(['/food-items']);
        // });
      } else {
        // this.foodItemService.addFoodItem(this.productForm.value).subscribe(() => {
        //     this.router.navigate(['/food-items']);
        // });
      }
    }
  }
}
