import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField,Button,FormControl,Select,InputLabel,MenuItem } from '@mui/material';

const UI = () => {

   
    const[rd,setr]=useState("")
    
    const[choice,setchoice]= useState("")

    const[mes,setmes]= useState("")
    
     
   function handleChoiceChange(event)
   {
    setchoice(event.target.value)
   }
   

    function gv(event)
    {
      setr(event.target.value)
    }
    function ik(event)
    {
        event.preventDefault()
        console.log(choice)


        if(choice==='')
            {
               setmes(`\u{1F60A} Select Fahrenheit/Celcius \u{1F60A} `)
            
                
                return 
            }

        //fahrenheit  to  celcius

        if(choice==="Fahrenheit")
            {
                console.log("hello")


                const ans= ((parseFloat(rd) - 32) * 5) / 9;

                setmes(`${ans.toFixed(2)} °C`)

                setr("")

                setchoice("")

            }

        else{
            
            console.log("bye")

            const fahrenheit = (parseFloat(rd) * 9) / 5 + 32;

            setmes(`${fahrenheit.toFixed(2)} °F`);

            setr("")

            setchoice("")
        }    

       
      
    }

  return (

    <Box sx={{backgroundColor:'black',width:'100%',height:'100vh'}}>

      
      <form onSubmit={ik} >
        
        <Box sx={{display:'flex',flexDirection:'column',border:'3px solid black',  width: {
          xs: '95%',  
          sm: '75%',   
          md: '50%',   
          lg: '25%',   
          xl: '25%',  
        },
        padding:'15px',
        backgroundColor:'#f0f0f0',
        boxShadow:'0 0 45px rgba(255, 255, 255, 0.6);',
        borderRadius:'25px',
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top:'100px'

        
        }}>

          <Typography sx={{backgroundColor:'#e9e3b4',textAlign:'center',width:'100%',marginLeft:'auto',marginRight:'auto',borderRadius:'30px',
            padding:'10px',marginBottom:'10px'
          }} >Temperature Converter</Typography>

                            <TextField
                              
                              required
                              fullWidth
                              margin="dense"
                              type="number"
                              value={rd}
                              onChange={gv}
                              variant="outlined"
                              InputLabelProps={{ style: { color: 'black'} }}
                              InputProps={{style:{borderRadius:'25px'}}}
                              placeholder='Enter the temperature'
                              
                              
                              />

                             <FormControl fullWidth margin="dense" variant="standard">

                                                <InputLabel id="choice-label" sx={{margintop:'25px'}}>F/C</InputLabel>

                                                        <Select

                                                            labelId="choice-label"
                                                            id="choice"
                                                            name="choice"
                                                            value={choice}
                                                            onChange={handleChoiceChange}
                                                            

                                                            >
                                                                <MenuItem value="Fahrenheit">Fahrenheit</MenuItem>
                                                                <MenuItem value="Celcius">Celcius</MenuItem>

                                                        </Select>
                             </FormControl>  

         
                    
                    <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'15px',marginBottom:'10px'}}>

                      

                      <Button type="submit"  sx={{borderRadius:'25px'}}>

                          Convert

                      </Button>

                    </Box>

          <Typography sx={{fontWeight:'black'}}>{mes}</Typography>

        </Box>

        </form>  

    </Box>
  )
}

export default UI