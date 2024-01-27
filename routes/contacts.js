const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

// add contact
router.post('/', contactsController.createContact);

//delete contact

router.delete('/:id', contactsController.deleteContact);

router.put('/:id', contactsController.updateContact);

module.exports = router;
