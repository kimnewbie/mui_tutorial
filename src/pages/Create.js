import { Button, Container, Typography } from '@mui/material'
import React from 'react'

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
      >
        Submit
      </Button>
    </Container>
  )
}
