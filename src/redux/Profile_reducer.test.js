import profile_reducer, { add_post_creater } from './Profile_reducer'

test('renders reducer', () => {
    let action=add_post_creater('kek, hello')

    let state={posts: [
        { id: 1, message: 'How are you?', likes_count: 122 },
        { id: 2, message: 'My project', likes_count: 233 },
        { id: 3, message: 'Hello World', likes_count: 92 }
    ]}

    let new_state = profile_reducer(state, action)

    expect(new_state.posts.length).toBe(4)
});

