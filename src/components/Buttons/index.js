import React from 'react';

import { Button, createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core';

import { DeleteForever } from '@material-ui/icons';

/**
 * disableElevation -> retira o box-shadow do button
 * variant: {
 *  sem variant -> retira o background do button
 *  outlined -> ghost button
 * }
 * startIcon -> prop com component <Icon />
 */

export default function ButtonComponent() {

  /**
   *  createMuiTheme -> cria um palheta de cores
   *  contrastText -> cor da fonte no botão
   */
  const theme = createMuiTheme({
    palette: {
      primary: {
        dark: '#6200ea',
        main: '#7c4dff',
        light: '#b388ff',
        contrastText: '#ffff'
      },
      secondary: {
        dark: '#dd2c00',
        main: '#ff5722',
        light: '#ff9e80'
      }
    }
  });

  const ButtonStyled = withStyles(theme => ({
    root: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      }
    }
  }))(Button)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonStyled variant="contained"> 
          Estilizado
        </ButtonStyled>
        <Button variant="contained" color="primary">Primary</Button>

        <Button variant="contained" color="secondary">Secondary</Button>

        <Button variant="contained" color="primary" disableElevation>Sem sombra</Button>

        <Button color="secondary">Sem background</Button>

        <Button variant="outlined" color="primary">Ghost Button</Button>

        <Button variant="outlined" size="small" color="primary">Pequeno</Button>

        <Button variant="outlined" size="medium" color="secondary">Médio</Button>

        <Button variant="outlined" size="large" color="secondary">Grande</Button>

        <Button variant="contained" color="secondary" startIcon={<DeleteForever/>}>Com ícone</Button>
      </ThemeProvider>
    </div>
  );
}

