const express = ('exoress');
const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('トップページです')
  })
  .get('/about', (req, res) => { 
    res.send('アバウトページです')
  });

module.exports = router;