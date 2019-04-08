import pc from 'assets/images/pc.jpg';
import poliEvents from 'assets/images/poli.jpg';
import chat from 'assets/images/chat.jpg';
import yt from 'assets/images/yt.jpg';

const projects = [
    {
        name: 'Poli~Events',
        description: 'Project for Lodz University of technolgy\'s community.',
        image: poliEvents,
        mainTechnology: 'react',
        demo: null,
        github: null,
        technologies: ['react', 'scss', 'firebase']
    },
    {
        name: 'Pan Cytat',
        description: 'Project for Pan Cytat.',
        image: pc,
        mainTechnology: 'react-native',
        demo: 'https://expo.io/@akopczynski/pan-cytat',
        github: 'https://github.com/adamkopczynski/pancytat',
        technologies: ['react-native', 'expo', 'native-base']
    },
    {
        name: 'Youtube music',
        description: 'Fetch data from yt api and allow to listen music in bg.',
        image: yt,
        mainTechnology: 'react',
        demo: 'https://github.com/adamkopczynski/react-sound',
        github: 'https://github.com/adamkopczynski/react-sound',
        technologies: ['react', 'yt-api', 'redux']
    },
    {
        name: 'Chat App',
        description: 'Chat app in NodeJS.',
        image: chat,
        mainTechnology: 'node',
        demo: 'https://chat-app-ak.herokuapp.com/',
        github: 'https://github.com/adamkopczynski/node-chat-app',
        technologies: ['react', 'node', 'websockets']
    }
]

export default projects;