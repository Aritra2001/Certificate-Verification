

function validate() {
    
    
    var cert = document.getElementById('cer').value;
    var Cert = cert.toUpperCase();
    var len = cert.length;
    

    var ms = Cert.substring(0, 3)
    
    
    //Cubesat Masterclass

    if(len === 10 && ms === 'CMC')
    {
        var no_cmc = Cert.substring(7, 10)
        
        var no = parseInt(no_cmc)
        
        if(no >= 002 && no <= 085)
        {
            window.alert('✅ Successful verification!')
            
           
           
        }
        else
        window.alert("❌ Certificate id doesn't exit")
    }

    //Additive Manufacturing
    if(len === 10 && ms === 'ADM')
    {
        var no_amc = Cert.substring(8, 10)
        var no = parseInt(no_amc)
        
        if(no >= 02 && no <= 28)
        {
            window.alert('✅ Successful verification!')
        }
        else
        window.alert("❌ Certificate id doesn't exit")
        
        
    }

    //Satellite Masterclass
    if(len === 11 && ms === 'SMC')
    {
        var no_smc = Cert.substring(9, 11)
        var no = parseInt(no_smc)
        
        if(no >= 01 && no <= 37)
        {
            window.alert('✅ Successful verification!')
        }
        else
        window.alert("❌ Certificate id doesn't exit")
        
    }

    //length issues
    if(len <= 9 )
    window.alert("⚠️ Cerificate id too short")

    if(len > 11 )
    window.alert("⚠️ Cerrificate id is too long")

    //false calls
    if(len === 11 && (ms=== 'CMC' || ms === 'ADM'))
    window.alert("Wrong id ")

    if(len === 10 && ms === 'SMC')
    window.alert("Wrong id ")



         
}

   


