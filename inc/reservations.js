module.exports = {

    render(req,res){

        res.render('reservations', {
            title: 'Reservas - Restaurante Saboroso! ',
            background: 'images/img_bg_2.jpg',
            h1: 'Reserve uma mesa! ',
            body: req.body
          });

    }
}