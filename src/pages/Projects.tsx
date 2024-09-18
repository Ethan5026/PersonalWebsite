import {
    Typography
} from "@mui/material";
import CyBotImage from '../images/cybot.png'
import Slides from "../components/Slides";
// @ts-ignore
import TriviaBumVideo from '../images/trivia_bum.mp4'
import TriviaBumDiagram from '../images/triviabumblockdiagram.png'
import PajamaJamsImage from '../images/pajamaJams.png'
import PajamaJamsWouldYouRatherImage from '../images/wouldyourather.png'
import ProcessorImage from '../images/mipsprocessor.png'
import WaveformImage from '../images/mipswaveforms.png'
import VirtualNetworkDiagram from '../images/virtual_network.png'
import FadeIn from "../components/FadeIn";
import DataTable from "../components/DataTable";

export default function Projects() {
    const slides = [
        <div>
            <FadeIn>
            <div style={{width: '80%', marginLeft: '10%'}}>
                
                <Typography variant={'h2'} style={{textAlign: 'center'}}>Trivia Bum Android App</Typography>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <video width={'80%'} src={TriviaBumVideo} controls={true}/>
                </div>
                <Typography variant={'h6'}>
                    <br/>
                    Trivia Bum is an interactive multiplayer trivia game for Android devices. Within the app, you can
                    log in, sign up, or play as a guest. Once selecting an account, you are invited to play the trivia game
                    and attempt to score big using your trivia knowledge to gain points and power-ups. You can view your score on the leaderboard
                    and compare with friends. Team up with friends in a clan, keep updated through a live clan chat, and conquer the leaderboard!
                    Be sure to stay connected to the Trivia Bum community within the global chat and help chat!
                    <br/>
                    <br/>
                    This app's frontend was developed in Android Studio, incorporating Volley to introduce the backend's Springboot
                    for websocket and API connections. The backend is stationed to run on a Linux container and the frontend can run as an apk
                    for any android mobile device. The schematic diagram of Trivia Bum is shown below.
                    <br/>
                    <br/>
                </Typography>
                    
            </div>
                
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <img width={'80%'} src={TriviaBumDiagram} alt={"Trivia Bum Diagram"}/>


            </div>
            </FadeIn>
                
        </div>,
        <div>
                <div style={{width: '80%', marginLeft: '10%'}}>
                    
                    <Typography variant={'h2'} style={{textAlign: 'center'}}>Pipelined MIPS Processor</Typography>
                    <br/>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <img width={'80%'} src={ProcessorImage} alt={"MIPS Processor Diagram"}/>
                    </div>
                    <br/>
                    <Typography variant={'h6'}>
                        <br/>
                        Coded in Verilog, a single-cycle processor, software-based pipelined processor, and hardware-based
                        pipeline processor were developed, tested and compared. Each processor was evaluated for accuracy using
                        automatic testing software verifying the CPU state after binary MIPS operations.
                        <br/>
                        <br/>
                        The processors were then tested against the Grendel algorithm, and their performance was analyzed.
                        The results of the evaluation are shown below.
                        <br/>
                        <br/>
                    </Typography>
                    <br/>
                    <DataTable
                        tableHeading={
                        ['Processor Type', '# of Instructions', 'Total Cycles', 'Cycles per instruction', 'Max Cycle Time (ns)']
                        }
                    rows={
                        [
                            ['Single Cycle', 2116, 2116, '1.0', 49.47],
                            ['Software Pipeline', 4584, 5616, 1.23, 19.61],
                            ['Hardware Pipeline', 2116, 3538, 1.67, 23.78]
                        ]
                    }/>
                    <br/>
                    <br/>
                    <Typography variant={'h6'}>
                        An additional tool in the testing process were waveforms to detect specific wire highs and lows.
                        Below is an example of an outputted waveform for the automatic testing of the hardware pipeline processor
                        for a bubble sort algorithm.
                    </Typography>
                    <br/>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <img width={'80%'} src={WaveformImage} alt={"MIPS Processor Testing Waveforms"}/>
                    </div>
                    
                </div>
        </div>,
        <div>
            <div style={{width: '80%', marginLeft: '10%'}}>
                
                <Typography variant={'h2'} style={{textAlign: 'center'}}>Roomba Ice Cream Truck</Typography>
                <br/>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <img width={'80%'} src={CyBotImage} alt={"Roomba Ice Cream Truck"}/>
                </div>
                <br/>
                <Typography variant={'h6'}>
                    Using the embedded system circuitry, sensors, and motors of a Roomba, we developed C-coded autonomous
                    software for a self-driving ice cream delivery system. The sonar and infrared sensors helped detect obstacles
                    and distinguish them between large objects, such as houses and trees, and small objects like people or traffic.
                    The Roomba can drive on the road while avoiding objects and park to interact with a nearby customer.
                    <br/>
                    <br/>
                    The Roomba has an extended LED Display with input buttons to select the ice cream flavor and quantity. When a sale is made,
                    the stock quantity is deducted appropriately and the sale is sent to a remote desktop to update the employer's management records.
                    <br/>
                    <br/>
                    The Roomba Ice Cream Truck can be switched between autonomous mode, and manual mode. Manual mode offers the employer to remotely connect to the roomba,
                    view a GUI display of the surroundings, and control the steering and wheel motors of the Roomba.
                    <br/>
                </Typography>
                
            </div>
        </div>,
        <div>
            <div style={{width: '80%', marginLeft: '10%'}}>

                <Typography variant={'h2'} style={{textAlign: 'center'}}>Virtual Internal Network</Typography>
                <br/>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <img width={'80%'} src={VirtualNetworkDiagram} alt={"Virtual Network"}/>
                </div>
                <br/>
                <Typography variant={'h6'}>
                Integrated in a simulated web environment ISEAGE, a collection of Linux and Windows machines were
                    built and initialized to comprise a
                local network. ISEAGE simulates a web environment and tests the network for functionality and security using
                    distributed attacks and bot web traffic.
                    <br/>
                    <br/>
                    This network is comprised of two DNS servers, internal and external. The external DNS has a registered
                    public IP for all internal services. The internal DNS is accessed through the PfSense firewall, configured to
                    direct public IP addresses to the private IP addresses assigned by the internal DNS server.
                    <br/>
                    <br/>
                    Other than directing ports, the PfSense firewall monitors open ports, incoming and outgoing packets, and status of all systems
                    within the internal network and has active protocols making it both a security detection and prevention system.
                    <br/>
                    <br/>
                    An LDAP directory service is implemented within the local network for users to store data, use system
                    resources, and view their information. Users can access the directory service by remotely connecting to the LDAP workstation, a
                    Ubuntu laptop within the local network.
                    <br/>
                    <br/>
                    A mail server uses POP3, IMAPS, and SMTPS to send and receive encrypted mail from addresses listed within the local directory. This
                    service is accessible from any machine inside or outside the local network.
                    <br/>
                    <br/>
                    Two different web servers currently run within this network. Both web servers host a website with HTTP and HTTPS ports.
                    One of the web servers are open to development and system connection through SSH.
                    <br/>
                    <br/>
                </Typography>
                <br/>

            </div>
        </div>,
        <div>
            <div style={{
                width: '80%',
                marginLeft: '10%',
            }}>

                <Typography variant={'h2'} style={{textAlign: 'center'}}>PajamaJams</Typography>
                    <br/>
                    <br/>
                    <div style={{display: 'flex'}}>
                    <Typography style={{marginLeft: 0, marginRight: 20}} variant={'h6'}>
                        PajamaJams is a web application made as a sleepover activity for teenagers to play classic
                        friend building games such as Would You Rather and Truth or Dare. The web page is simplistic,
                        allowing users to select between one of 9 games offered: Would You Rather, Truth or Dare, Paranoia,
                        Pictionary, Never Have I Ever, Charades, Smash or Pass, Storytime, and Kiss Marry Kill.
                    </Typography>
                    <img style={{marginLeft: 0, marginRight: 20}} width={'50%'} height={'50%'} src={PajamaJamsImage} alt={"PajamaJams Homepage"}/>
                    </div>
                    
                </div>
                <br/>
                <div style={{display: "flex"}}>
                    
                    <img style={{marginLeft: 0, marginRight: 20}} width={'40%'} height={'40%'} src={PajamaJamsWouldYouRatherImage} alt={"Pajama Jams Would you Rather Page"}/>
                    <Typography  style={{marginLeft: 20, marginRight: 20}} variant={'h6'}>
                        The user can interact with each game by looking at the instructions of the game or requesting a prompt. Prompts are ordered within MongoDB tables and can be edited
                     by users with admin privileges to the webpage.</Typography>
                    
                </div>
        </div>
    ]

    return (
        <>
            <Slides slides={slides}/>
        </>
    )
}