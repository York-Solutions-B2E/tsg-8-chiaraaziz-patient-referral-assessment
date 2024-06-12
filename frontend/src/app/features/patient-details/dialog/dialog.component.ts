import { Component } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialog,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Patient } from '../../../types';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  

  patient:Patient = {} as Patient;


  constructor(public dialog: MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogBoxDisplay, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  

}

@Component({
  selector: 'dialog-box-display',
  templateUrl: 'dialog-box-display.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, RouterLink],
})
export class DialogBoxDisplay{
  constructor(public dialogRef: MatDialogRef<DialogBoxDisplay>) {}
}
