const debug = require('debug')('auth')
const passport = require('passport')
const Castle = require('APP/db/models/castle')
const castlesRoute = require('express').Router()

castlesRoute.get('/',function(req,res,next) {
    Castle.findAll({})
        .then(allCastles => res.send(allCastles))
        .catch(next);
})

castlesRoute.get('/:castleId',function(req,res,next) {
    Castle.findOne({
        id: req.params.castleId
    })
        .then(foundCastle => res.send(foundCastle))
        .catch(next);
})

castlesRoute.post('/', (req, res, next) => {
  console.log('castlesRoute post', req.body)
  Castle.create(req.body)
    .then(newCastle => {
      console.log('after create', newCastle)
      res.json(newCastle)
    })
    .catch(next)
})

module.exports = castlesRoute

