const express = require('express');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const { teacherService } = require('../services');

const createTeacher = catchAsync(async (req, res) => {      
    const teacher = await teacherService.createTeacher(req.body);    
    res.status(httpStatus.CREATED).send(teacher);
});

const createTutorial = catchAsync(async(req, res)=>{
  const tutorial = await tutorialService.createTutorial(req.body);
  res.status(httpStatus.CREATED)
});

const getTeachers = catchAsync(async (req, res) => {  
  const filter = pick(req.query, ['name', 'subject' , 'email']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await teacherService.queryTeachers(filter, options);
  res.send(result);
});

const getTeacher = catchAsync(async (req, res) => {  
  const Teacher = await teacherService.getTeacherById(req.params.TeacherId);
  if (!Teacher) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found');
  }
  res.send(Teacher);
});

const updateTeacher = catchAsync(async (req, res) => {
  const Teacher = await teacherService.updateTeacherById(req.params.TeacherId, req.body);
  res.send(Teacher);
});

const deleteTeacher = catchAsync(async (req, res) => {
  await teacherService.deleteTeacherById(req.params.TeacherId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
};
