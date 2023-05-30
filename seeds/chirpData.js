const { Chirp } = require('../models');

const chirpData = [
    {"title": "First Chirp!!!", "contents": "Hahahaha, I was able to get the first chirp on the entire site!", "member_id": 1},
    {"title": "I got the 2nd!", "contents": "I got the 2nd chirp ever recorded!", "member_id": 2},
    {"title": "Were giving it the datatype of an array", "contents": "It should know better", "member_id": 1, "member_name": "Frank Redfin"},
    {"title": "It's just hard man", "contents": "It could never be true", "member_id": 2},
    {"title": "Curabitur vehicula ante velit, vel.", "contents": "Morbi lobortis consectetur dui, vitae molestie eros aliquam at. Aenean in ipsum sed erat rhoncus feugiat. Curabitur pretium magna in tortor pellentesque, non congue tellus facilisis. Proin consequat justo ac massa iaculis pulvinar. Quisque sit amet odio aliquet, faucibus risus eu, posuere lectus. Vivamus scelerisque, erat eget auctor facilisis, felis sapien laoreet massa, sed eleifend enim nisl id orci. Phasellus ut ornare magna. Aliquam auctor mi mauris, at placerat arcu ullamcorper non.", "member_id": 1},
    {"title": "Donec in tempor mi, pharetra.", "contents": "Mauris a lacinia metus. Aenean ut elementum ex, sed facilisis arcu. Cras vel maximus nunc, ut gravida leo. Aliquam dapibus ipsum leo, a dignissim est consequat eu. Cras vehicula nibh ut ex fringilla pellentesque. Duis scelerisque malesuada sapien, eget porttitor lorem. Duis vitae consequat urna. Donec ut nunc nec turpis gravida faucibus non sed ante. Aenean cursus luctus dictum. Etiam nec libero nec ex bibendum sollicitudin ac dignissim mauris. Integer nec suscipit ligula. Pellentesque id velit tellus. Aenean vitae malesuada sem. Suspendisse at metus nisi. Aenean in neque et velit rhoncus cursus.", "member_id": 2},
    {"title": "Orci varius natoque penatibus et.", "contents": "Duis sit amet pulvinar libero. Duis risus arcu, pharetra non sodales et, vestibulum sit amet mi. Cras leo tellus, tempor ac metus at, rhoncus faucibus nulla. Donec vel leo ultricies, pretium dolor nec, accumsan arcu. Morbi sed ex eget libero dapibus consectetur. Aenean in neque orci. Pellentesque nec ultrices nulla. ", "member_id": 2},
    {"title": "Fusce malesuada lorem nec scelerisque.", "contents": "Curabitur tristique tortor non cursus malesuada.", "member_id": 1},
]

const seedChirps = () => Chirp.bulkCreate(chirpData);

module.exports = seedChirps;
