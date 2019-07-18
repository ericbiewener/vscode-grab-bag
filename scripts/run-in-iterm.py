#!/usr/bin/env python3

import iterm2
import sys

_, TITLE, SESSION_ID, CMD = sys.argv

def find_session(window):
    for tab in window.tabs:
        for session in tab.sessions:
            if session.session_id == SESSION_ID:
                return session


async def main(connection):
    app = await iterm2.async_get_app(connection)
    window = app.current_terminal_window
    session = find_session(window)
    
    if session is None:
        tab = await window.async_create_tab()
        session = tab.current_session
        await session.async_set_name(TITLE)
        # await session.async_send_text('kill process')
    else:
        await session.async_activate()

    await session.async_send_text('{}\n'.format(session.session_id))

    await session.async_send_text('{}\n'.format(CMD))
    print(session.session_id)
    
iterm2.run_until_complete(main)
