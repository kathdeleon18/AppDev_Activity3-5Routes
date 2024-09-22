const main = {
    index:(req, res) => {
        res.render('index');
    },

    shop:(req, res) => {
        res.render('shop');
    },

    detail:(req, res) => {
        res.render('detail');
    },

    cart:(req, res) => {
        res.render('cart');
    },
    
    checkout:(req, res) => {
        res.render('checkout');
    },

    contact:(req, res) => {
        res.render('contact');
    },

    home:(req, res) => {
        res.render('home');
    },
}
module.exports = main;