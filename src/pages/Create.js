import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { AutoAwesomeOutlined, KeyboardArrowRightOutlined, SendOutlined } from '@mui/icons-material';

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Code
      </Typography>
      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => alert('you clicked me')}
        // startIcon={<SendOutlined />}
        endIcon={<KeyboardArrowRightOutlined />}
      >
        Submit
      </Button>
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
