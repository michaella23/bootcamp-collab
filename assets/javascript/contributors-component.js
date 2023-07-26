'use strict';

import { contributors } from "./contributors.js";

const scrimbaContributorsContainerEl = document.querySelector('.scrimba-contributors--container');
const scrimbaContributorsLoadMoreBtnEl = document.querySelector('.load-more');

/*
    The function below generates a random number for
    a random default profile image
*/
const randomDefaultProfilePic = function () {
  const randomNumber = Math.floor(Math.random() * 10);

  return `./assets/images/scrimba-likes-default/default-${randomNumber}.jpg`
}

const randomContributor = function () {
  return Math.floor(Math.random() * contributors.length);
}

/*
    Below are a bunch of bite sized create... Element functions
    that just create elements, add classes/attributes/content
*/
const createScrimbaContributorsCardEl = function () {
  const scrimbaContributorsCardEl = document.createElement('div');
  scrimbaContributorsCardEl.classList.add('scrimba-contributors-card');
  return scrimbaContributorsCardEl;
}

const createUserImgBoxEl = function () {
  const userImgBoxEl = document.createElement('div');
  userImgBoxEl.classList.add('scrimba-contributors--user-img-box');

  return userImgBoxEl;
}

const createUserImgEl = function (index) {
  const userImgEl = document.createElement('img');
  const ifUserImage = contributors[index].profileImage ? contributors[index].profileImage : randomDefaultProfilePic();
  userImgEl.classList.add('scrimba-contributors--user-img');
  userImgEl.setAttribute('src', ifUserImage);

  return userImgEl;
}

const createUserTextBoxEl = function () {
  const userTextBoxEl = document.createElement('div');
  userTextBoxEl.classList.add('scrimba-contributors--user-text-box');

  return userTextBoxEl;
}

const createUserTextBoxHeaderEl = function () {
  const userTextBoxHeaderEl = document.createElement('div');
  userTextBoxHeaderEl.classList.add('user-text-box-header');

  return userTextBoxHeaderEl;
}

const createUsernameContainerEl = function () {
  const usernameContainerEl = document.createElement('div');
  usernameContainerEl.classList.add('username-container');

  return usernameContainerEl;
}

const createUsernameEl = function (index) {
  const usernameEl = document.createElement('span');
  usernameEl.classList.add('scrimba-contributors--username');
  usernameEl.textContent = contributors[index].name;

  return usernameEl;
}

const createUserLinkEl = function (index) {
  const userLinkEl = document.createElement('a');
  userLinkEl.classList.add('scrimba-contributors--link');
  userLinkEl.setAttribute('href', contributors[index].githubLink);
  userLinkEl.setAttribute('target', '_blank');
  userLinkEl.textContent = contributors[index].githubName;

  return userLinkEl;
}

const createFavIcecreamEl = function (index) {
  const favIcecreamEl = document.createElement('span');
  favIcecreamEl.classList.add('scrimba-contributors--fav-icecream');
  favIcecreamEl.textContent = `My favorite ice-cream is ${contributors[index].favorite_ice_cream}`;

  return favIcecreamEl;
}

const createLocationEl = function (index) {
  const locationEl = document.createElement('span');
  locationEl.classList.add('scrimba-contributors--location');
  locationEl.textContent = contributors[index].location;

  return locationEl;
}

const createUserCommentEl = function (index) {
  const userCommentEl = document.createElement('p');
  userCommentEl.classList.add('scrimba-contributors--user-comment');
  userCommentEl.textContent = contributors[index].likes;

  return userCommentEl;
}

const checkAllContributorsLoaded = function () {
  return contributors.length === 0;
}

/*
    Below are a bunch of append element functions
*/
const appendContentsUserImgBoxEl = function (userImgBoxEl, userImgEl) {
  userImgBoxEl.append(userImgEl);
}

const appendUsernameContainerEl = function (index, usernameContainerEl, usernameEl, userLinkEl, favIcecreamEl) {
  if (contributors[index].githubLink) {
    usernameContainerEl.append(usernameEl, userLinkEl, favIcecreamEl);
  } else {
    usernameContainerEl.append(usernameEl, favIcecreamEl);
  }
}

const appendUserTextBoxHeaderEl = function (userTextBoxHeaderEl, usernameContainerEl, locationEl) {
  userTextBoxHeaderEl.append(usernameContainerEl, locationEl);
}

const appendUserTextBoxEl = function (userTextBoxEl, userTextBoxHeaderEl, userCommentEl) {
  userTextBoxEl.append(userTextBoxHeaderEl, userCommentEl);
}

const appendScrimbaContributorsCardEl = function (scrimbaContributorsCardEl, userImgBoxEl, userTextBoxEl) {
  scrimbaContributorsCardEl.append(userImgBoxEl, userTextBoxEl);
}

const appendScrimbaContributorsContainerEl = function (scrimbaContributorsCardEl) {
  scrimbaContributorsContainerEl.append(scrimbaContributorsCardEl);
}

/*
    This function puts it all together, so that we can run this
    in a loop below this function
*/
const createScrimbaContributorsElements = function (index) {
  const scrimbaContributorsCardEl = createScrimbaContributorsCardEl();
  const userImgBoxEl = createUserImgBoxEl();
  const userImgEl = createUserImgEl(index);
  const userTextBoxEl = createUserTextBoxEl();
  const userTextBoxHeaderEl = createUserTextBoxHeaderEl();
  const usernameContainerEl = createUsernameContainerEl();
  const usernameEl = createUsernameEl(index);
  const userLinkEl = createUserLinkEl(index);
  const favIcecreamEl = createFavIcecreamEl(index);
  const locationEl = createLocationEl(index);
  const userCommentEl = createUserCommentEl(index);

  appendContentsUserImgBoxEl(userImgBoxEl, userImgEl);
  appendUsernameContainerEl(index, usernameContainerEl, usernameEl, userLinkEl, favIcecreamEl);
  appendUserTextBoxHeaderEl(userTextBoxHeaderEl, usernameContainerEl, locationEl);
  appendUserTextBoxEl(userTextBoxEl, userTextBoxHeaderEl, userCommentEl);
  appendScrimbaContributorsCardEl(scrimbaContributorsCardEl, userImgBoxEl, userTextBoxEl)
  appendScrimbaContributorsContainerEl(scrimbaContributorsCardEl)
}

const renderScrimbaContributors = function (loadAmount) {  
  for (let i = 0; i < loadAmount; i++) {
    if (checkAllContributorsLoaded()) return
    let randomIndex = randomContributor();
    createScrimbaContributorsElements(randomIndex)
    // Delete selected element
    contributors.splice(randomIndex, 1)
  }
}

/* 
    below is just a function that loads a specific amount of
    contriutors per click
*/
scrimbaContributorsLoadMoreBtnEl.addEventListener('click', function () {
  if (!checkAllContributorsLoaded()) {
    renderScrimbaContributors();
  }
  if (checkAllContributorsLoaded()) {
    scrimbaContributorsLoadMoreBtnEl.remove()
  }
})

const init = function () {
  renderScrimbaContributors();
}

init()