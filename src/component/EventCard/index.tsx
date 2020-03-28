import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

type event = {
    event_name: string
    ent_wday: string
    ctg1: string
    pc_flag: string
    place: string
    begin_date: string
    begin_wday: string
    description: string
    disp_flag: string
    Area: string
    end_data: string
    url: string
}

type EventCardProps = {
    event: event
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
    return (
        <CardContainer>
            <CardContent component='div'>
                <Box style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography variant='subtitle2' color='textSecondary' component='p'>{event.ctg1}</Typography>
                    <Typography variant='subtitle2' color='textSecondary' component='p'>{event.Area}</Typography>
                </Box>
                <Typography variant='h3' style={{fontSize: '16px', fontWeight: 'bold', padding: '4px'}} component='h3'>
                    {event.event_name}
                </Typography>
                <Typography variant='body1' style={{padding: '4px'}} component='p'>{event.description}</Typography>
                <Box style={{
                    display: 'flex',
                }}>
                    <Typography variant='caption' component='p'>{event.begin_date}({event.begin_wday})から</Typography>
                    {event.end_data && (
                        <Typography variant='caption' component='p'>{event.end_data}({event.ent_wday})</Typography>
                    )}
                </Box>
            </CardContent>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    margin-top: 8px;
    width: 400px;
    padding: 8px;
    -webkit-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .3);-moz-box-shadow: 0 0 4px rgba(0, 0, 0, .3);box-shadow: 0 0 4px rgba(0, 0, 0, .3);
`

export default EventCard
