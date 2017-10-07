import { experimentOn } from 'component-lab'

export default experimentOn('Sign Up Form')
  .case('Some Error', {
    template: `
      <tfn-sign-up error="Some Error"></tfn-sign-up>
    `
  })
  .case('No Error', {
    template: `
      <tfn-sign-up></tfn-sign-up>
    `
  })
