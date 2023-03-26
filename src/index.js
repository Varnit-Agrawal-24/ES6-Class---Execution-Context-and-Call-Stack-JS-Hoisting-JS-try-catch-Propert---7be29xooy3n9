class API{
    url;
    method="GET";
    #secure;
    constructor(url){
        this.url=url;
    }
    isSecure(){
        if(this.url.includes("https")) this.#secure=true;
        else this.#secure=false;
        return this.#secure;
    }
    updateUrl(url){
        this.url=url;
    }
}


module.exports = { API }