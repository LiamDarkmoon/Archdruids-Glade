import React, {  useReducer } from 'react';
import { Settings, Person, ArrowBack } from '@mui/icons-material';
import SideBarOption from '../pure/SideBarComponent';


const AppContext = React.createContext(null)

const SideBar = () => {

    const LIGHTUP = 'LIGHTUP';
    const SHOW_CONTENT = 'SHOW_CONTENT';

    const initialState = {
        active: false,
        show: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case LIGHTUP:
                return {active: !state.active}
            case SHOW_CONTENT:
                return {show: true}
        
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const options = [
        {text: 'Settings', icon: <Settings/>},
        {text: 'Profile', icon: <Person/>},
        {text: 'Back', icon: <ArrowBack/>}
    ]

    

    return (
        <AppContext.Provider value = { state }>
            <div className='sidebar h-100 position-absolute start-0 top-0 gx-0 gt-4 col-2 row justifycontent-center'>
                <div className='list-group list-group-flush'>
                    { options.map((option, index) => (
                        <SideBarOption
                            key = { index }
                            text = { option.text }
                            icon = { option.icon }
                            mouseOver = {() => 
                            dispatch({type: SHOW_CONTENT})
                            }
                            
                        />
                    ))}
                </div>
            </div>
        </AppContext.Provider>
    );
}


export default SideBar;
