import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name:'Maple',
            cover:'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
            artist:'Arbour, Aarigod',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=13012',
            color:['#76944c','#B9CF7A'],
            id:uuidv4(),
            active: true,
        },
        {
            name:'Peaches',
            cover:'https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg',
            artist:'Philanthrope, The Field Tapes',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=11239',
            color:['#E7A277','#8C6652'],
            id:uuidv4(),
            active: false,
        },
        {
            name:'Cascade',
            cover:'https://i.scdn.co/image/ab67616d0000b273830bd373ee7338313033ec42',
            artist:'Knowmadic',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=13091',
            color:['#02524D','#BAC6AF'],
            id:uuidv4(),
            active: false,
        },
        {
            name:'Murmuration',
            cover:'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
            artist:'Blue Wednesday, Shopan',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=1226',
            color:['#B7A9DC','#E4AAD3'],
            id:uuidv4(),
            active: false,
        },
        {
            name:'Desire',
            cover:'https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg',
            artist:'Psalm Trees, Guillaume Muschalle',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=10550',
            color:['#FBF4E4','#9D8D73'],
            id:uuidv4(),
            active: false,
        },
        {
            name:'Oasis',
            cover:'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
            artist:'Mazko',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=11766',
            color:['#365D99','#C87571'],
            id:uuidv4(),
            active: false,
        },
        {
            name:'Harbor',
            cover:'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
            artist:'Stan Forebee, The Field Tapes, azula, Francis',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=13091',
            color:['#DEEBE2','#B3C1A5'],
            id:uuidv4(),
            active: false,
        },
    ]
}  

export default chillHop;