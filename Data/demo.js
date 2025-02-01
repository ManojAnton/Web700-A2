function getServerStatus(){
    const result = fetch("/server/status");

    result.then(function(status){
        console.log ("status of server ",status.ok)
    }

);
    
}