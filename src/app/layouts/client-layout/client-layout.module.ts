import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ClientLayoutComponent } from './client-layout.component';
import { ClientLayoutRoutes} from './client-layout-routing';
import { NutritionBoardComponent } from '../../nutrition-board/nutrition-board.component';


@NgModule({
  declarations: [
    ClientLayoutComponent,
    NutritionBoardComponent
  ],
  imports: [
    NgbModule,
    ToastrModule.forRoot(),
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes)
  ]
})
export class ClientLayoutModule { }
