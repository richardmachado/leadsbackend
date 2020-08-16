const express = require('express');

const Leads = require('./Leads-model');

const router = express.Router();


router.get('/', (req, res) => {
    Leads.getLeads()
    .then(Leads => {
        res.json(Leads)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get Leads. Contact your backend"})
    })
 });

 

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Leads.findUserById(id)
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({message: 'There is no user with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get user. Contact your backend'})
    })
});

 

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Leads.findUserById(id)
    .then(user => {
        if (user) {
            Leads.updateUser(changes, id)
            .then(updatedUser => {
                res.json(updatedUser);
            })
        } else {
            res.status(404).json({message: "No user with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update user. Contact your backend"})
    })
});

 

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Leads.removeUser(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No user with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete user. Contact your backend"})
    })
});

 

router.get('/:id/students', (req, res) => {
    const {id} = req.params

    Leads.getStudentList(id)
    .then(students => {
        res.json(students)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get Leads. Contact your backend"})
    })
 });

module.exports = router;