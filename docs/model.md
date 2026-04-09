# View Data Model

## Member Card: Team

| Field | Type | Notes |
| ----- | ---- | ----- |
| slug | identifier string | unique, `/team#[slug]` |
| fullName | string |
| avatarImage | image url string |
| status | `active \| alumni` | extracted from timestamp
|  |


## Project Card: Projects List, Project Showcase

| Field | Type | Notes |
| ----- | ---- | ----- |
| slug | identifier string | unique `/projects/[slug]` |
| title | string |
| shortDescription | string |
| coverImage | image url string |
| status | `active \| complete \| onhold` |

## Project Page: 

| Field | Type | Notes |
| ----- | ---- | ----- |
| `...Project Card` |
| devLogs | DevLog[] |
| contributors | Contributor[] |

### DevLog

| Field | Type | Notes |
| ----- | ---- | ----- |
| date | date string |
| body | rendered html string |
| media | image url string[] | optional

### Contributor

| Field | Type | Notes |
| ----- | ---- | ----- |
| fullName | string |
| role | string[] |
| isLead | bool |

# Build Time Data Model

# CMS Data Model

# Database Data Model: Sheets

## Officer Form

| Field | Type | Notes |
| ----- | ---- | ----- |
| Timestamp | date string |
| Full Name | string |
| Head Shot | image url |
| Biography | string | plain text
| Official Role | string[] | 
| LinkedIn | url | `https://www.linkedin.com/in/[username]`
| Major/Title | string | e.g. Electrical Engineer

## Member Form

## Project Dev Log

## Project Info

## Project Contributor