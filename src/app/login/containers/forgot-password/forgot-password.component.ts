import {
  Component,
  Inject,
  OnInit
} from '@angular/core'
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material'
import {
  FormControl,
  Validators
} from '@angular/forms'

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: FormControl
  error = ''

  constructor(
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    this.email = new FormControl(this.data.email, [Validators.required, Validators.email])
  }

  onOk() {
    if (this.email.valid) {
      this.dialogRef.close(this.email.value)
    }
  }
}
