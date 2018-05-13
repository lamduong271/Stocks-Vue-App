import Porfolio from './components/content/Porfolio.vue';
import Stocks from './components/content/Stocks.vue';
import Menu from './components/Menu.vue';
import General from './components/content/General.vue';
export const routes=[
    {
        path:'',
        name:'Home',
        components:{
            default:General,
            'menu':Menu
        }
    },
    {
        path:'/stocks',
        name:'Stocks',
        components:{
            default:Stocks,
            'menu':Menu
        }
    },
    {
        path:'/porfolio',
        name:"Porfolio",
        components:{
            default:Porfolio,
            'menu':Menu
        }
    }
]