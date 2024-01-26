import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'


const themes = {
  lemonade : 'lemonade',
  dim : 'dim',
} 
const getUserFromLocalStorage= ()=>{
  return JSON.parse(localStorage.getItem('user')) || null
}


const getThemelocalStorage=()=>{
  const theme = localStorage.getItem('theme') || themes.lemonade
  document.documentElement.setAttribute('data-theme',theme)
  return theme ; 
}

const initialState = {
  user:getThemelocalStorage(),
  theme:getThemelocalStorage()

}

const userSlice = createSlice({
name:'user',
initialState,
reducers:{
  loginUser:(state,action) =>{
   const user = {...action.payload.user,token:action.payload.jwt}
  state.user =user
  localStorage.setItem('user',JSON.stringify(user))
  },

  logoutUser:(state) =>{
    state.user=null
    localStorage.removeItem('user');
    toast.success('logged out successfully')
   },
   toggleTheme:(state) =>{
    const {lemonade,dim}= themes
    state.theme = state.theme === lemonade ? dim : lemonade
    document.documentElement.setAttribute('data-theme',state.theme)
    localStorage.setItem('theme',state.theme) 
  },
},
});


export const {loginUser,logoutUser,toggleTheme} = userSlice.actions

export default userSlice.reducer