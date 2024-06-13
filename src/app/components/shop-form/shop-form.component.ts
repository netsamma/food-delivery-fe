import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from '../../interfaces/shop';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-shop-form',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
    templateUrl: './shop-form.component.html',
    styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {
    shopForm!: FormGroup;
    isEditMode: boolean = false;
    shopId!: number;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.shopForm = this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
        });

        this.route.paramMap.subscribe(params => {
            // this.shopId = +params.get('id');
            this.isEditMode = !!this.shopId;

            if (this.isEditMode) {
                // this.shopService.getShopById(this.shopId).subscribe(data => {
                //     this.shopForm.patchValue(data);
                // });
            }
        });
    }

    onSubmit(): void {
        if (this.shopForm.valid) {
            const shop: Shop = this.shopForm.value;

            if (this.isEditMode) {
                shop.id = this.shopId;
                // this.shopService.updateShop(shop).subscribe(() => {
                //     this.router.navigate(['/shops']);
                // });
            } else {
                // this.shopService.addShop(shop).subscribe(() => {
                //     this.router.navigate(['/shops']);
                // });
            }
        }
    }
}
