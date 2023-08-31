import React, {useContext} from 'react' ;
import { useState } from 'react' ;
import { AuthContext } from '../ContextAPI/AuthContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function SignupComp() {
    const [email,setEmail] = useState('') ;
    const [pass,setPass] = useState('') ;
    const [user,setUser] = useState('') ;
    const {SignUp} = useContext(AuthContext) ;

    let handleSubmit = ()=>{
        let userObj = SignUp(email,pass);
        setUser(userObj.user); 
    }

    return (
            <>
                {
                    user === '' ? 
                    <>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                        </CardActions>
                        </Card>
                    </>
                    :
                    <>
                        {user.uid}
                    </>
                }
            </>
            )
}

export default SignupComp