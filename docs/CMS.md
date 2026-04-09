# Content Management System

A hybrid approach, 
- using google sheets as a primary content database,
- google drive as media storage
- and supabase.com as an authorization server and gateway to the google apis

### Frontend

The CMS interface will be "serverless", instead relying on supabase for the oauth flow, etc.
I will attempt to create a very simple SPA
- Table views for the content categories: 
  - Members (slightly customization for officers)
  - Projects
  - Individual project development logs
- Form editing and submission of new forms for each content category
- Some admin controls for assigning a user as a project lead so that they can post dev logs.

> Maybe the only useful frontend UI would be for project dev logs, for showing a live preview of the content?
> 
> A major downside of this is uploading images/files to the main google drive, to then link it in the spreadsheet. Although a simple AppScript could handle that.
>  
> Would require client side rendering of content, is sveltex able to do that?
> 
> Alternatively provide a basic hosted vscode workspace with a markdown and mathjax preview built in.

The client will use the roles of the user to customize the allowed functions of the UI.

### Backend

Supabase will have minimal data storage to stay on the free plan.
- All OAuth related information for a user (built-in)
- A table that maps a user to a set of permissions.

The frontend will proxy normal google api requests through supabase, by forking the package https://www.npmjs.com/package/google-spreadsheet
- A Supabase edge function will manually interpret that request for the permissions it would require, and then forward it to the google api if the requesting user has them.

## The Google Sheets Database

### API

- Some minor permissions around what can be GET, don't share the email columns
  - https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get

https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#Request


### Project Dev Logs
Project development logs for all projects will exist as a single 

