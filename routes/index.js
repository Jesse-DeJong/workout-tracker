const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path");

router.use('/api', apiRoutes);

/* Variable path routing */
// Index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
// Stats.html
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/stats.html'));
});
// Exercise.html
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;