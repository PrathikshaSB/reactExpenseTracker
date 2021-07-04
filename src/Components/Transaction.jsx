
import { ListItem, ListItemText, makeStyles, ListItemIcon } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    list:{
        marginTop:10,
        border: '1px solid #f6f6f6'
    }
})



const Transaction = ({transaction, deleteTransaction}) => {
    const classes = useStyle();
    const sign = transaction.amount >= 0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount);
    const color = transaction.amount >=0 ? '#b3f2b5' : '#eda8ae';
    return(
        <ListItem style={{background: `${color}`}} className={classes.list}>
            <ListItemIcon>
                <DeleteIcon onClick ={() => deleteTransaction(transaction.id)}/>
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </ListItem>
    )
}

export default Transaction