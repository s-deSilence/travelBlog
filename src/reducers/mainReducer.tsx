import { Post } from '../types/types';

const initialState:{ defaultPosts: Post[] } = {
    defaultPosts: [{
        id: 6,
        title: 'Argentina',
        description:'Climate change in Argentina is predicted to have significant effects on the living conditions in Argentina.[159]:30 The climate of Argentina is changing with regards to precipitation patterns and temperatures. The highest increases in the precipitation (from the period 1960–2010) have occurred in the eastern parts of the country. The increase in precipitation has led to more variability in precipitation from year to year in the northern parts of the country, with a higher risk of prolonged droughts, disfavoring agriculture in these regions.',
        mainImage:'https://klubputeshestvennikov.com/wp-content/uploads/2016/10/Argentina-1-1.jpg'
    },{
        id: 5,
        title:'Republic of Zimbabwe',
        description:"Zimbabwe has a tropical climate with many local variations. The southern areas are known for their heat and aridity, parts of the central plateau receive frost in winter, the Zambezi valley is also known for its extreme heat and the Eastern Highlands usually experience cool temperatures and the highest rainfall in the country. The country's rainy season generally runs from late October to March and the hot climate is moderated by increasing altitude. Zimbabwe is faced with recurring droughts. The most recent one began early in 2015 and lasted into 2016. In 2019, at least 55 elephants died because of the drought.[111] Severe storms are rare.[112]",
        mainImage:'https://trip-advice.ru/wp-content/uploads/2019/02/chto-privezti-iz-zimbabve-1.jpg'
    },{
        id: 4,
        title: 'Portugal',
        description:'Portugal (Portuguese: [puɾtuˈɣaɫ]), officially the Portuguese Republic (Portuguese: República Portuguesa [ʁɛˈpuβlikɐ puɾtuˈɣezɐ]),[note 4] is a country located on the Iberian Peninsula, in south-western Europe. It is the westernmost sovereign state in mainland Europe, being bordered to the west and south by the Atlantic Ocean and to the north and east by Spain. Its territory also includes the Atlantic archipelagos of the Azores and Madeira, both autonomous regions with their own regional governments. The official and national language is Portuguese.',
        mainImage:'https://img.emg-services.net/HtmlPages/HtmlPage2129/portugal-header.jpg'
    },{
        id: 3,
        title: 'Denmark',
        description:'A developed country, Danes enjoy a high standard of living and the country ranks highly in some metrics of national performance, including education, health care, protection of civil liberties, democratic governance and LGBT equality.[18][19][20][21] It is among the founding members of NATO, the Nordic Council, the OECD, OSCE, and the United Nations; it is also part of the Schengen Area. Denmark also has close ties to its Scandinavian neighbours linguistically, with the Danish language being partially mutually intelligible with both Norwegian and Swedish.',
        mainImage:'https://public.mishka.travel/images/two_square_mini/9861.jpg'
    },{
        id: 2,
        title: 'Scotland',
        description:'The Kingdom of Scotland emerged as an independent sovereign state in the Early Middle Ages and continued to exist until 1707. By inheritance in 1603, James VI of Scotland became king of England and Ireland, thus forming a personal union of the three kingdoms. Scotland subsequently entered into a political union with the Kingdom of England on 1 May 1707 to create the new Kingdom of Great Britain.[26][27] The union also created the Parliament of Great Britain, which succeeded both the Parliament of Scotland and the Parliament of England. In 1801, the Kingdom of Great Britain entered into a political union with the Kingdom of Ireland to create the United Kingdom of Great Britain and Ireland (in 1922, the Irish Free State seceded from the United Kingdom, leading to the latter being officially renamed the United Kingdom of Great Britain and Northern Ireland in 1927).[28]',
        mainImage:'https://equatorial.by/sites/default/files/scotland002_0.jpg'
    },{
        id: 1,
        title:'Iceland',
        description:'According to the ancient manuscript Landnámabók, the settlement of Iceland began in 874 AD when the Norwegian chieftain Ingólfr Arnarson became the first permanent settler on the island.[14] In the following centuries, Norwegians, and to a lesser extent other Scandinavians, emigrated to Iceland, bringing with them thralls (i.e., slaves or serfs) of Gaelic origin.',
        mainImage:'https://cdn21.img.ria.ru/images/156149/22/1561492254_0:0:3175:2048_600x0_80_0_1_d3bdd3d4280bc89f0cfaf18203439437.jpg'
    }]
}

export const mainReducer = ( state = initialState, action:any ) => {

    switch( action.type ){

        case 'ADD':{
            state = {
                ...state,
                defaultPosts: [ action.payload, ...state.defaultPosts ]
            }
            break;
        }
    }
    
    return state;

}