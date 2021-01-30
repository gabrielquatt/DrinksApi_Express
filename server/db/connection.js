const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ReactJs',
  multipleStatements: true
});

let drinkdb = {};

drinkdb.all = () => {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM drinks`, (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

drinkdb.one = (id) => {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM drinks WHERE ID = ? `,[id], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result[0]);
            };
        }); 
    });
}


drinkdb.deleted = (id) => {
    return new Promise((resolve, reject)=>{
        connection.query(`DELETE FROM drinks WHERE id = ?`,[id], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

drinkdb.add = (title,description,logo, leftColor,rightColor) => {
    return new Promise((resolve, reject)=>{
        connection.query(`INSERT INTO drinks (title, description, logo , leftColor,rightColor) VALUES (?,?,?,?,?)`,
                        [title, description, logo, leftColor,rightColor], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

drinkdb.edit= (title,description,logo, leftColor,rightColor,id) => {
    return new Promise((resolve, reject)=>{
        connection.query(`UPDATE drinks SET title = ?, description = ?, logo = ?, leftColor =?, rightColor=? WHERE id = ?`,
                        [title, description, logo, leftColor,rightColor,id], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

module.exports = drinkdb;