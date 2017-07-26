/**
 * Created by siro on 18/07/17.
 */
var users = require('./users')

exports.assignRoutes = function (app) {
    app.get('/users', users.getUsers);
    app.post('/users', users.addUser);
    app.put('/users/:userId', users.updateUser);
    app.delete('/users/:userId', users.deleteUser);
}