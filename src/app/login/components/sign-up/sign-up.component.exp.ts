import { experimentOn } from 'component-lab'

const commonContext = {
  onSignUp(event) {
    console.group('Sign Up')
    console.log('Event', event)
    console.groupEnd()
  }
}

export default experimentOn('Sign Up Form')
.case('Basic', {
  context: commonContext,
  template: `
    <tfn-sign-up
      (signUp)="onSignUp($event)"></tfn-sign-up>
  `
})
  .case('Some Error', {
    context: commonContext,
    template: `
      <tfn-sign-up
        (signUp)="onSignUp($event)"
        error="This error was passed in."></tfn-sign-up>
    `
  })
