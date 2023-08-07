module.exports = (sequelize, Sequelize) => {
    const Leave = sequelize.define("leave", {      
      student_id: {
        type: Sequelize.INTEGER
      },
      teacher_id: {
        type: Sequelize.INTEGER
      },
      status : {
        type : Sequelize.ENUM,
        values : ['applied' , 'pending' , 'cancle' , 'approve']
      },
      cancledBy : {
        type: Sequelize.INTEGER
      },
      approvedBy: {
        type: Sequelize.INTEGER
      },
      days: {
        type: Sequelize.INTEGER
      },
      subject:{
        type: Sequelize.STRING
      },      
      description:{
        type: Sequelize.STRING
      },
      cancleReason : {
        type : Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });  
    return Leave;
  };