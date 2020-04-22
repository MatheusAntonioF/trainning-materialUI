import React from 'react';

import { TextField, makeStyles, createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core';

/**
 * TextField são inputs 
 */

const useStyles = makeStyles({
  container: {
    marginRight: 15,
  }
})

export default function ContainerTextfield() {

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

  const classes = useStyles();
  /**
   *  & label.Mui-focused -> estiliza a label do input
   *  & .MuiInput-underline:after -> estiliza border-bottom do input
   */
  const InputStyled = withStyles(theme => ({
    root: {
     
      '& label.Mui-focused': {
        color: theme.palette.secondary.dark,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.light,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'red',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'red',
        },
      }
      // color: theme.palette.secondary.dark,
      // borderColor: theme.palette.secondary.dark,
      
    }
  }))(TextField);

  return (
    <div >
      <TextField className={classes.container}  label="Input padrão" />
      <TextField className={classes.container} label="Tipo filled" variant="filled" />
      <TextField className={classes.container} size="small" placeholder="teste" label="Tipo Outlined" variant="outlined" />
      <ThemeProvider theme={theme}>
        <InputStyled label="Estilizado" color="primary" />
      </ThemeProvider>
    </div>
  );
}
