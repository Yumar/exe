import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ClientLayoutRoutes} from './client-layout-routing';
import { NutritionBoardComponent } from '../../nutrition-board/nutrition-board.component';


@NgModule({
  declarations: [
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
