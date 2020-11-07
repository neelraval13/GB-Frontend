import { 
   SET_DARK_THEME,
   SET_LIGHT_THEME,
   SET_DRAWER_VISIBLE,
   SET_DARK_BLUE_THEME
 } from "../../constants/actionTypes"
 
import { 
    darkBgColor, 
    darkBlueBgColor, 
    darkBlueCardColor, 
    darkBlueNavColor, 
    darkCardColor, 
    darkNavColor, 
    darkTextColor, 
    lightBgColor, 
    lightCardColor, 
    lightNavColor, 
    lightTextColor
} from "../../constants/colors"

const lightNavLogo = require('../../assets/company/gb3.png')
const darkNavLogo = require('../../assets/company/gb.png')


const INIT_STATE ={
    theme:'dark',
    navBg:darkNavColor,
    cardBg:darkCardColor,
    bgColor:darkBgColor,
    textColor:darkTextColor,
    navLogo:darkNavLogo,
    showDrawer:false,
    
}

const SettingsReducer =  (state=INIT_STATE,action) =>{
    switch(action.type){
        case SET_DARK_THEME:
            return {
                ...state,
                theme:'dark',
                navBg:darkNavColor,
                cardBg:darkCardColor,
                bgColor:darkBgColor,
                navLogo:darkNavLogo,
                textColor:darkTextColor,
            }
        
        case SET_LIGHT_THEME:
            return {
                ...state,
                theme:'light',
                navBg:lightNavColor,
                cardBg:lightCardColor,
                bgColor:lightBgColor,
                textColor:lightTextColor,
                navLogo:lightNavLogo
            }
        case SET_DARK_BLUE_THEME:
                return {
                    ...state,
                    theme:'darkblue',
                    navBg:darkBlueNavColor,
                    cardBg:darkBlueCardColor,
                    bgColor:darkBlueBgColor,
                    textColor:darkTextColor,
                    navLogo:darkNavLogo,
                }
        case SET_DRAWER_VISIBLE:
            return{
                ...state,
                showDrawer:action.payload
            }
        
        default :
            return state
    }
}


export default SettingsReducer
