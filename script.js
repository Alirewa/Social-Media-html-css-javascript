// Sidebar Selecting
const menuItem = document.querySelectorAll('.menu-item');

// Messages Selecting
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// theme selecting
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

const changeActiveItem = () => {
 menuItem.forEach((item) => {
  item.classList.remove('active');
 });
};
menuItem.forEach((item) => {
 item.addEventListener('click', () => {
  changeActiveItem();
  item.classList.add('active');
  if (item.id != 'notifications') {
   document.querySelector('.notifications-popup').style.display = 'none';
  } else {
   document.querySelector('.notifications-popup').style.display = 'block';
   document.querySelector('#notifications .notification-count').style.display = 'none';
  }
 });
});

// Messages
// search chats
const searchMessage = () => {
 const val = messageSearch.value.toLowerCase();

 message.forEach((chat) => {
  let name = chat.querySelector('h5').textContent.toLowerCase();
  if (name.indexOf(val) != -1) {
   chat.style.display = 'flex';
  } else {
   chat.style.display = 'none';
  }
 });
};

// search chat
messageSearch.addEventListener('keyup', searchMessage);
// hide count after click and highlight
messagesNotifications.addEventListener('click', () => {
 message.style.boxShadow = '0 0 1rem var(--color-primary)';
 messagesNotifications.querySelector('.notification-count').style.display = 'none';
 setTimeout(() => {
  message.style.boxShadow = 'none';
 }, 2000);
});

//  theme customization
const openThemeModal = () => {
 themeModal.style.display = 'grid';
};
const closeThemeModal = (e) => {
 if (e.target.classList.contains('customize-theme')) {
  themeModal.style.display = 'none';
 }
};
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// font size theme
const removeSizeSelector = () => {
 fontSize.forEach((size) => {
  size.classList.remove('active');
 });
};

fontSize.forEach((size) => {
 size.addEventListener('click', () => {
  removeSizeSelector();
  let fontSize;
  size.classList.toggle('active');
  if (size.classList.contains('font-size-1')) {
   fontSize = '10px';
   root.style.setProperty('--sticky-top-left', '5.4rem');
   root.style.setProperty('--sticky-top-right', '5.4rem');
  } else if (size.classList.contains('font-size-2')) {
   fontSize = '13px';
   root.style.setProperty('--sticky-top-left', '5.4rem');
   root.style.setProperty('--sticky-top-right', '-7rem');
  } else if (size.classList.contains('font-size-3')) {
   fontSize = '16px';
   root.style.setProperty('--sticky-top-left', '-2rem');
   root.style.setProperty('--sticky-top-right', '-17rem');
  } else if (size.classList.contains('font-size-4')) {
   fontSize = '19px';
   root.style.setProperty('--sticky-top-left', '-5rem');
   root.style.setProperty('--sticky-top-right', '-25rem');
  } else if (size.classList.contains('font-size-5')) {
   fontSize = '22px';
   root.style.setProperty('--sticky-top-left', '-10rem');
   root.style.setProperty('--sticky-top-right', '-33rem');
  }
  // change font size of the root html element
  document.querySelector('html').style.fontSize = fontSize;
 });
});

// remove active class from colors
const changeActiveColorClass = () => {
 colorPallete.forEach((colorPicker) => {
  colorPicker.classList.remove('active');
 });
};
// change primary color
colorPallete.forEach((color) => {
 color.addEventListener('click', () => {
  let primaryHue;
  changeActiveColorClass();
  if (color.classList.contains('color-1')) {
   primaryHue = 252;
  } else if (color.classList.contains('color-2')) {
   primaryHue = 52;
  } else if (color.classList.contains('color-3')) {
   primaryHue = 352;
  } else if (color.classList.contains('color-4')) {
   primaryHue = 152;
  } else if (color.classList.contains('color-5')) {
   primaryHue = 202;
  }
  color.classList.add('active');

  root.style.setProperty('--primary-color-hue', primaryHue);
 });
});

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
 root.style.setProperty('--light-color-lightness', lightColorLightness);
 root.style.setProperty('--white-color-lightness', whiteColorLightness);
 root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

bg1.addEventListener('click', () => {
 bg1.classList.add('active');

 bg2.classList.remove('active');
 bg3.classList.remove('active');
 window.location.reload();
});

bg2.addEventListener('click', () => {
 darkColorLightness = '95%';
 whiteColorLightness = '20%';
 lightColorLightness = '15%';

 bg2.classList.add('active');

 bg1.classList.remove('active');
 bg3.classList.remove('active');
 changeBG();
});

bg3.addEventListener('click', () => {
 darkColorLightness = '95%';
 whiteColorLightness = '10%';
 lightColorLightness = '0%';

 bg3.classList.add('active');

 bg1.classList.remove('active');
 bg2.classList.remove('active');
 changeBG();
});
