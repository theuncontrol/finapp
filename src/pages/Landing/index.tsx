import React from 'react'
import { Container } from './styles'
import { Doughnut } from '@reactchartjs/react-chart.js'
import Header from '../../components/Header'

const data = {
  labels: ['GPS', 'Siebel', 'Sigres', 'Contact Center'],
  datasets: [
    {
      label: '# of Votes',
      data: [50, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)'
      ],
      borderWidth: 1
    }
  ]
}
const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <Doughnut data={data} type="doughnut" />
    </Container>
  )
}

export default Landing
