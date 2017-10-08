import {
  Component,
  Inject,
  OnInit
} from '@angular/core'
import {
  MD_DIALOG_DATA,
  MdDialogRef
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
    private dialogRef: MdDialogRef<ForgotPasswordComponent>,
    @Inject(MD_DIALOG_DATA) private data: any) {
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
