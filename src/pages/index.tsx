import Head from 'next/head'
import axios from 'axios'
import {NextPage} from 'next'
import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import EventCard from '../component/EventCard'
import Box from '@material-ui/core/Box'

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

type HomeProps = {
    events: event[]
}

const Home: NextPage<HomeProps> = ({events}) => {
    return (
        <div className="container">
            <Head>
                <title>北九州イベント情報サイト</title>
            </Head>
            <CssBaseline/>
            <main>
                <Container maxWidth='lg' component='div'>
                    <EventContainer>
                        {events.map((event, index) => (
                            <EventCard key={index} event={event}/>
                        ))}
                    </EventContainer>
                </Container>
            </main>
        </div>
    )
}

Home.getInitialProps = async () => {
    try {
        const res = await axios.get('https://www.city.kitakyushu.lg.jp/cgi-bin/event/api.cgi')
        return res.data
    } catch (err) {
        return err
    }
}

const EventContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export default Home
