import React, { Fragment, useState } from 'react';
import { Hint } from './Hint.jsx'
import { Modal } from './Modal.jsx';
import { Grid } from '@material-ui/core';

export const Main = () => {
  const [hints, setHints] = useState(
    Array(4).fill(false)
  );

  const [showModal, setShowModal] = useState({
    isModal: false,
    presentsIndex: null
    });

  const handleClickHint = hintsIndex => {
    const _hints = hints.slice();
    if (checkHintsAreTrue(_hints)) {
        const _showModal = Object.assign({}, showModal);
        _showModal.isModal = true;
        _showModal.presentsIndex = hintsIndex;
        setShowModal(_showModal);
      };
    
    _hints[hintsIndex] = true
    setHints(_hints);
  };

  const handleClickModal = () => {
    setShowModal(false);
  };

  const renderHint = (isClicked, hintsIndex) => {
    return (
      <Hint 
        hintsIndex={hintsIndex}
        isClicked={isClicked}
        onClick={() => handleClickHint(hintsIndex)}
      />
    );
  };

  return(
    <div>
      <Grid container alignItems="center" justify="center">
      <Grid item alignItems="center" justify="center" xs={12} >
      <h3>ボタンを押すと4つのプレゼントのヒントが出てくるよ!</h3>
      </Grid>
      <Grid item>
      {hints.map((isClicked, hintsIndex) =>
        renderHint(isClicked, hintsIndex)
        )}
      </Grid>
      </Grid>
      <Fragment>
        <Modal 
          isModal={showModal.isModal}
          presentsIndex={showModal.presentsIndex}
          onClick={handleClickModal}
        />
      </Fragment>
    </div>
  );
};

function checkHintsAreTrue(hints) {
  const isTrue = (hint) => hint === true;
  return hints.every(isTrue);
};