class API{
    url;
    method="GET";
    #secure;
    constructor(url){
        this.url=url;
    }
    isSecure(){
        if(this.url.includes("https")) return true;
        return false;
    }
}



module.exports = { API }