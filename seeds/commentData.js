const { Comment } = require('../models');

const commentData = [
    {"contents":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","chirp_id":5,"member_id":5},
    {"contents":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","chirp_id":9,"member_id":1},
    {"contents":"Sed ante. Vivamus tortor. Duis mattis egestas metus.","chirp_id":3,"member_id":3},
    {"contents":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","chirp_id":2,"member_id":1},
    {"contents":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","chirp_id":7,"member_id":3},
    {"contents":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","chirp_id":3,"member_id":1},
    {"contents":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","chirp_id":2,"member_id":5},
    {"contents":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","chirp_id":7,"member_id":4},
    {"contents":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","chirp_id":4,"member_id":5},
    {"contents":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","chirp_id":8,"member_id":2},
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;