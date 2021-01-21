import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Clicker(){
    let cpt=0;
    const [compteur, setCompteur] = useState(cpt);

    return (
        <div class={'row'}>
            <div class='col-lg-6'>The count is {compteur}{' '}</div>
           <div class='col-lg-4'> <Button variant="primary" onClick={() => setCompteur(compteur+1)}>Click</Button>{' '}</div>
            <div class='col-lg-2'><Button onClick={() => setCompteur(0)}>Reset</Button></div>

        </div>
    );
}

export default Clicker;