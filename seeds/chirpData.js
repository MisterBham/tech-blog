const { Chirp } = require('../models');

const chirpData = [
        {"title":"Pellentesque eget nunc.","contents":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","member_id":1},
        {"title":"Morbi porttitor lorem id ligula.","contents":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","member_id":4},
        {"title":"Morbi non lectus.","contents":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","member_id":4},
        {"title":"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","contents":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","member_id":1},
        {"title":"Etiam faucibus cursus urna.","contents":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","member_id":5},
        {"title":"Nulla mollis molestie lorem.","contents":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","member_id":3},
        {"title":"Sed ante.","contents":"Phasellus in felis. Donec semper sapien a libero. Nam dui.","member_id":5},
        {"title":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","contents":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","member_id":4},
        {"title":"Quisque id justo sit amet sapien dignissim vestibulum.","contents":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","member_id":3},
        {"title":"Etiam justo.","contents":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","member_id":2},
]

const seedChirps = () => Chirp.bulkCreate(chirpData);

module.exports = seedChirps;
