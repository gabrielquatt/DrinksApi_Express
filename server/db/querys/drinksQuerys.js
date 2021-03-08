const connection = require( "../connection");

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

drinkdb.add = (title,description,logo, leftColor,rightColor, id_category) => {
    return new Promise((resolve, reject)=>{
        connection.query(`INSERT INTO drinks (title, description, logo , leftColor,rightColor,id_category) VALUES (?,?,?,?,?,?)`,
                        [title, description, logo, leftColor,rightColor, id_category], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

drinkdb.edit= (title,description,logo, leftColor,rightColor,id_category,id) => {
    return new Promise((resolve, reject)=>{
        connection.query(`UPDATE drinks SET title = ?, description = ?, logo = ?, leftColor =?, rightColor=?, id_category=? WHERE id = ?`,
                        [title, description, logo, leftColor,rightColor,id_category,id], (err, result)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(result);
            };
        }); 
    });
}

module.exports = drinkdb