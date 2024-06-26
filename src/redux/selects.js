import { createSelector } from "@reduxjs/toolkit";

  export const selectContacts=state=>state.contact.items;
  export const selectFilter=state => state.filter;
  export const selectIsLoading=state=> state.contact.isLoading;
  export const selectError=state=>state.contact.error;
  export const selectorNews=state=>state.news.news;
  export const selectorTotalPages=state=>state.news.totalPages;
  export const selectorTotPages=state=>state.notices.totalPages;
  export const selectorNotices=state=>state.notices.notices;
  export const selectorNoticesId=state=>state.notices.noticeId;
  export const selectorFavorite=state=>state.notices.isFavorite;
  export const selectorFriends=state=>state.friends.friends;
  export const selectorPets=state=>state.user.pets;
  export const selectorUserFull=state=>state.user.userFull;


  export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
     (contact, filter) => {
       return contact.filter(contacts => contacts.name.toLowerCase()
        .includes(filter.toLowerCase()))
     }
    )




