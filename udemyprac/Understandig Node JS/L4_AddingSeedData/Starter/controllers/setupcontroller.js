var Menu = require('../models/todoModel');

module.exports = function(app) {

    app.get('./api/setup/setupTodos', function(req, res) {

        // seed db
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Walk Dogs',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Cook Breakfast',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Play Apex',
                isDone: false,
                hasAttachment: false
            }
        ];
        starterTodos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}