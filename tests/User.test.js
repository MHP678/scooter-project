const User = require('../src/User')

// User tests here
// test username
describe('username function' , () => {

    test('checks if username is correct', () => {
        const user = new User('Max', 'password123', 18);
        expect(user.username).toBe('Max'); 
    })

})
// test password
describe('password function' , () => {

    test('checks if password is correct' , () => {
        const user = new User('Max', 'password123', 18);
        expect(user.password).toBe('password123'); 
    })
})
// test age
describe('age function' , () => {

    test('checks if age is correct' , () => {
        const user = new User('Max', 'password123', 18);
        expect(user.age).toBe(18);         
    })
})
// test login
describe('login function' , () => {

    test('checks if login is successful' , () => {
        
    })
})
// test logout
describe('password function' , () => {

    test('checks if logout is successful' , () => {
        
    })
})

