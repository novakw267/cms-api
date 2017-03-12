'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')
.get('/userblogs', 'blogs#indexSignedIn')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })
.resources('blogs', { only: ['index','show', 'create','update', 'destroy'] })
.resources('pages', { only: ['create', 'index', 'show', 'update', 'destroy']});
// all routes created
