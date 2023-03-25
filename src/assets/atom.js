import { atom } from "recoil";

export const emailState = atom({
  key: 'emailState',
  default: ''
});

export const nicknameState = atom({
  key: 'nicknameState',
  default: ''
});

export const passwordState = atom({
  key: 'passwordState',
  default: ''
});

export const categoryState = atom({
  key: 'selectedCategory',
  default: "용기내챌린지", 
});

export const navbarState = atom({
    key: 'selectedNavbar',
    default: "커뮤니티",
})

export const menuState = atom({
  key: 'selectedMenu',
  default: "북극곰",
})

export const topBar = atom({
  key: 'topBar',
  default: '#fff',
})
