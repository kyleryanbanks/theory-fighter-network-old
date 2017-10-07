import { experimentOn } from 'component-lab'

export default experimentOn('Sign In Form')
  .case('Some Error', {
    template: `
      <tfn-sign-in error="Some Error"></tfn-sign-in>
    `
  })
  .case('No Error', {
    template: `
      <tfn-sign-in></tfn-sign-in>
    `
  })
