import React, { useState } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AutoAwesomeOutlined, KeyboardArrowRightOutlined, SendOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
  btn: {
    fontSize: 80,
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#333'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

const Create = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true)
    };
    if (details === '') {
      setDetailsError(true)
    };

    if (title && details) {
      console.log(title, details)
    }
  }

  return (
    <Container size='sm'>
      <Typography
        className={classes.title}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Code
      </Typography>
      <br />
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label='Detals'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <br />
        <Button
          className={classes.btn}
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightOutlined />}
        // onClick={() => alert('you clicked me')}
        // startIcon={<SendOutlined />}
        >
          Submit
        </Button>
      </form>
      <br />
      <AutoAwesomeOutlined />
      <AutoAwesomeOutlined color='secondary' fontSize='large' />
      <AutoAwesomeOutlined color='secondary' fontSize='small' />
      <AutoAwesomeOutlined color='action' fontSize='small' />
      <AutoAwesomeOutlined color='error' fontSize='small' />
      <AutoAwesomeOutlined color='disabled' fontSize='small' />
    </Container>
  )
}

export default Create;