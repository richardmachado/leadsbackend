const db = require('../data/db-config');

module.exports = {
    getLeads,
    findLeadById,
    updateLead,
    removeLead,
}

function getLeads() {
    return db.select("*").from('leads')
}

function findLeadById(id) {
    return db('leads')
    .where({id})
    .first()
}

function updateLead(changes, id){
    return db('leads')
    .where({id})
    .update(changes)
    .then(count=> {
        if (count > 0) {
            return findLeadById(id)
        } else {
            return null;
        }
    })
}

function removeLead (id) {
    return db('leads')
    .where('id', id)
    .del()
    
}

