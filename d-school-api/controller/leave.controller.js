const db =  require("../models");
const Leave = db.leave;
const Op = db.Sequelize.Op;

exports.create = (req, res)=>{    
  console.log(">>>" , req.body);
    Leave.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Leave."
      });
    });
}

exports.findAll = (req, res) => {    
  console.log("findalll" , req.query);
    const status = req.query.status;
    var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;
  
    Leave.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Leaves."
        });
      });
  };

  exports.findOne = (req, res) => {    
    const id = req.params.id;  
    Leave.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Leave with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Leave with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Leave.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Leave was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Leave with id=${id}. Maybe Leave was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Leave with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Leave.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Leave was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Leave with id=${id}. Maybe Leave was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Leave with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    console.log("into the  delete all");
    Leave.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Leaves were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Leaves."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Leave.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Leave."
        });
      });
  };

  exports.getLeaveByTeacher = (req, res) => {
    const id = req.params.id;
    console.log("into the getLeaveByTeacher" , req.params.id);

    Leave.findAll({ where : { teacher_id : id }})
    .then(data => {
      console.log("###" , data);
      res.status(200).send({ data : data});
    }).catch(err => {
      console.log("into error" , err)
      res.status(500).send({
        message : err.message || "error in find Leave by teacher."
      });
    })
  }
  
  exports.publishLeave = (req, res) => {
    Leave.findAllPublished(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Leave was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Leave with id=${id}. Maybe Leave was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Leave with id=" + id
        });
      });
  }
  
  exports.publishLeave = (req, res) => {
    
  }