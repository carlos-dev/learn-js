function User() {
  this.nome = 'car'
  this.fn = () => {
    return 'ok'
  }
}

const u = new User()

User.prototype.send = () => {
  return 'send email'
}
console.log(Array.prototype)

console.log(User.g)