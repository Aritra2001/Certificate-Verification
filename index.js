

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
    
    //Rocket Propulsion
     if(len === 10 && ms === 'RPM')
    {
        var no_rpm = Cert.substring(8, 10)
        var no = parseInt(no_rpm)
        
        if(no >= 01 && no <= 16)
        {
            window.alert('✅ Successful verification!')
        }
        else
        window.alert("❌ Certificate id doesn't exit")
        
        
    }
    
    //CFD masterclass
         if(len === 10 && ms === 'CFD')
    {
        var no_cfd = Cert.substring(9, 11)
        var no = parseInt(no_cfd)
        
        if(no >= 01 && no <= 27)
        {
            window.alert('✅ Successful verification!')
        }
        else
        window.alert("❌ Certificate id doesn't exit")
        
        
    }
    //Hardcoded
    if(Cert === 'UIGBGF202301' || Cert === 'UIGBGF202302')
    {
         window.alert('✅ Successful verification!')
    }

    //length issues
    if(len <= 9 )
    window.alert("⚠️ Cerificate id too short")

    if(len > 11 && ms !== 'UIG')
    window.alert("⚠️ Cerrificate id is too long")

    //false calls
    if(len === 11 && (ms=== 'CMC' || ms === 'ADM' || ms === 'RPM'))
    window.alert("Wrong id ")

    if(len === 10 && ms === 'SMC')
    window.alert("Wrong id ")



         
}

   


