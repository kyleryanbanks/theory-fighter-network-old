import { experimentOn } from 'component-lab'

export default experimentOn('Library Speed Dial')
  .case('Basic', {
    context: {
      onAddNotebook() {
        console.log('addNotebook emitted.')
      },
      onAddShelf() {
        console.log('addShelf emitted.')
      },
      onAddTeam() {
        console.log('addTeam emitted.')
      }
    },
    template: `
      <tfn-lib-speed-dial
        (addNotebook)='onAddNotebook($event)'
        (addShelf)='onAddShelf($event)'
        (addTeam)='onAddTeam($event)'></tfn-lib-speed-dial>
    `
  })
