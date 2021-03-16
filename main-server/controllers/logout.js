module.exports = {
  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).json({ 'message': 'ok' });
  },
};