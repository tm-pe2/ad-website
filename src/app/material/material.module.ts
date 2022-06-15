import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
import{MatDialogModule} from '@angular/material/dialog';
import{MatSortModule} from '@angular/material/sort';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatTooltipModule} from '@angular/material/tooltip';
import{MatTableModule} from '@angular/material/table';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import{MatSelectModule} from '@angular/material/select';
import{MatRadioModule} from '@angular/material/radio';
import{MatInputModule} from '@angular/material/input';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatStepperModule} from '@angular/material/stepper';
import{MatTabsModule} from '@angular/material/tabs';
import{MatCardModule} from '@angular/material/card';
import{MatExpansionModule} from '@angular/material/expansion';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatDividerModule} from '@angular/material/divider';
import{MatListModule} from '@angular/material/list';
import{MatMenuModule} from '@angular/material/menu';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatBadgeModule} from '@angular/material/badge';

const material=[
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule
];

@NgModule({
  imports: [ material],
  exports: [material],
})
export class MaterialModule { }