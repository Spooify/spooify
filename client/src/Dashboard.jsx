import React from 'react'
import useAuth from './useAuth'
import Player from './Player';

const Dashboard = (props) => {
const accessToken = useAuth(props.code);
  return (
    <Player accessToken={accessToken} />
  )
}

export default Dashboard
