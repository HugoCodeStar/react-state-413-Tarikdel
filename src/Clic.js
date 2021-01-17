import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Clic(){
    let cpt=0;
    const [compteur, setCompteur] = useState(cpt);

    return (
        <div>
            The count is {compteur}{' '}
            <Button variant="primary" onClick={() => setCompteur(compteur+1)}>Click</Button>{' '}
            <Button onClick={() => setCompteur(0)}>Reset</Button>

        </div>
    );
}

export default Clic;