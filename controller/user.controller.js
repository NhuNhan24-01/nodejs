class UserController{
    static createUser = (req, res) => {
        res.send('Tạo user thành công')
      }
    static getList = (req, res) => {
        res.send('Lấy danh sách user thành công')
      }
    static getInformation =  (req, res) => {
        res.send('Lấy thông tin user {id}: '+req.params.id)
      }
    static updateInformation =  (req, res) => {
        res.send('Cập nhật thông tin users {id}:' +req.params.id)
      }
    static deleteInformation = (req, res) => {
        res.send('Xoá thông tin user {id}: '+req.params.id)
      }
    static usersWithParameter = (req, res) => {
        // const limit =  10;
        // const page =  0;
        // res.json({ limit, page })
        // console.log(req.query)
        const limit = req.query.limit
        const page = req.query.page
        res.json({limit, page})
      }
    static usersWithBody = (req, res) => {
        console.log(req.body)
        const username = req.body
        res.json(username)
      }
}
module.exports = UserController;
