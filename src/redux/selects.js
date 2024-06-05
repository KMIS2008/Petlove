import { createSelector } from "@reduxjs/toolkit";

  export const selectContacts=state=>state.contact.items;
  export const selectFilter=state => state.filter;
  export const selectIsLoading=state=> state.contact.isLoading;
  export const selectError=state=>state.contact.error;
  export const selectorNews=state=>state.news.news;
  export const selectorTotalPages=state=>state.news.totalPages;


  export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
     (contact, filter) => {
       return contact.filter(contacts => contacts.name.toLowerCase()
        .includes(filter.toLowerCase()))
     }
    )




