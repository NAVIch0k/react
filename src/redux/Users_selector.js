export const get_users_sel=(state)=>{
    return state.user_page.users
}
export const get_page_size=(state)=>{
    return state.user_page.page_size
}
export const get_total_count_user=(state)=>{
    return state.user_page.total_count_user
}
export const get_current_page=(state)=>{
    return state.user_page.current_page
}
export const get_is_fetching=(state)=>{
    return state.user_page.is_fetching
}
export const get_following_in_progress=(state)=>{
    return state.user_page.following_in_progress
}