//logout 동작 확인 후 제거할 파일
module.exports = {
  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).json({ 'message': 'ok' });
  },
};