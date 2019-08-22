function Welcome() {
    this.index = function (req, res, next) {
        res.render('welcome');
    }

    this.profile = function(req, res, next){
        let data = {
            nama : "Putri",
            alamat : "Purbalingga",
            tgl : "18 Januari 2003"
        }
        res.render("profile", data);
    }
}
module.exports = Welcome;