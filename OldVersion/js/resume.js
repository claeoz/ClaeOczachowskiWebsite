const fs = require('fs');
const filePath = '../txt/blackList.txt';

var bannedUsers = [User("adolf", "hitler", "1466.gmail.com", "6666666666")];


function User(firstName, lastName, email, phoneNumber)
{
    this.firstName = firstName;
    this.firstName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber
    IsBanned = false;
    if (firstName == bannedUsers.firstName && lastName == bannedUsers || phoneNumber == bannedUsers.phoneNumber || email == bannedUsers.email)
    {
        IsBanned = true;
    }
}
function readBannedUsers()
{
    fs.readFile(filePath, 'utf', )
}