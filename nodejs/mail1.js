class mymail
{
    constructor(){
        this.email = "devarsh@gmail.com";
        this.password = 1234 ;
        console.log("cunstructor called....");
    }

    send(reciver,subject,content){
        console.log("mail sent... to");
        console.log(reciver,subject,content);
    }
}

module.exports.m1 = mymail ; 