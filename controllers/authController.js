const User = require('../models/AuthModel')

exports.login = function(req, res) {
  let user = new User(req.body)
    user.login().then(function (result) {
    res.redirect('/admin')
    // res.send(result)
    }).catch(function (e) {
    res.send(e)
  })
}

exports.logout = function() {
  
}
