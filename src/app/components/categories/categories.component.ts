import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(private __cateService: CategoriesService) { }
  categories: Array<Category> = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.getAllCate();
  }

  /* ------------------------------------------------------- */
  /*                  Get Categories From Api                */
  /* ------------------------------------------------------- */
  getAllCate() {
    this.subscription = this.__cateService
      .getAllCategories()
      .subscribe((cate) => {
        this.categories = cate;
        console.log(this.categories);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
