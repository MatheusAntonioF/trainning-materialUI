import React, { useState } from 'react';

import { Drawer, makeStyles } from '@material-ui/core';

import { Button } from '@material-ui/core';

/**
 * anchor -> posição de referência para o drawer
 *  top, left, right, bottom -> padrão left
 */

 /**
  * cria estilos específicos para components
  * cada objeto se torna uma classe para um component
  */
const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 5,
    color: 'red'
  }
})

export default function () {
  const classes = useStyles();

  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <>
      <Drawer open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <span className={classes.list}>teste</span>
      </Drawer>
      <Button variant="outlined" color="secondary" onClick={() => setToggleDrawer(true)}>
        Abre Drawer
      </Button>
    </>
  );
}
