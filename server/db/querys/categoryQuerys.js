const connection = require( "../connection");

let categorydb = {};

categorydb.all = () => {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM category`, (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

categorydb.deleted = (id) => {
    return new Promise((resolve, reject)=>{
        connection.query(`DELETE FROM category WHERE id = ?`,[id], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

categorydb.add = (title, leftColor,rightColor) => {
    return new Promise((resolve, reject)=>{
        connection.query(`INSERT INTO category (title, leftColor,rightColor) VALUES (?,?,?)`,
                        [title, leftColor,rightColor], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

categorydb.edit= (title, leftColor,rightColor,id) => {
    return new Promise((resolve, reject)=>{
        connection.query(`UPDATE category SET title = ?, leftColor =?, rightColor=? WHERE id = ?`,
                        [title, leftColor,rightColor,id], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

module.exports = categorydb