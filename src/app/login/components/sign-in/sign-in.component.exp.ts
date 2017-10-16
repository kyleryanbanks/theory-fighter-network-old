import { experimentOn } from 'component-lab'

const commonContext = {
  onSignIn(event) {
    console.group('Sign In')
    console.log('Event', event)
    console.groupEnd()
  },
  onForgotPassword(event) {
    console.group('Forgot Password')
    console.log('Event', event)
    console.groupEnd()
  }
}

export default experimentOn('Sign In Form')
  .case('Basic', {
    context: commonContext,
    template: `
      <tfn-sign-in
      (signIn)="onSignIn($event)"
      (forgotPassword)="onForgotPassword($event)"></tfn-sign-in>
    `
  })
  .case('Some Error', {
    context: commonContext,
    template: `
      <tfn-sign-in
        (signIn)="onSignIn($event)"
        (forgotPassword)="onForgotPassword($event)"
        error="This error was passed in."></tfn-sign-in>
    `
  })
