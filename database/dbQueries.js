const mysql = require('mysql');
const db = require('./dbConnection.js');

const getProjectDetails = (projectCode) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM projects WHERE project_code = ?';
        db.query(sql, [projectCode], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const setProjectDetails = (projectCode, projectName) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO projects (project_code, project_name) VALUES (?, ?)';
        db.query(sql, [projectCode, projectName], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getDisciplines = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM disciplines';
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const setDiscipline = (disciplineName) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO disciplines (discipline_name) VALUES (?)';
        db.query(sql, [disciplineName], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getQuantityData = (projectCode) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM quantity_data WHERE project_code = ?';
        db.query(sql, [projectCode], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const setQuantityData = (projectCode, quantityData) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO quantity_data (project_code, quantity_data) VALUES (?, ?)';
        db.query(sql, [projectCode, quantityData], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getProjectDetails,
    setProjectDetails,
    getDisciplines,
    setDiscipline,
    getQuantityData,
    setQuantityData
};