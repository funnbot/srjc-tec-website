# Notes
## CSS
### Child elements with margins within DIVs
https://stackoverflow.com/questions/1878997/child-elements-with-margins-within-divs

Add `overflow: hidden` or `overflow: auto` to parent


## Auth

### Flow

#### Login

Ok so the login worked, now I think I want to secure it by still calling the code-exchange edge function, to only return the access_token, refresh token, and some minor user details, expiration
How to set the current session in the supabase-js library, using the minimal details.

const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token
  })

this still sets a ton of data anyway, so it seems kinda pointless to try and hide it.

### Permissions

#### Edit Web Content
- Edit main content on the website
  - Various text, meeting times, sponsors, etc.

#### Edit Project Content
- Create or edit all projects
- Create or edit all member cards
- Create or edit all officer cards
- Assign a project lead

#### Project Lead
- Update 

#### Officer
- Edit your own officer card

#### User
- Edit your own member card, 
