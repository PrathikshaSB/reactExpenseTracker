
import {Box, Typography, TextField, makeStyles, Button} from '@material-ui/core';
import { useState } from 'react';

const useStyle = makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        marginTop: 10,
        '& > *':{
            marginBottom: 20
        }
        
    },
    button:{
        background: '#445a6f',
        color: 'white'
        
    }
})

const NewTransactions = ({addTransaction}) => {

    const classes = useStyle();

    const [text,setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(transaction);
    }

    return(
        <Box className={classes.container}>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter expense title" onChange = {(e) => setText(e.target.value)}></TextField>
            <TextField label="Enter amount(if money spent, put negative sign)" onChange = {(e) => setAmount(e.target.value)}></TextField>
            <Button className={classes.button} onClick={newTransaction} variant="contained">add new transaction</Button>
        </Box>
    )
}

export default NewTransactions