// routes/test.js
const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase'); // supabase 연결 파일

router.get('/memos', async (req, res) => {
  const { data, error } = await supabase.from('memos').select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;
