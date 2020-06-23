// console.log('Hello word')
// new Promise(resolve => {
//   setTimeout(() => {
//     resolve('world')
//   }, 2000)
// })
//   .then(value => {
//     console.log(value)
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('T')
//       }, 2000)
//     })
//   })
//   .then(value => {
//     console.log(value + ' wwe')
//   })

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('holle word')
    resolve('name: ')
  }, 1000)
})

setTimeout(() => {
  promise.then(value => {
    console.log(value + 'wordt')
  })
}, 3000)

