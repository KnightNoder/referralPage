import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function App(params) {
  return (
    <>
      <Button variant="contained">
        <AddIcon />
      </Button>
      <br />
      <br />
      <Button variant="contained">
        <RemoveIcon />
      </Button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
