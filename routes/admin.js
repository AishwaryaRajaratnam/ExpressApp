var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');

/* GET users listing. */
router.route("/")
.get(function(req, res){

  // var movieVar = new Movie();
  //  movieVar.imdbID = req.params.movieId;
    Admin.find({}, function(err,allAdmins){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("All admins in MongoDB fetched")
        var adminMap = {};

        allAdmins.forEach(function(ad) {
          adminMap[ad._id] = ad;
        });

        res.send(adminMap);
      }
    })

});

router.route("/add")
.post(function(req, res){
  if(req.body){
    var adminVar = new Admin(req.body);
    /*----alternativly
    var userVar = new User();
    userVar.username=req.body.username;
    userVar.password=req.body.password;
    */
    adminVar.save(function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("admin inserted in Mongo")
        res.send("admin inserted");
      }
    })
  }
});


module.exports = router;
