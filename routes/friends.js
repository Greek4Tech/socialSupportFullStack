const { getRounds } = require('bcrypt');
const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friend');

const { ensureAuth } = require('../middleware/auth');

// protect all route to stop artificial requests
router.use('/', ensureAuth);
router.get('/', friendController.getFriends);

// required to serve static files
router.use('/edit', express.static('public'));
router.get('/edit/:friendId', friendController.getFriendPage);

router.put('/edit', friendController.editFriend);

router.post('/createFriend', friendController.createFriend);

router.put('/markComplete', friendController.markComplete);

router.put('/markIncomplete', friendController.markIncomplete);

router.delete('/deleteFriend', friendController.deleteFriend);

module.exports = router;
